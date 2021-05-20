class CarPolice {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD;
    this.xIni = X_INICIAL_ROAD;

    this.carPolice = new Image();
    this.carPolice.src = "./assets/img/carGreen.png";
    this.carPolice.isReady = false;
    this.carPolice.onload = () => {
      this.carPolice.isReady = true;
      this.width = this.carPolice.width;
      this.height = this.carPolice.height;
    };
  }

  isReady() {
    return this.carPolice.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.carPolice,
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
