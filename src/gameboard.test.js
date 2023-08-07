import createGameboard from './gameboard';
import createShip from './ship';

describe('Gameboard', () => {
  it('Initializes gameboard correctly', () => {
    const gameboard = createGameboard();
    expect(gameboard.getBoard()[3][4]).toBe('E');
    expect(gameboard.getBoard().length).toBe(10);
    expect(gameboard.getBoard()[2].length).toBe(10);
  });

  it('Places ships correctly', () => {
    const gameboard = createGameboard();
    const ship1 = createShip(5);
    gameboard.placeShip(ship1, 0, 0);

    const ship2 = createShip(3);
    ship2.changeDirection();
    gameboard.placeShip(ship2, 2, 1);

    for (let i = 0; i < 5; i++) {
      expect(gameboard.getBoard()[0][i]).toBe('S');
    }
    for (let i = 0; i < 3; i++) {
      expect(gameboard.getBoard()[i + 2][1]).toBe('S');
    }
  });

  it('Attacks change board accordingly', () => {
    const gameboard = createGameboard();
    const ship1 = createShip(5);
    gameboard.placeShip(ship1, 0, 0);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);

    expect(gameboard.getBoard()[0][0]).toBe('H');
    expect(gameboard.getBoard()[1][0]).toBe('M');
  });

  it('Attacks also update the corresponding ship', () => {
    const gameboard = createGameboard();
    const ship1 = createShip(2);
    gameboard.placeShip(ship1, 0, 0);

    gameboard.receiveAttack(0, 0);
    expect(ship1.getHits()).toBe(1);

    gameboard.receiveAttack(0, 1);
    expect(ship1.getHits()).toBe(2);
    expect(ship1.isSunk()).toBe(true);
  });
});
