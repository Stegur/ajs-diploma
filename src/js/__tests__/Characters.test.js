import Character from '../Character';
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Vampire from '../characters/Vampire';

const expectedBowman = {
  type: 'bowman',
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
};

const expectedDaemon = {
  type: 'daemon',
  attack: 10,
  defence: 40,
  health: 100,
  level: 2,
};

const expectedMagician = {
  type: 'magician',
  attack: 10,
  defence: 40,
  health: 100,
  level: 3,
};

const expectedSwordsman = {
  type: 'swordsman',
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
};

const expectedUndead = {
  type: 'undead',
  attack: 25,
  defence: 25,
  health: 100,
  level: 2,
};

const expectedVampire = {
  type: 'vampire',
  attack: 40,
  defence: 10,
  health: 100,
  level: 3,
};

describe('constructor', () => {
  test('should return new Bowman', () => {
    const hero = new Bowman(1);
    expect(hero).toEqual(expectedBowman);
  });

  test('should return new Daemon', () => {
    const hero = new Daemon(2);
    expect(hero).toEqual(expectedDaemon);
  });

  test('should return new Magician', () => {
    const hero = new Magician(3);
    expect(hero).toEqual(expectedMagician);
  });

  test('should return new Swordsman', () => {
    const hero = new Swordsman(1);
    expect(hero).toEqual(expectedSwordsman);
  });

  test('should return new Undead', () => {
    const hero = new Undead(2);
    expect(hero).toEqual(expectedUndead);
  });

  test('should return new Vampire', () => {
    const hero = new Vampire(3);
    expect(hero).toEqual(expectedVampire);
  });

  test('should throw an Error', () => {
    const result = () => {
      // eslint-disable-next-line no-unused-vars
      const hero = new Character(3);
    };
    expect(result).toThrow(new Error('Экземпляры класа Character не должны создаваться'));
  });
});

test('Hero should level Up', () => {
  const hero = new Vampire(3);
  hero.health = 19;
  hero.levelUp();
  expect(hero.level).toBe(4);
  expect(hero.health).toBe(99);
});
