import createPlayer from './player';
import createComputerPlayer from './computer';
import domManipulation from './domManipulation';

const gameLogic = (() => {
  let player;
  let computer;
  let currentPlayer;
  let countPlaced = 0;

  const convertCharToNum = (char) => {
    return char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  };

  const isLegalShipPlacement = (x, y, ship, board) => {
    const boardArr = board.getBoard();
    //Coordinates between 0 and 9
    if (!(x <= 9 && x >= 0)) {
      return false;
    }
    if (!(y <= 9 && y >= 0)) {
      return false;
    }

    if (ship.getDirection() === 'x') {
      // Check own squares
      if (y + ship.getLength() > 9) {
        return false;
      }
      const startPos = y >= 1 ? y - 1 : y;
      const endPos =
        y + ship.getLength() <= 8
          ? y + ship.getLength() + 1
          : y + ship.getLength();
      // Check own row
      for (let i = startPos; i < endPos; i++) {
        if (boardArr[x][i] !== 'E') {
          // Iterate over [x][i]
          return false;
        }
      }
      // Check row above
      if (x > 0) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[x - 1][i] !== 'E') {
            // Iterate over [x - 1][i]
            return false;
          }
        }
      }
      // Check row below
      if (x < 9) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[x + 1][i] !== 'E') {
            // Iterate over [x + 1][i]
            return false;
          }
        }
      }
    } else {
      if (x + ship.getLength() > 9) {
        return false;
      }
      const startPos = x >= 1 ? x - 1 : x;
      const endPos =
        x + ship.getLength() <= 8
          ? x + ship.getLength() + 1
          : x + ship.getLength();
      for (let i = startPos; i < endPos; i++) {
        if (boardArr[i][y] !== 'E') {
          // Iterate over [i][y]
          return false;
        }
      }
      if (y > 0) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[i][y - 1] !== 'E') {
            // Iterate over [i][y - 1]
            return false;
          }
        }
      }
      if (y < 9) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[i][y + 1] !== 'E') {
            // Iterate over [i][y + 1]
            return false;
          }
        }
      }
    }
    return true;
  };
  const isLegalAttack = (x, y, board) => {
    if (!(x <= 9 && x >= 0)) {
      return false;
    }
    if (!(y <= 9 && y >= 0)) {
      return false;
    }

    const cell = board.getBoard()[x][y];

    if (cell === 'M' || cell === 'H') {
      return false;
    }

    return true;
  };

  const addEventListeners = () => {
    const shipInput = document.getElementById('ship-coord-input');
    const verticalRadio = document.querySelector(
      'input[type="radio"][name="direction"][value="vertical"]'
    );
    const horizontalRaido = document.querySelector(
      'input[type="radio"][name="direction"][value="horizontal"]'
    );
    const attackInput = document.getElementById('attack-input');
    const submitShipButton = document.getElementById('submit-ship-button');
    const submitAttackButton = document.getElementById('submit-attack-button');

    submitShipButton.addEventListener('click', () => {
      const shipName = document.getElementById('ship-type-select').value;
      let currentShip;
      player.getShips().forEach((ship) => {
        if (ship.getName() === shipName) {
          currentShip = ship;
        }
      });
      const horizontal = horizontalRaido.checked;
      const vertical = verticalRadio.checked;
      if (vertical && currentShip.getDirection() != 'y') {
        currentShip.changeDirection();
      } else if (horizontal && currentShip.getDirection() != 'x') {
        currentShip.changeDirection();
      }
      const coord = shipInput.value;
      const y = convertCharToNum(coord.slice(0, 1));
      const x = Number(coord.slice(1, coord.length));
      if (
        gameLogic.isLegalShipPlacement(x, y, currentShip, player.getBoard())
      ) {
        countPlaced++;
        player.getBoard().placeShip(currentShip, x, y);
        const options = Array.from(
          document.querySelectorAll('#ship-type-select > option')
        );
        options.every((opt) => {
          if (opt.value === shipName) {
            opt.remove();
            return false;
          }
          return true;
        });
        if (currentShip.getDirection() === 'x') {
          for (let i = y; i < y + currentShip.getLength(); i++) {
            domManipulation.updateCell(player.getBoard(), x, i);
          }
        } else {
          for (let i = x; i < x + currentShip.getLength(); i++) {
            domManipulation.updateCell(player.getBoard(), i, y);
          }
        }
      }
      if (countPlaced >= 5) {
        document.getElementById('ship-selector').classList.add('invisible');
        document
          .getElementById('attack-coord-selector')
          .classList.remove('invisible');
      }
    });

    submitAttackButton.addEventListener('click', () => {
      if (currentPlayer === 'computer') return;
      const coord = attackInput.value;
      let y = convertCharToNum(coord.slice(0, 1));
      let x = Number(coord.slice(1, coord.length));

      if (isLegalAttack(x, y, computer.getBoard())) {
        player.takeTurn(computer.getBoard(), x, y);
        domManipulation.updateCell(computer.getBoard(), x, y, true);
        if (computer.getBoard().getBoard()[x][y] !== 'H') {
          currentPlayer = 'computer';
          while (currentPlayer === 'computer') {
            computer.takeTurn(player.getBoard());
            ({ x, y } = computer.getLastMove());
            domManipulation.updateCell(player.getBoard(), x, y, false);
            if (player.getBoard().getBoard()[x][y] !== 'H') {
              currentPlayer = player;
            }
          }
        }
      }
    });
  };

  const getWinner = () => {
    const playerBoardArr = player.getBoard().getBoard();
    const computerBoardArr = computer.getBoard().getBoard();
    let playerWon = true;
    let computerWon = true;
    player: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (playerBoardArr[i][j] === 'S') {
          playerWon = false;
          break player;
        }
      }
    }
    computer: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (computerBoardArr[i][j] === 'S') {
          computerWon = false;
          break computer;
        }
      }
    }
    if (computerWon) {
      return 'computer';
    } else if (playerWon) {
      return 'player';
    } else {
      return '';
    }
  };

  const initGame = () => {
    player = createPlayer();
    computer = createComputerPlayer();
    currentPlayer = 'player';

    domManipulation.drawPlayerBoard(player.getBoard());
    domManipulation.drawComputerBoard(computer.getBoard());

    domManipulation.drawShipSelector(player);
    domManipulation.drawAttackCoordinateSelector();

    addEventListeners();
  };

  return {
    initGame,
    isLegalAttack,
    isLegalShipPlacement,
    getWinner,
  };
})();

export default gameLogic;
