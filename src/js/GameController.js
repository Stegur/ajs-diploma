/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import getField from './themes';
import { generateTeam } from './generators';
import { getRandom, arrayToPoint } from './utils';

import PositionedCharacter from './PositionedCharacter';

import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';

import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import Daemon from './characters/Daemon';


export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(getField());

    this.playerTeam = generateTeam([Bowman, Swordsman], 1, 2)
      .map((hero) => {
        const x = getRandom(0, 7);
        const y = getRandom(0, 1);
        const position = arrayToPoint([x, y]);
        return new PositionedCharacter(hero, position);
      });

    this.computerTeam = generateTeam([Undead, Vampire, Daemon], 1, 2)
      .map((hero) => {
        const x = getRandom(0, 7);
        const y = getRandom(6, 7);
        const position = arrayToPoint([x, y]);
        return new PositionedCharacter(hero, position);
      });

    this.gamePlay.redrawPositions([...this.playerTeam, ...this.computerTeam]);

    this.cellEnter();
    this.cellLeave();

    this.stateService.storage.step = 0;

    this.cellClick();
  }

  cellClick() {
    this.gamePlay.addCellClickListener((index) => {
      // Убераем выделение с ячеек если оно было до клика
      for (let i = 0; i < 64; i += 1) {
        this.gamePlay.deselectCell(i);
      }

      for (const hero of [...this.playerTeam, ...this.computerTeam]) {
        if (index === hero.position) {
          // Проверка персонажа на играбельность
          const isUndead = hero.character instanceof Undead;
          const isDeamon = hero.character instanceof Daemon;
          const isVampire = hero.character instanceof Vampire;

          if (isUndead || isDeamon || isVampire) {
            this.gamePlay.showError('Действие невозможно!');
          } else {
            this.gamePlay.selectCell(index);
          }
        }
      }
    });
  }

  onCellClick(index) {
    // TODO: react to click
  }

  cellEnter() {
    this.gamePlay.addCellEnterListener((index) => {
      for (const hero of [...this.playerTeam, ...this.computerTeam]) {
        if (index === hero.position) {
          const tooltip = `\uD83C\uDF96${hero.character.level}\u2694${hero.character.attack}\uD83D\uDEE1${hero.character.defence}\u2764${hero.character.health}`;
          this.gamePlay.showCellTooltip(tooltip, index);
        }
      }
    });
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  cellLeave() {
    this.gamePlay.addCellLeaveListener((index) => {
      this.gamePlay.hideCellTooltip(index);
    });
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
