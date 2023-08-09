import createComputerPlayer from './computer';
import createGameboard from './gameboard';

describe('Computer Player', () => {
  it('should take a legal turn and attack a cell', () => {
    const computerPlayer = createComputerPlayer();
    const humanBoard = createGameboard();

    // Mocking the receiveAttack function to track if it's called
    const originalReceiveAttack = humanBoard.receiveAttack;
    humanBoard.receiveAttack = jest.fn(originalReceiveAttack);

    computerPlayer.takeTurn(humanBoard);

    expect(humanBoard.receiveAttack).toHaveBeenCalled();
  });

  it('should take multiple turns and attack different cells', () => {
    const computerPlayer = createComputerPlayer();
    const humanBoard = createGameboard();

    // Mocking the receiveAttack function to track attacked cells
    const attackedCells = new Set();
    const originalReceiveAttack = humanBoard.receiveAttack;
    humanBoard.receiveAttack = (x, y) => {
      attackedCells.add(`${x},${y}`);
      originalReceiveAttack(x, y);
    };

    for (let i = 0; i < 10; i++) {
      computerPlayer.takeTurn(humanBoard);
    }

    // Ensure that attacked cells are unique (legal moves)
    expect(attackedCells.size).toBe(10);
  });
});
