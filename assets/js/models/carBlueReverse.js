class CarBlueReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD_REVERSE;
    this.xIni = X_INICIAL_ROAD_REVERSE;

    this.carBlueReverse = new Image();
    this.carBlueReverse.src = "./assets/img/carBlueReverse.png";
    this.carBlueReverse.isReady = false;
    this.carBlueReverse.onload = () => {
      this.carBlueReverse.isReady = true;
      this.width = this.carBlueReverse.width;
      this.height = this.carBlueReverse.height;
    };
  }

  isReady() {
    return this.carBlueReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.carBlueReverse,
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
