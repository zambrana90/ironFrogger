class Truck {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_ROAD;
    this.xIni = X_INICIAL_ROAD;

    this.truck = new Image();
    this.truck.src = "./assets/img/truck.png";
    this.truck.isReady = false;
    this.truck.onload = () => {
      this.truck.isReady = true;
      this.width = this.truck.width;
      this.height = this.truck.height;
    };
  }

  isReady() {
    return this.truck.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(this.truck, this.x, this.y, this.width, this.height);
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
