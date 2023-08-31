const snakesAndLadders = require('./snakesAndLadders');

describe('snakesAndLadders', () => {
  it(' dice = [2,1,5,1,5,4] and board = [0,0,3,0,0,0,0,-2,0,0,0] should return 10', () => {
    expect(snakesAndLadders([0,0,3,0,0,0,0,-2,0,0,0], [2,1,5,1,5,4])).toBe(10);
  });

  it(' dice = [2,1,5] and board = [0,0,3,0,0,0,0,-2,0,0,0] should return 6', () => {
    expect(snakesAndLadders( [0,0,3,0,0,0,0,-2,0,0,0], [2,1,5])).toBe(6);
  });
});
