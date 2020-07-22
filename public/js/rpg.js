/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const container = document.getElementById('mapDiv');

const level = 0;

document.getElementById('level').innerText = level+1;

const map = [[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
],
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
],
];

const hero = {
  x: 1,
  y: 1,
  isAlive: true,
};

// const potion = [
//   {
//     y: 13,
//     x: 3,
//   },
// ];

// const weapon = [
//   {
//     y: 13,
//     x: 5,
//   },
// ];

const enemyCoords = [
  {
    y: 13,
    x: 12,
  },

  {
    y: 7,
    x: 7,
  },
];

let isTimerPaused = false;

function render() {
  container.innerHTML = '';
  for (let i = 0; i < map[level].length; i++) {
    for (let j = 0; j < map[level][i].length; j++) {
      let field = null;

      if (map[level][i][j] == 0) {
        field = document.createElement('div');
        field.setAttribute('id', 'green');
      } else if (map[level][i][j] == 1) {
        field = document.createElement('div');
        field.setAttribute('id', 'black');
      } else if (map[level][i][j] == 3) {
        field = document.createElement('div');
        field.setAttribute('id', 'enemy');
      } else {
        field = document.createElement('div');
        field.setAttribute('id', 'hero');
      }
      container.append(field);
    }
  }
}

document.addEventListener('keydown', (event) => {
  map[level][hero.y][hero.x] = 0;
  if (!isTimerPaused && hero.isAlive) {
    if (event.keyCode === 37 || event.keyCode === 65) { // left
      if (map[level][hero.y][hero.x - 1] === 3) {
      } else if (map[level][hero.y][hero.x - 1] !== 1) {
        hero.x--;
      }
    } else if (event.keyCode === 38 || event.keyCode === 87) { // up
      if (map[level][hero.y - 1][hero.x] === 3) {
      } else if (map[level][hero.y - 1][hero.x] !== 1) {
        hero.y--;
      }
    } else if (event.keyCode === 39 || event.keyCode === 68) { // right
      if (map[level][hero.y][hero.x + 1] === 3) {
      } else if (map[level][hero.y][hero.x + 1] !== 1) {
        hero.x++;
      }
    } else if (event.keyCode === 40 || event.keyCode === 83) { // down
      if (map[level][hero.y + 1][hero.x] === 3) {
      } else if (map[level][hero.y + 1][hero.x] !== 1) {
        hero.y++;
      }
    }

    map[level][hero.y][hero.x] = 2;

    render();
    checkBattle();
  }
});
function moveEnemy() {
  enemyCoords.forEach((coord, i) => {
    map[level][coord.y][coord.x] = 0;
    const randomMove = Math.floor(Math.random() * 4);
    if (randomMove === 0 && map[level][coord.y][coord.x - 1] !== 1) { // left
      enemyCoords[i].x--;
    } else if (randomMove === 1 && map[level][coord.y - 1][coord.x] !== 1) { // up
      enemyCoords[i].y--;
    } else if (randomMove === 2 && map[level][coord.y][coord.x + 1] !== 1) { // right
      enemyCoords[i].x++;
    } else if (randomMove === 3 && map[level][coord.y + 1][coord.x] !== 1) { // down
      enemyCoords[i].y++;
    }
    map[level][coord.y][coord.x] = 3;
  });
  render();
  checkBattle();
}


setInterval(() => {
  if (!isTimerPaused) {
    moveEnemy();
  }
}, 500);


function checkBattle() {
  let isBattle = false;
  isTimerPaused = true;
  enemyCoords.forEach((coord, i) => {
    if (coord.x - 1 <= hero.x && coord.x + 1 >= hero.x &&
         coord.y - 1 <= hero.y && coord.y + 1 >= hero.y ) {
      isBattle = true;
    }
  });

  if (isBattle && hero.isAlive) {
    hideShow();
  } else {
    isTimerPaused = false;
  }
}
