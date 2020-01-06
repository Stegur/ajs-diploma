import Character from '../Character';

export default class Vampire extends Character {
  constructor(level) {
    super();
    this.type = 'vampire';
    this.attack = 40;
    this.defence = 10;
    this.level = level;
  }
}
