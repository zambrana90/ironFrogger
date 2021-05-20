class FireTruck {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD;
    this.xIni = X_INICIAL_ROAD;

    this.fireTruck = new Image();
    this.fireTruck.src = "./assets/img/fireTruck.png";
    this.fireTruck.isReady = false;
    this.fireTruck.onload = () => {
      this.fireTruck.isReady = true;
      this.width = this.fireTruck.width;
      this.height = this.fireTruck.height;
    };
  }

  isReady() {
    return this.fireTruck.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.fireTruck,
        this.x,
        this.y,
        this.width,
        this.height
      );
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
