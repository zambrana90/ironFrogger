class TreeMReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER_REVERSE;
    this.xIni = X_INICIAL_WATER_REVERSE;

    this.treeMReverse = new Image();
    this.treeMReverse.src = "./assets/img/treeM.png";
    this.treeMReverse.isReady = false;
    this.treeMReverse.onload = () => {
      this.treeMReverse.isReady = true;
      this.width = this.treeMReverse.width;
      this.height = this.treeMReverse.height;
    };
  }

  isReady() {
    return this.treeMReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.treeMReverse,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  move() {
    if (this.x <= this.xFin) {
      this.x = this.xIni;
    } else {
      this.x -= this.v;
    }
  }
}
