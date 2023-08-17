import createPlayer from './player';
import createComputerPlayer from './computer';
import domManipulation from './domManipulation';

const gameLogic = (() => {
  let player;
  let computer;

  const isLegalShipPlacement = (x, y, ship, board) => {};
  const isLegalAttack = (x, y, board) => {
    const charCode = x.toUpperCase().charCodeAt(0);
    const aCharCode = 'A'.charCodeAt(0);
    const jCharCode = 'J'.charCodeAt(0);

    if (!(charCode >= aCharCode && charCode <= jCharCode)) {
      return false;
    }
    if (!(y <= 10 && y >= 1)) {
      return false;
    }

    const xIndex = charCode - aCharCode;
    const cell = board.getBoard()[xIndex][y];

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
      const x = coord.slice(0, 1);
      const y = coord.slice(1, coord.length);
      if (isLegalAttack(x, y, computer.getBoard())) {
        player.takeTurn(computer.getBoard(), x, y);
      }
    });
  };

  const initGame = () => {
    player = createPlayer();
    computer = createComputerPlayer();

    domManipulation.drawPlayerBoard(player.getBoard());
    domManipulation.drawComputerBoard(computer.getBoard());

    domManipulation.drawShipSelector();
    domManipulation.drawAttackCoordinateSelector();
  };

  return {
    initGame,
    isLegalAttack,
    isLegalShipPlacement,
  };
})();

export default gameLogic;
