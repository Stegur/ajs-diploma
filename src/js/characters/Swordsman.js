import Character from '../Character';

export default class Swordsman extends Character {
  constructor(type, level) {
    super();
    this.type = type;
    this.level = level;
    this.attack = 40;
    this.defence = 10;
  }
}
