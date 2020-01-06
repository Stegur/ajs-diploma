import Character from '../Character';

export default class Bowman extends Character {
  constructor(level) {
    super();
    this.type = 'bowman';
    this.attack = 25;
    this.defence = 25;
    this.level = level;
  }
}
