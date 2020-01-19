import { generateTeam } from '../generators';
import Swordman from '../characters/Swordsman';
import Bowman from '../characters/Bowman';

describe('generateTeam', () => {
  test('should return array of heroes', () => {
    const team = generateTeam([Swordman, Bowman], 2, 3);
    expect(team.length).toBe(3);
  });
});
