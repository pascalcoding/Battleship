import createPlayer from './player';
import createComputerPlayer from './computer';
import domManipulation from './domManipulation';

const gameLogic = (() => {
  let player;
  let computer;
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
  };
})();

export default gameLogic;
