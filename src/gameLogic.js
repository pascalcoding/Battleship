import createPlayer from './player';
import createComputerPlayer from './computer';
import domManipulation from './domManipulation';

const gameLogic = (() => {
  let player;
  let computer;

  const convertCharToNum = (char) => {
    return char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  };

  const isLegalShipPlacement = (x, y, ship, board) => {};
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
    const shipInput = document.getElementById('ship-input');
    const horizontalRadio = document.querySelector(
      'input[type="radio"][name="direction"][value="horizontal"]'
    );
    const attackInput = document.getElementById('attack-input');
    const submitShipButton = document.getElementById('submit-ship-button');
    const submitAttackButton = document.getElementById('submit-attack-button');

    submitShipButton.addEventListener('click', () => {
      const horizontal = horizontalRadio.checked;
      const coord = shipInput.value;
      const x = coord.slice(0, 1);
      const y = coord.slice(1, coord.length);
      //Legal Input

      //Place Ship
    });

    submitAttackButton.addEventListener('click', () => {
      const coord = attackInput.value;
      const x = convertCharToNum(coord.slice(0, 1));
      const y = Number(coord.slice(1, coord.length));

      if (isLegalAttack(x, y, computer.getBoard())) {
        player.takeTurn(computer.getBoard(), x, y);
        domManipulation.updateCell(computer.getBoard(), x, y, true);
      }
    });
  };

  const initGame = () => {
    player = createPlayer();
    computer = createComputerPlayer();

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
  };
})();

export default gameLogic;
