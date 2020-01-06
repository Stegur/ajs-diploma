import Character from '../Character';

export default class Magician extends Character {
  constructor(level) {
    super();
    this.type = 'magician';
    this.attack = 10;
    this.defence = 40;
    this.level = level;
  }
}
