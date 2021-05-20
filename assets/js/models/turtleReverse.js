class TurtleReverse {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER_REVERSE;
    this.xIni = X_INICIAL_WATER_REVERSE;

    this.turtleSpriteReverse = new Image();
    this.turtleSpriteReverse.src = "./assets/img/turtleReverse.png";
    this.turtleSpriteReverse.isReady = false;
    this.turtleSpriteReverse.horizontalFrames = 7;
    this.turtleSpriteReverse.verticalFrames = 1;
    this.turtleSpriteReverse.horizontalFrameIndex = 6;
    this.turtleSpriteReverse.verticalFrameIndex = 0;
    this.turtleSpriteReverse.drawCount = 0;
    this.turtleSpriteReverse.onload = () => {
      this.turtleSpriteReverse.isReady = true;
      this.turtleSpriteReverse.frameWidth = Math.floor(
        this.turtleSpriteReverse.width /
          this.turtleSpriteReverse.horizontalFrames
      );
      this.turtleSpriteReverse.frameHeight = Math.floor(
        this.turtleSpriteReverse.height /
          this.turtleSpriteReverse.verticalFrames
      );
      this.width = this.turtleSpriteReverse.frameWidth;
      this.height = this.turtleSpriteReverse.frameHeight;
    };

    this.sounds = {
      //fire: new Audio('./assets/sound/fireball.wav')
    };
  }

  isReady() {
    return this.turtleSpriteReverse.isReady;
  }

  clear() {}

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.turtleSpriteReverse,
        this.turtleSpriteReverse.horizontalFrameIndex *
          this.turtleSpriteReverse.frameWidth,
        this.turtleSpriteReverse.verticalFrameIndex *
          this.turtleSpriteReverse.frameHeight,
        this.turtleSpriteReverse.frameWidth,
        this.turtleSpriteReverse.frameHeight,
        this.x,
        this.y,
        this.width * 0.8,
        this.height * 0.8
      );
      this.turtleSpriteReverse.drawCount++;
      this.animateturtleSprite();
    }
  }

  move() {
    if (this.x <= this.xFin) {
      this.x = this.xIni;
    } else {
      this.x -= this.v;
    }
  }

  animateturtleSprite() {
    if (this.turtleSpriteReverse.verticalFrameIndex !== 0) {
      this.turtleSpriteReverse.verticalFrameIndex = 0;
      this.turtleSpriteReverse.horizontalFrameIndex = 0;
    } else if (
      this.turtleSpriteReverse.drawCount % MOVEMENT_TURTLE_FRAMES ===
      0
    ) {
      if (this.turtleSpriteReverse.horizontalFrameIndex <= 0) {
        this.turtleSpriteReverse.horizontalFrameIndex = 6;
      } else {
        this.turtleSpriteReverse.horizontalFrameIndex--;
      }
      this.turtleSpriteReverse.drawCount = 0;
    }
  }
}
