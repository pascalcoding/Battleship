const createShip = (length) => {
  let sunk = false;
  let hits = 0;

  const hit = () => {
    hits += 1;
    sunk = hits === length;
  };

  const getLength = () => length;

  const isSunk = () => sunk;

  const getHits = () => hits;

  return {
    isSunk,
    getHits,
    hit,
    getLength,
  };
};

export default createShip;
