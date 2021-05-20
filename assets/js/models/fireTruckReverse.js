class FireTruckReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD_REVERSE;
    this.xIni = X_INICIAL_ROAD_REVERSE;

    this.fireTruckReverse = new Image();
    this.fireTruckReverse.src = "./assets/img/fireTruckReverse.png";
    this.fireTruckReverse.isReady = false;
    this.fireTruckReverse.onload = () => {
      this.fireTruckReverse.isReady = true;
      this.width = this.fireTruckReverse.width;
      this.height = this.fireTruckReverse.height;
    };
  }

  isReady() {
    return this.fireTruckReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.fireTruckReverse,
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
