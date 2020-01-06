import Character from '../Character';

export default class Daemon extends Character {
  constructor(level) {
    super();
    this.type = 'daemon';
    this.attack = 10;
    this.defence = 40;
    this.level = level;
  }
}
