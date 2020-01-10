import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import { getRandom } from './utils';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  for (const type of allowedTypes) {
    switch (type) {
      case 'swordsman':
        yield new Swordsman(maxLevel);
        break;
      case 'bowman':
        yield new Bowman(maxLevel);
        break;
      case 'magician':
        yield new Magician(maxLevel);
        break;
      case 'daemon':
        yield new Daemon(getRandom(1, maxLevel));
        break;
      case 'undead':
        yield new Undead(getRandom(1, maxLevel));
        break;
      case 'vampire':
        yield new Vampire(getRandom(1, maxLevel));
        break;
      default: throw new Error('Неизвестный тип персонажа!');
    }
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  const heroes = characterGenerator(allowedTypes, maxLevel);

  for (let i = 1; i <= characterCount; i += i) {
    team.push(heroes.next().value);
  }

  return team;
}
