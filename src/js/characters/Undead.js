import Character from '../Character';

export default class Undead extends Character {
  constructor(type, level) {
    super();
    this.type = type;
    this.level = level;
    this.attack = 25;
    this.defence = 25;
  }
}
