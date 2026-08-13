let backgroundImg, faceA;
let game;

const CONFIG = {
  FACEA_DIM: 5,
  GAME_DIM: 4,
  TILE_SIZE: 300,
  DISPLAY_TILE_SCALE: 0.5
}

async function setup() {
  backgroundImg = await loadImage('/assets/background.png');
  faceA         = await loadImage('/assets/faceA.jpg'); // 1500x1500 (5x5 tiles)
  
  game = new Game({
    faceA           : faceA,
    faceADim        : CONFIG.FACEA_DIM,
    gameDim         : CONFIG.GAME_DIM,
    tileW           : CONFIG.TILE_SIZE,
    tileH           : CONFIG.TILE_SIZE,
    displaytileScale: CONFIG.DISPLAY_TILE_SCALE
  })

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(backgroundImg, 0, 0, width, height, 0, 0, backgroundImg.width, backgroundImg.height, COVER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}