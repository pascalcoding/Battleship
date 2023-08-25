import createGameboard from './gameboard';
import createShip from './ship';

const createShips = () => {
  const ships = [];
  for (let i = 1; i < 6; i++) {
    ships.push(createShip(i));
  }
  return ships;
};

const createPlayer = () => {
  const board = createGameboard();
  const ships = createShips();

  const getShips = () => ships;

  const getBoard = () => board;

  const takeTurn = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
  };

  return {
    getShips,
    getBoard,
    takeTurn,
  };
};

export default createPlayer;
