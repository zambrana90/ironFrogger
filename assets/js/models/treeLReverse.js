class TreeLReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER_REVERSE;
    this.xIni = X_INICIAL_WATER_REVERSE;

    this.treeLReverse = new Image();
    this.treeLReverse.src = "./assets/img/treeL.png";
    this.treeLReverse.isReady = false;
    this.treeLReverse.onload = () => {
      this.treeLReverse.isReady = true;
      this.width = this.treeLReverse.width;
      this.height = this.treeLReverse.height;
    };
  }

  isReady() {
    return this.treeLReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.treeLReverse,
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
