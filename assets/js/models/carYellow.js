class CarYellow {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD;
    this.xIni = X_INICIAL_ROAD;

    this.carYellow = new Image();
    this.carYellow.src = "./assets/img/carYellow.png";
    this.carYellow.isReady = false;
    this.carYellow.onload = () => {
      this.carYellow.isReady = true;
      this.width = this.carYellow.width;
      this.height = this.carYellow.height;
    };
  }

  isReady() {
    return this.carYellow.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.carYellow,
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
