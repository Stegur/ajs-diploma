import Character from '../Character';

export default class Magician extends Character {
  constructor(type, level) {
    super();
    this.type = type;
    this.level = level;
    this.attack = 10;
    this.defence = 40;
  }
}
