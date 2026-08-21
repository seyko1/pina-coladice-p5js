class Game {
  constructor(config) {
    this.faceA          = config.faceA;
    this.faceADim       = config.faceADim;
    this.faceATileSize  = config.faceATileSize;

    this.gridDim        = config.gridDim;
    this.gridMaxSize    = config.gridMaxSize;
    this.gridSize       = config.gridMaxSize;

    this.gridPosition = createVector(config.gridX, config.gridY);

    this.tileOffsetRatio = 0.05;
  
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
          x * this.faceATileSize,
          y * this.faceATileSize,
          this.faceATileSize,
          this.faceATileSize,
          this.faceA
        );
        allTiles.push(tile);
      }
    }

    const selected = shuffle(allTiles).slice(0, this.gridDim ** 2);
    this.tileset = selected;
  }

  draw() {
    for (const tile of this.tileset) {
      tile.draw();
    }
  }

  onResize() {
    this.computeGridCoordinates();
    this.computeTilesCoordinates();
  }

  computeGridCoordinates() {
    // Calculer position et dimensions de la grille en fonction de width et height
    const maxWidth = width * 0.8;
    this.gridSize = Math.min(maxWidth, this.gridMaxSize)
    this.gridPosition.x = width / 2 - this.gridSize / 2;
  }

  computeTilesCoordinates() {
    // Calculer position et dimensions des cartes en fonction des position et dimensions de la grille
    const totalOffsetRatio = this.tileOffsetRatio * (this.gridDim - 1);
    const tileSize = this.gridSize / (this.gridDim + totalOffsetRatio);
    const offset = tileSize * this.tileOffsetRatio;

    let index = 0;
    for (let x = 0; x < this.gridDim; x++) {
      for (let y = 0; y < this.gridDim; y++) {
        const tile    = this.tileset[index++];
        const offsetX = x > 0 ? offset : 0;
        const offsetY = y > 0 ? offset : 0;
        
        tile.dx = this.gridPosition.x + x * (tileSize + offsetX);
        tile.dy = this.gridPosition.y + y * (tileSize + offsetY);
        tile.dw = tileSize;
        tile.dh = tileSize;
      }
    }
  }
}