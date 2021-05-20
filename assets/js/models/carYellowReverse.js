class CarYellowReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD_REVERSE;
    this.xIni = X_INICIAL_ROAD_REVERSE;

    this.carYellowReverse = new Image();
    this.carYellowReverse.src = "./assets/img/carYellowReverse.png";
    this.carYellowReverse.isReady = false;
    this.carYellowReverse.onload = () => {
      this.carYellowReverse.isReady = true;
      this.width = this.carYellowReverse.width;
      this.height = this.carYellowReverse.height;
    };
  }

  isReady() {
    return this.carYellowReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.carYellowReverse,
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
