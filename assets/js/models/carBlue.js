class CarBlue {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD;
    this.xIni = X_INICIAL_ROAD;

    this.carBlue = new Image();
    this.carBlue.src = "./assets/img/carBlue.png";
    this.carBlue.isReady = false;
    this.carBlue.onload = () => {
      this.carBlue.isReady = true;
      this.width = this.carBlue.width;
      this.height = this.carBlue.height;
    };
  }

  isReady() {
    return this.carBlue.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.carBlue, this.x, this.y, this.width, this.height);
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
