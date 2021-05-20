class CarPoliceReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD_REVERSE;
    this.xIni = X_INICIAL_ROAD_REVERSE;

    this.carPoliceReverse = new Image();
    this.carPoliceReverse.src = "./assets/img/carGreenReverse.png";
    this.carPoliceReverse.isReady = false;
    this.carPoliceReverse.onload = () => {
      this.carPoliceReverse.isReady = true;
      this.width = this.carPoliceReverse.width;
      this.height = this.carPoliceReverse.height;
    };
  }

  isReady() {
    return this.carPoliceReverse.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.carPoliceReverse,
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
