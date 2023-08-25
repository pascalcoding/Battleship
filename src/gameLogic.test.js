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

  it('should return false if ship placement is out of bounds', () => {
    const board = createGameboard();
    const ship = createShip(2);

    // Check out of bounds placements
    expect(gameLogic.isLegalShipPlacement(9, 3, ship, board)).toBe(false); // x-coordinate too large
    expect(gameLogic.isLegalShipPlacement(3, 10, ship, board)).toBe(false); // y-coordinate too large
    expect(gameLogic.isLegalShipPlacement(-1, 2, ship, board)).toBe(false); // x-coordinate too small
    expect(gameLogic.isLegalShipPlacement(2, -1, ship, board)).toBe(false); // y-coordinate too small
  });

  it('should return false if ship placement overlaps with existing ships', () => {
    const board = createGameboard();
    const ship1 = createShip(2);
    const ship2 = createShip(3);
    ship2.changeDirection();

    // Place a ship at (1, 1)
    board.placeShip(ship1, 1, 1);

    // Check placements that overlap with the existing ship
    expect(gameLogic.isLegalShipPlacement(2, 3, ship2, board)).toBe(false); // Overlaps with existing ship
    expect(gameLogic.isLegalShipPlacement(0, 0, ship2, board)).toBe(false); // Overlaps with existing ship
    expect(gameLogic.isLegalShipPlacement(2, 2, ship2, board)).toBe(false); // Overlaps with existing ship
  });

  it('should return true for valid ship placements', () => {
    const board = createGameboard();
    const ship1 = createShip(2);
    const ship2 = createShip(3);
    ship2.changeDirection();

    // Check valid ship placements
    expect(gameLogic.isLegalShipPlacement(1, 2, ship1, board)).toBe(true); // Doesn't overlap, within bounds
    expect(gameLogic.isLegalShipPlacement(2, 5, ship2, board)).toBe(true); // Doesn't overlap, within bounds
  });
});
