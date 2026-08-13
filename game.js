class Game {
  constructor(config) {
    this.faceA           = config.faceA;
    this.faceADim        = config.faceADim;
    this.gameDim         = config.gameDim;
    
    this.tileW            = config.tileW;
    this.tileH            = config.tileH;
    this.displaytileScale = config.displaytileScale;
  
    this.tileset = [];
    this.init();
  }

  init() {
    const allTiles = [];
    let tileId = 0;

    /* découpage de l'image source */
    for (let x = 0; x < this.faceADim; x++) {
      for (let y = 0; y < this.faceADim; y++) {
        const tile = new Tile(
          tileId++,
          x * this.tileW,
          y * this.tileH,
          this.tileW,
          this.tileH,
          faceA
        );
        allTiles.push(tile);
      }
    }

    const selected = shuffle(allTiles).slice(0, this.gameDim ** 2);

    const dw = this.tileW * this.displaytileScale;
    const dh = this.tileH * this.displaytileScale;    
    let index = 0;

    for (let x = 0; x < this.gameDim; x++) {
      for (let y = 0; y < this.gameDim; y++) {
        const tile = selected[index++];
        tile.dx = x * dw; 
        tile.dy = y * dh;
        tile.dw = dw;
        tile.dh = dh;
      }
    }

    this.tileset = selected;
  }
}