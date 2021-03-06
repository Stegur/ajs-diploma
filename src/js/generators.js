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
  const idx = getRandom(0, allowedTypes.length - 1);
  yield new allowedTypes[idx](maxLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];

  for (let i = 0; i < characterCount; i += 1) {
    team.push(...characterGenerator(allowedTypes, maxLevel));
  }

  return team;
}
