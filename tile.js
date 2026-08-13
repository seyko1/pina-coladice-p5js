class Tile {
  constructor(id, x, y, w, h, img) {
    this.id = id;
    
    this.sx = x;
    this.sy = y;
    this.sw = w;
    this.sh = h;
    this.img = img;
    
    this.dx = x;
    this.dy = y;
    this.dw = w;
    this.dh = h;
  }

  draw() {
    image(
        this.img,
        this.dx, this.dy, this.dw, this.dh,
        this.sx, this.sy, this.sw, this.sh
    );
  }
}