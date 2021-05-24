class Death {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
  
      this.death = new Image();
      this.death.src = "./assets/img/death.png";
      this.death.isReady = false;
      this.death.onload = () => {
        this.death.isReady = true;
        this.width = this.death.width;
        this.height = this.death.height;
      };
    }
  
    isReady() {
      return this.death.isReady;
    }
  
    draw() {
      if (this.isReady()) {
        this.ctx.drawImage(
          this.death,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }
    }
  }