export function calcTileType(index, boardSize) {
  if (index === 0) {
    return 'top-left';
  }

  if (index === boardSize - 1) {
    return 'top-right';
  }

  if (index > 0 && index < boardSize) {
    return 'top';
  }

  if (index === boardSize * (boardSize - 1)) {
    return 'bottom-left';
  }

  if (index === boardSize * boardSize - 1) {
    return 'bottom-right';
  }

  if (index > (boardSize * (boardSize - 1)) && index < boardSize * boardSize - 1) {
    return 'bottom';
  }

  if (index % boardSize === 0) {
    return 'left';
  }

  if (index % boardSize === boardSize - 1) {
    return 'right';
  }

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function pointToArray(point) {
  if (point > 63) {
    throw new Error('Координата не может быть больше 63!');
  }

  let x;

  if (point === 0) {
    x = 0;
  } else {
    x = Math.floor(point / 8);
  }

  const y = point % 8;

  return [x, y];
}

export function arrayToPoint([x, y]) {
  if (x > 7 || y > 7) {
    throw new Error('Координата не может быть больше 7!');
  }

  return x * 8 + y;
}
