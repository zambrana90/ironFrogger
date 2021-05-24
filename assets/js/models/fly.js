class Fly {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.fly = new Image();
    this.fly.src = "./assets/img/fly.png";
    this.fly.isReady = false;
    this.fly.onload = () => {
      this.fly.isReady = true;
      this.width = this.fly.width;
      this.height = this.fly.height;
    };
  }

  isReady() {
    return this.fly.isReady;
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.fly,
        this.x,
        this.y,
        this.width * 0.5,
        this.height * 0.5
      );
    }
  }
}
