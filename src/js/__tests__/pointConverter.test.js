import { pointToArray, arrayToPoint } from '../utils';

describe('pointToArray', () => {
  test.each([
    [0, [0, 0]],
    [7, [0, 7]],
    [8, [1, 0]],
    [15, [1, 7]],
    [59, [7, 3]],
    [63, [7, 7]],
  ])('with point %i should return array %o', (point, expected) => {
    expect(pointToArray(point)).toEqual(expected);
  });

  test('should throw an Error', () => {
    const res = () => {
      pointToArray(64);
    };
    expect(res).toThrow(new Error('Координата не может быть больше 63!'));
  });
});

describe('arrayToPoint', () => {
  test.each([
    [[0, 0], 0],
    [[0, 7], 7],
    [[1, 0], 8],
    [[1, 7], 15],
    [[7, 3], 59],
    [[7, 7], 63],
  ])('with array %o should return point %i', (point, expected) => {
    expect(arrayToPoint(point)).toEqual(expected);
  });

  test('should throw an Error', () => {
    const res = () => {
      arrayToPoint([8, 1]);
    };
    expect(res).toThrow(new Error('Координата не может быть больше 7!'));
  });
});
