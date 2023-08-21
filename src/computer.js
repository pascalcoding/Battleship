import createGameboard from './gameboard';

const createComputerPlayer = () => {
  const board = createGameboard();

  const getBoard = () => board;

  const getRandomCoordinates = () => {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;

    return { x, y };
  };

  const takeTurn = (enemyBoard) => {
    let legalMoveFound = false;
    while (!legalMoveFound) {
      const { x, y } = getRandomCoordinates();
      const cell = enemyBoard.getBoard()[x][y];
      if (cell !== 'H' && cell !== 'M') {
        legalMoveFound = true;
        enemyBoard.receiveAttack(x, y);
      }
    }
  };

  return {
    getBoard,
    takeTurn,
  };
};

export default createComputerPlayer;
