import './style.css';
import createComputerPlayer from './computer';
import domManipulation from './domManipulation';
import createPlayer from './player';

const player = createPlayer();
const computer = createComputerPlayer();

domManipulation.drawPlayerBoard(player.getBoard());
domManipulation.drawComputerBoard(computer.getBoard());
domManipulation.drawShipSelector();
domManipulation.drawAttackCoordinateSelector();
