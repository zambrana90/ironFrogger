class Treel {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER;
    this.xIni = X_INICIAL_WATER;

    this.treeL = new Image();
    this.treeL.src = "./assets/img/treeL.png";
    this.treeL.isReady = false;
    this.treeL.onload = () => {
      this.treeL.isReady = true;
      this.width = this.treeL.width;
      this.height = this.treeL.height;
    };
  }

  isReady() {
    return this.treeL.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.treeL, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    if (this.x >= this.xFin) {
      this.x = this.xIni;
    } else {
      this.x += this.v;
    }
  }
}
