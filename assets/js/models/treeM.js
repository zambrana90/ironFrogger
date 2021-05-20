class Treem {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER;
    this.xIni = X_INICIAL_WATER;

    this.treeM = new Image();
    this.treeM.src = "./assets/img/treeM.png";
    this.treeM.isReady = false;
    this.treeM.onload = () => {
      this.treeM.isReady = true;
      this.width = this.treeM.width;
      this.height = this.treeM.height;
    };
  }

  isReady() {
    return this.treeM.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.treeM, this.x, this.y, this.width, this.height);
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
