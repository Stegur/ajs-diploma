import GameStateService from './GameStateService';

const getField = () => {
  const stateService = new GameStateService(localStorage);
  const level = stateService.load() === null ? 1 : stateService.load().level;

  const themes = {
    prairie: 'prairie',
    desert: 'desert',
    arctic: 'arctic',
    mountain: 'mountain',
  };

  switch (level) {
    case 1:
      return themes.prairie;
    case 2:
      return themes.desert;
    case 3:
      return themes.arctic;
    case 4:
      return themes.mountain;
    default:
      throw new Error('Some problem with levels in themes.js');
  }
};

export default getField;
