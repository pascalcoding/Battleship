import gameLogic from './gameLogic';
import createPlayer from './player';

describe('gameLogic', () => {
  it('Checks legal attacks accordingly', () => {
    const player = createPlayer();
    const player2 = createPlayer();
    expect(gameLogic.isLegalAttack('K', 9, player.getBoard())).toBe(false);
    expect(gameLogic.isLegalAttack('A', 12, player.getBoard())).toBe(false);
    expect(gameLogic.isLegalAttack('C', 9, player.getBoard())).toBe(true);
    expect(gameLogic.isLegalAttack('c', 7, player.getBoard())).toBe(true);

    player2.takeTurn(player.getBoard(), 2, 7);
    expect(gameLogic.isLegalAttack('c', 7, player.getBoard())).toBe(false);
  });
});
