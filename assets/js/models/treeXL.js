class Treexl {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER;
    this.xIni = X_INICIAL_WATER;

    this.treeXL = new Image();
    this.treeXL.src = "./assets/img/treeXL.png";
    this.treeXL.isReady = false;
    this.treeXL.onload = () => {
      this.treeXL.isReady = true;
      this.width = this.treeXL.width;
      this.height = this.treeXL.height;
    };
  }

  isReady() {
    return this.treeXL.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.treeXL, this.x, this.y, this.width, this.height);
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
