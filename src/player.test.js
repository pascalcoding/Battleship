import createGameboard from './gameboard';
import createPlayer from './player';

describe('Player', () => {
  it('Initializes Player correctly', () => {
    const player = createPlayer();
    expect(player.getShips().length).toBe(5);
  });

  it('Takes turn correctly', () => {
    const player = createPlayer();
    const enemyBoard = createGameboard();
    player.takeTurn(enemyBoard, 1, 1);
    expect(enemyBoard.getBoard()[1][1]).toBe('M');
  });
});
