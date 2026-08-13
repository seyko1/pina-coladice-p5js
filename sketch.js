let backgroundImg;

async function setup() {
  backgroundImg = await loadImage('/assets/background.png');
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(backgroundImg, 0, 0, width, height, 0, 0, backgroundImg.width, backgroundImg.height, COVER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}