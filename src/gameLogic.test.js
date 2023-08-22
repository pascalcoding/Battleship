import gameLogic from './gameLogic';
import createGameboard from './gameboard';
import createPlayer from './player';
import createShip from './ship';

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

  it('Checks legal ship placements accordingly', () => {
    const board = createGameboard();
    const ship1 = createShip(2);
    const ship2 = createShip(3);
    ship2.changeDirection();
    expect(gameLogic.isLegalShipPlacement(9, 3, ship1, board)).toBe(false);
    expect(gameLogic.isLegalShipPlacement(3, 9, ship2, board)).toBe(false);

    expect(gameLogic.isLegalShipPlacement(1, 2, ship1, board)).toBe(true);
    expect(gameLogic.isLegalShipPlacement(2, 5, ship2, board)).toBe(true);

    board.placeShip(ship1, 1, 1);
    expect(gameLogic.isLegalShipPlacement(2, 3, ship2, board)).toBe(false);
    expect(gameLogic.isLegalShipPlacement(0, 0, ship2, board)).toBe(false);
    expect(gameLogic.isLegalShipPlacement(2, 2, ship2, board)).toBe(false);
  });
});
