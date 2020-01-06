import { generateTeam } from '../generators';
import Swordman from '../characters/Swordsman';
import Bowman from '../characters/Bowman';

const heroes = [
  new Bowman('bowman', 1),
  new Swordman('swordsman', 1),
];

describe('generateTeam', () => {
  test('should return array of heroes', () => {
    const team = generateTeam(['bowman', 'swordsman'], 1, 2);
    expect(team).toEqual(heroes);
  });
});
