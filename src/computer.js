import gameLogic from './gameLogic';
import createGameboard from './gameboard';
import createShip from './ship';

const createShips = () => {
  const ships = [];
  for (let i = 1; i < 6; i++) {
    ships.push(createShip(i));
  }
  return ships;
};

const createComputerPlayer = () => {
  const board = createGameboard();
  const ships = createShips();
  const getBoard = () => board;
  let lastMove;

  const getRandomCoordinates = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return { x, y };
  };

  ships.forEach((ship) => {
    let { x, y } = getRandomCoordinates();
    while (!gameLogic.isLegalShipPlacement(x, y, ship, board)) {
      ({ x, y } = getRandomCoordinates());
    }
    board.placeShip(ship, x, y);
  });

  const takeTurn = (enemyBoard) => {
    let legalMoveFound = false;
    while (!legalMoveFound) {
      const { x, y } = getRandomCoordinates();
      const cell = enemyBoard.getBoard()[x][y];
      if (cell !== 'H' && cell !== 'M') {
        legalMoveFound = true;
        enemyBoard.receiveAttack(x, y);
        lastMove = { x, y };
      }
    }
  };
  const getLastMove = () => lastMove;

  return {
    getBoard,
    takeTurn,
    getLastMove,
  };
};

export default createComputerPlayer;
