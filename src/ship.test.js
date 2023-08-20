import createShip from './ship';

describe('Ship', () => {
  it('Should initialize ship with the correct sunk status', () => {
    const ship = createShip(3);
    expect(ship.isSunk()).toBe(false);
  });

  it('Should initialize with correct name', () => {
    const ship = createShip(2);
    const ship2 = createShip(3);
    const ship3 = createShip(4);
    const ship4 = createShip(5);

    expect(ship.getName()).toBe('Patrol Boat');
    expect(ship2.getName()).toBe('Submarine');
    expect(ship3.getName()).toBe('Battleship');
    expect(ship4.getName()).toBe('Carrier');
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

  it('Updates direction accordingly', () => {
    const ship = createShip(2);
    expect(ship.getDirection()).toBe('x');

    ship.changeDirection();
    expect(ship.getDirection()).toBe('y');

    ship.changeDirection();
    expect(ship.getDirection()).toBe('x');
  });
});
