let backgroundImg, faceA;
let game;

const CONFIG = {
  FACEA_DIM: 5,
  FACEA_TILE_SIZE: 300,
  GRID_DIM: 4,
  GRID_X: 100,
  GRID_Y: 100,
  GRID_MAX_SIZE: 600
}

async function setup() {
  backgroundImg = await loadImage('/assets/background.png');
  faceA         = await loadImage('/assets/faceA.jpg'); // 1500x1500 (5x5 tiles)

  game = new Game({
    faceA        : faceA,
    faceADim     : CONFIG.FACEA_DIM,
    gridDim      : CONFIG.GRID_DIM,
    faceATileSize: CONFIG.FACEA_TILE_SIZE,
    gridX        : CONFIG.GRID_X,
    gridY        : CONFIG.GRID_Y,
    gridMaxSize  : CONFIG.GRID_MAX_SIZE,
  })

  createCanvas(windowWidth, windowHeight);
  game.onResize();
}

function draw() {
  image(backgroundImg, 0, 0, width, height, 0, 0, backgroundImg.width, backgroundImg.height, COVER);
  game.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  game.onResize();
}