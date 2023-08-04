import createShip from './ship';

describe('Ship', () => {
  it('Should initialize ship with the correct sunk status', () => {
    const ship = createShip(3);
    expect(ship.isSunk()).toBe(false);
  });

  it('Updates hits and sunk status accordingly', () => {
    const ship = createShip(2);
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.getHits()).toBe(1);
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.getHits()).toBe(2);
    expect(ship.isSunk()).toBe(true);
  });
});
