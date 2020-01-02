import { calcTileType } from '../utils';

describe('calcTileType', () => {
  const boardSize = 8;

  test.each([
    [0, 'top-left'],
    [boardSize - 1, 'top-right'],
    [boardSize * (boardSize - 1), 'bottom-left'],
    [(boardSize ** 2) - 1, 'bottom-right'],
    [1, 'top'],
    [3, 'top'],
    [5, 'top'],
    [boardSize * 2, 'left'],
    [boardSize * 3, 'left'],
    [boardSize * 4, 'left'],
    [58, 'bottom'],
    [60, 'bottom'],
    [62, 'bottom'],
    [(boardSize * 2) - 1, 'right'],
    [(boardSize * 3) - 1, 'right'],
    [(boardSize * 4) - 1, 'right'],
    [14, 'center'],
    [42, 'center'],
    [51, 'center'],
  ])('for index %d should return "%s"', (index, expected) => {
    expect(calcTileType(index, boardSize)).toBe(expected);
  });
});
