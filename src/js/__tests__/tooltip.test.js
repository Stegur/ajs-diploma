import Swordsman from '../characters/Swordsman';
import PositionedCharacter from '../PositionedCharacter';

test('Tooltip should be equal', () => {
  const hero = new PositionedCharacter(new Swordsman(1), 13);
  const tooltip = `\uD83C\uDF96${hero.character.level}\u2694${hero.character.attack}\uD83D\uDEE1${hero.character.defence}\u2764${hero.character.health}`;

  const expected = '\uD83C\uDF961\u269440\uD83D\uDEE110\u2764100';
  expect(tooltip).toBe(expected);
});
