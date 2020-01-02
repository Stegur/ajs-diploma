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
  health: 50,
  level: 1,
};

const expectedDaemon = {
  type: 'daemon',
  attack: 10,
  defence: 40,
  health: 50,
  level: 2,
};

const expectedMagician = {
  type: 'magician',
  attack: 10,
  defence: 40,
  health: 50,
  level: 3,
};

const expectedSwordsman = {
  type: 'swordsman',
  attack: 40,
  defence: 10,
  health: 50,
  level: 1,
};

const expectedUndead = {
  type: 'undead',
  attack: 25,
  defence: 25,
  health: 50,
  level: 2,
};

const expectedVampire = {
  type: 'vampire',
  attack: 40,
  defence: 10,
  health: 50,
  level: 3,
};

describe('constructor', () => {
  test('shoud return new Bowman', () => {
    const hero = new Bowman('bowman', 1);
    expect(hero).toEqual(expectedBowman);
  });

  test('shoud return new Daemon', () => {
    const hero = new Daemon('daemon', 2);
    expect(hero).toEqual(expectedDaemon);
  });

  test('shoud return new Magician', () => {
    const hero = new Magician('magician', 3);
    expect(hero).toEqual(expectedMagician);
  });

  test('shoud return new Swordsman', () => {
    const hero = new Swordsman('swordsman', 1);
    expect(hero).toEqual(expectedSwordsman);
  });

  test('shoud return new Undead', () => {
    const hero = new Undead('undead', 2);
    expect(hero).toEqual(expectedUndead);
  });

  test('shoud return new Vampire', () => {
    const hero = new Vampire('vampire', 3);
    expect(hero).toEqual(expectedVampire);
  });

});
