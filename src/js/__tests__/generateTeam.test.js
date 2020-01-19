import { generateTeam } from '../generators';
import Swordman from '../characters/Swordsman';
import Bowman from '../characters/Bowman';

const heroes = [
  new Bowman(1),
  new Swordman(1),
];

describe('generateTeam', () => {
  test('should return array of heroes', () => {
    const team = generateTeam(['bowman', 'swordsman'], 1, 2);
    expect(team).toEqual(heroes);
  });
});
