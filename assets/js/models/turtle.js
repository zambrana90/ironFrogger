class Turtle {
  constructor(ctx, x, y, v) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.v = v;

    this.xFin = X_FINAL_WATER;
    this.xIni = X_INICIAL_WATER;

    this.turtleSprite = new Image();
    this.turtleSprite.src = "./assets/img/turtle.png";
    this.turtleSprite.isReady = false;
    this.turtleSprite.horizontalFrames = 7;
    this.turtleSprite.verticalFrames = 1;
    this.turtleSprite.horizontalFrameIndex = 0;
    this.turtleSprite.verticalFrameIndex = 0;
    this.turtleSprite.drawCount = 0;
    this.turtleSprite.onload = () => {
      this.turtleSprite.isReady = true;
      this.turtleSprite.frameWidth = Math.floor(
        this.turtleSprite.width / this.turtleSprite.horizontalFrames
      );
      this.turtleSprite.frameHeight = Math.floor(
        this.turtleSprite.height / this.turtleSprite.verticalFrames
      );
      this.width = this.turtleSprite.frameWidth;
      this.height = this.turtleSprite.frameHeight;
    };

    this.sounds = {
      //fire: new Audio('./assets/sound/fireball.wav')
    };
  }

  isReady() {
    return this.turtleSprite.isReady;
  }

  clear() {}

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.turtleSprite,
        this.turtleSprite.horizontalFrameIndex * this.turtleSprite.frameWidth,
        this.turtleSprite.verticalFrameIndex * this.turtleSprite.frameHeight,
        this.turtleSprite.frameWidth,
        this.turtleSprite.frameHeight,
        this.x,
        this.y,
        this.width * 0.9,
        this.height * 0.9
      );
      this.turtleSprite.drawCount++;
      this.animateTurtleSprite();
    }
  }

  move() {
    if (this.x >= this.xFin) {
      this.x = this.xIni;
    } else {
      this.x += this.v;
    }
  }

  animateTurtleSprite() {
    if (this.turtleSprite.verticalFrameIndex !== 0) {
      this.turtleSprite.verticalFrameIndex = 0;
      this.turtleSprite.horizontalFrameIndex = 0;
    } else if (this.turtleSprite.drawCount % MOVEMENT_TURTLE_FRAMES === 0) {
      if (
        this.turtleSprite.horizontalFrameIndex >=
        this.turtleSprite.horizontalFrames - 1
      ) {
        this.turtleSprite.horizontalFrameIndex = 0;
      } else {
        this.turtleSprite.horizontalFrameIndex++;
      }
      this.turtleSprite.drawCount = 0;
    }
  }
}
