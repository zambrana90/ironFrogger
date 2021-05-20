class TruckReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD_REVERSE;
    this.xIni = X_INICIAL_ROAD_REVERSE;

    this.truckReverse = new Image();
    this.truckReverse.src = "./assets/img/truckReverse.png";
    this.truckReverse.isReady = false;
    this.truckReverse.onload = () => {
      this.truckReverse.isReady = true;
      this.width = this.truckReverse.width;
      this.height = this.truckReverse.height;
    };
  }

  isReady() {
    return this.truckReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.truckReverse,
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
