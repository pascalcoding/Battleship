import gameLogic from './gameLogic';
import createPlayer from './player';

describe('gameLogic', () => {
  it('Checks legal attacks accordingly', () => {
    const player = createPlayer();
    const player2 = createPlayer();
    expect(gameLogic.isLegalAttack(11, 9, player.getBoard())).toBe(false);
    expect(gameLogic.isLegalAttack(1, 12, player.getBoard())).toBe(false);
    expect(gameLogic.isLegalAttack(3, 9, player.getBoard())).toBe(true);
    expect(gameLogic.isLegalAttack(2, 7, player.getBoard())).toBe(true);

    player2.takeTurn(player.getBoard(), 2, 7);
    expect(gameLogic.isLegalAttack(2, 7, player.getBoard())).toBe(false);
  });
});
