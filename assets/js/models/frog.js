class Frog {
  constructor(ctx, x, y) {
    this.ctx = ctx;

    this.x = x;
    this.vx = x;
    this.maxX = x;

    this.y = y;
    this.vy = y;
    this.maxY = y;

    this.width = 0;
    this.height = 0;

    this.speed = FROG_SPEED;

    this.frogSpriteUp = new Image();
    this.frogSpriteUp.src = "./assets/img/frogUp.png";
    this.frogSpriteUp.isReady = false;
    this.frogSpriteUp.horizontalFrames = 7;
    this.frogSpriteUp.verticalFrames = 1;
    this.frogSpriteUp.horizontalFrameIndex = 0;
    this.frogSpriteUp.verticalFrameIndex = 0;
    this.frogSpriteUp.drawCount = 0;
    this.frogSpriteUp.onload = () => {
      this.frogSpriteUp.isReady = true;
      this.frogSpriteUp.frameWidth = Math.floor(
        this.frogSpriteUp.width / this.frogSpriteUp.horizontalFrames
      );
      this.frogSpriteUp.frameHeight = Math.floor(
        this.frogSpriteUp.height / this.frogSpriteUp.verticalFrames
      );
      this.width = this.frogSpriteUp.frameWidth;
      this.height = this.frogSpriteUp.frameHeight;
    };

    this.frogSpriteRight = new Image();
    this.frogSpriteRight.src = "./assets/img/frogRight.png";
    this.frogSpriteRight.isReady = false;
    this.frogSpriteRight.horizontalFrames = 1;
    this.frogSpriteRight.verticalFrames = 7;
    this.frogSpriteRight.horizontalFrameIndex = 0;
    this.frogSpriteRight.verticalFrameIndex = 0;
    this.frogSpriteRight.drawCount = 0;
    this.frogSpriteRight.onload = () => {
      this.frogSpriteRight.isReady = true;
      this.frogSpriteRight.frameWidth = Math.floor(
        this.frogSpriteRight.width / this.frogSpriteRight.horizontalFrames
      );
      this.frogSpriteRight.frameHeight = Math.floor(
        this.frogSpriteRight.height / this.frogSpriteRight.verticalFrames
      );
      this.width = this.frogSpriteRight.frameWidth;
      this.height = this.frogSpriteRight.frameHeight;
    };

    this.frogSpriteLeft = new Image();
    this.frogSpriteLeft.src = "./assets/img/frogLeft.png";
    this.frogSpriteLeft.isReady = false;
    this.frogSpriteLeft.horizontalFrames = 1;
    this.frogSpriteLeft.verticalFrames = 7;
    this.frogSpriteLeft.horizontalFrameIndex = 0;
    this.frogSpriteLeft.verticalFrameIndex = 0;
    this.frogSpriteLeft.drawCount = 0;
    this.frogSpriteLeft.onload = () => {
      this.frogSpriteLeft.isReady = true;
      this.frogSpriteLeft.frameWidth = Math.floor(
        this.frogSpriteLeft.width / this.frogSpriteLeft.horizontalFrames
      );
      this.frogSpriteLeft.frameHeight = Math.floor(
        this.frogSpriteLeft.height / this.frogSpriteLeft.verticalFrames
      );
      this.width = this.frogSpriteLeft.frameWidth;
      this.height = this.frogSpriteLeft.frameHeight;
    };

    this.frogSpriteDown = new Image();
    this.frogSpriteDown.src = "./assets/img/frogDown.png";
    this.frogSpriteDown.isReady = false;
    this.frogSpriteDown.horizontalFrames = 7;
    this.frogSpriteDown.verticalFrames = 1;
    this.frogSpriteDown.horizontalFrameIndex = 6;
    this.frogSpriteDown.verticalFrameIndex = 0;
    this.frogSpriteDown.drawCount = 0;
    this.frogSpriteDown.onload = () => {
      this.frogSpriteDown.isReady = true;
      this.frogSpriteDown.frameWidth = Math.floor(
        this.frogSpriteDown.width / this.frogSpriteDown.horizontalFrames
      );
      this.frogSpriteDown.frameHeight = Math.floor(
        this.frogSpriteDown.height / this.frogSpriteDown.verticalFrames
      );
      this.width = this.frogSpriteDown.frameWidth;
      this.height = this.frogSpriteDown.frameHeight;
    };

    this.movements = {
      up: false,
      right: false,
      left: false,
      down: false,
    };

    this.vision = {
      up: true,
      right: false,
      left: false,
      down: false,
    };

    this.sounds = {
      //fire: new Audio('./assets/sound/fireball.wav')
    };
  }

  isReady() {
    if (
      this.frogSpriteUp.isReady &&
      this.frogSpriteDown.isReady &&
      this.frogSpriteRight.isReady &&
      this.frogSpriteLeft.isReady
    ) {
      return true;
    } else {
      return false;
    }
  }

  clear() {}

  draw() {
    if (this.isReady()) {
      if (this.vision.up) {
        this.ctx.drawImage(
          this.frogSpriteUp,
          this.frogSpriteUp.horizontalFrameIndex * this.frogSpriteUp.frameWidth,
          this.frogSpriteUp.verticalFrameIndex * this.frogSpriteUp.frameHeight,
          this.frogSpriteUp.frameWidth,
          this.frogSpriteUp.frameHeight,
          this.x,
          this.y,
          this.width,
          this.height
        );
        this.frogSpriteUp.drawCount++;
        this.animate();
      }
      if (this.vision.down) {
        this.ctx.drawImage(
          this.frogSpriteDown,
          this.frogSpriteDown.horizontalFrameIndex *
            this.frogSpriteDown.frameWidth,
          this.frogSpriteDown.verticalFrameIndex *
            this.frogSpriteDown.frameHeight,
          this.frogSpriteDown.frameWidth,
          this.frogSpriteDown.frameHeight,
          this.x,
          this.y,
          this.width,
          this.height
        );
        this.frogSpriteDown.drawCount++;
        this.animate();
      }
      if (this.vision.left) {
        this.ctx.drawImage(
          this.frogSpriteLeft,
          this.frogSpriteLeft.horizontalFrameIndex *
            this.frogSpriteLeft.frameWidth,
          this.frogSpriteLeft.verticalFrameIndex *
            this.frogSpriteLeft.frameHeight,
          this.frogSpriteLeft.frameWidth,
          this.frogSpriteLeft.frameHeight,
          this.x,
          this.y + 15,
          this.height,
          this.width
        );
        this.frogSpriteLeft.drawCount++;
        this.animate();
      }
      if (this.vision.right) {
        this.ctx.drawImage(
          this.frogSpriteRight,
          this.frogSpriteRight.horizontalFrameIndex *
            this.frogSpriteRight.frameWidth,
          this.frogSpriteRight.verticalFrameIndex *
            this.frogSpriteRight.frameHeight,
          this.frogSpriteRight.frameWidth,
          this.frogSpriteRight.frameHeight,
          this.x - 20,
          this.y + 15,
          this.height,
          this.width
        );
        this.frogSpriteRight.drawCount++;
        this.animate();
      }
    }
  }

  onKeyEvent(event) {
    const status = event.type === "keydown";
    switch (event.keyCode) {
      case KEY_UP:
        this.movements.up = status;
        this.movements.right = false;
        this.movements.left = false;
        this.movements.down = false;
        break;
      case KEY_RIGHT:
        this.movements.up = false;
        this.movements.right = status;
        this.movements.left = false;
        this.movements.down = false;
        break;
      case KEY_LEFT:
        this.movements.up = false;
        this.movements.right = false;
        this.movements.left = status;
        this.movements.down = false;
        break;
      case KEY_DOWN:
        this.movements.up = false;
        this.movements.right = false;
        this.movements.left = false;
        this.movements.down = status;
        break;

      default:
        break;
    }
  }

  move() {
    if (this.movements.up) {
      if (
        this.x > 79 &&
        this.x < 158 &&
        this.x > 237 &&
        this.x < 316 &&
        this.x > 395 &&
        this.x < 474 &&
        this.x > 553 &&
        this.x < 632 &&
        this.y < 80
      ) {
        this.vy = 0;
        this.vision.up = true;
        this.vision.left = false;
        this.vision.down = false;
        this.vision.right = false;
      } else {
        this.vy = -this.speed;
        this.vision.up = true;
        this.vision.left = false;
        this.vision.down = false;
        this.vision.right = false;
      }
    } else if (this.movements.down) {
      if (
        this.x > 79 &&
        this.x < 158 &&
        this.x > 237 &&
        this.x < 316 &&
        this.x > 395 &&
        this.x < 474 &&
        this.x > 553 &&
        this.x < 632 &&
        this.y < 80
      ) {
        this.vy = 0;
        this.vision.up = false;
        this.vision.left = false;
        this.vision.down = true;
        this.vision.right = false;
      } else {
        this.vy = this.speed;
        this.vision.up = false;
        this.vision.left = false;
        this.vision.down = true;
        this.vision.right = false;
      }
    } else {
      this.vy = 0;
    }

    if (this.movements.left) {
      if (
        this.x > 79 &&
        this.x < 158 &&
        this.x > 237 &&
        this.x < 316 &&
        this.x > 395 &&
        this.x < 474 &&
        this.x > 553 &&
        this.x < 632 &&
        this.y < 80
      ) {
        this.vx = 0;
        this.vision.up = false;
        this.vision.left = true;
        this.vision.down = false;
        this.vision.right = false;
      } else {
        this.vx = -this.speed;
        this.vision.up = false;
        this.vision.left = true;
        this.vision.down = false;
        this.vision.right = false;
      }
    } else if (this.movements.right) {
      if (
        (this.x > 79 && this.y < 80) ||
        (this.x > 158 &&
          this.x < 237 &&
          this.x < 316 &&
          this.x > 395 &&
          this.x < 474 &&
          this.x > 553 &&
          this.x < 632 &&
          this.y < 80)
      ) {
        this.vx = 0;
        this.vision.up = false;
        this.vision.left = false;
        this.vision.down = false;
        this.vision.right = true;
      } else {
        this.vx = this.speed;
        this.vision.up = false;
        this.vision.left = false;
        this.vision.down = false;
        this.vision.right = true;
      }
    } else {
      this.vx = 0;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.width >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width;
    } else if (this.x <= 0) {
      this.x = 0;
    }

    if (this.y + this.height >= this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.height;
    } else if (this.y <= 0) {
      this.y = 0;
    }
  }

  animate() {
    if (
      this.movements.right ||
      this.movements.left ||
      this.movements.up ||
      this.movements.down
    ) {
      this.animatefrogSprite();
    } else {
      this.resetAnimation();
    }
  }

  resetAnimation() {
    if (this.vision.up) {
      this.frogSpriteUp.horizontalFrameIndex = 0;
      this.frogSpriteUp.verticalFrameIndex = 0;
    } else if (this.vision.down) {
      this.frogSpriteDown.horizontalFrameIndex = 6;
      this.frogSpriteDown.verticalFrameIndex = 0;
    } else if (this.vision.left) {
      this.frogSpriteLeft.horizontalFrameIndex = 0;
      this.frogSpriteLeft.verticalFrameIndex = 6;
    } else if (this.vision.right) {
      this.frogSpriteRight.horizontalFrameIndex = 0;
      this.frogSpriteRight.verticalFrameIndex = 0;
    }
  }

  animatefrogSprite() {
    if (this.vision.up) {
      if (this.frogSpriteUp.verticalFrameIndex !== 0) {
        this.frogSpriteUp.verticalFrameIndex = 0;
        this.frogSpriteUp.horizontalFrameIndex = 0;
      } else if (this.frogSpriteUp.drawCount % MOVEMENT_FRAMES === 0) {
        if (
          this.frogSpriteUp.horizontalFrameIndex >=
          this.frogSpriteUp.horizontalFrames - 1
        ) {
          this.frogSpriteUp.horizontalFrameIndex = 0;
        } else {
          this.frogSpriteUp.horizontalFrameIndex++;
        }
        this.frogSpriteUp.drawCount = 0;
      }
    } else if (this.vision.down) {
      if (this.frogSpriteDown.verticalFrameIndex !== 0) {
        this.frogSpriteDown.verticalFrameIndex = 0;
        this.frogSpriteDown.horizontalFrameIndex = 6;
      } else if (this.frogSpriteDown.drawCount % MOVEMENT_FRAMES === 0) {
        if (this.frogSpriteDown.horizontalFrameIndex <= 0) {
          this.frogSpriteDown.horizontalFrameIndex = 6;
        } else {
          this.frogSpriteDown.horizontalFrameIndex--;
        }
        this.frogSpriteDown.drawCount = 0;
      }
    } else if (this.vision.left) {
      if (this.frogSpriteLeft.horizontalFrameIndex !== 0) {
        this.frogSpriteLeft.verticalFrameIndex = 0;
        this.frogSpriteLeft.horizontalFrameIndex = 0;
      } else if (this.frogSpriteLeft.drawCount % MOVEMENT_FRAMES === 0) {
        if (
          this.frogSpriteLeft.verticalFrameIndex >=
          this.frogSpriteLeft.verticalFrames - 1
        ) {
          this.frogSpriteLeft.verticalFrameIndex = 0;
        } else {
          this.frogSpriteLeft.verticalFrameIndex++;
        }
        this.frogSpriteLeft.drawCount = 0;
      }
    } else if (this.vision.right) {
      if (this.frogSpriteRight.horizontalFrameIndex !== 0) {
        this.frogSpriteRight.verticalFrameIndex = 0;
        this.frogSpriteRight.horizontalFrameIndex = 0;
      } else if (this.frogSpriteRight.drawCount % MOVEMENT_FRAMES === 0) {
        if (this.frogSpriteRight.verticalFrameIndex <= 0) {
          this.frogSpriteRight.verticalFrameIndex = 6;
        } else {
          this.frogSpriteRight.verticalFrameIndex--;
        }
        this.frogSpriteRight.drawCount = 0;
      }
    }
  }

  collidesWithCar(element) {
    if (element.isReady()) {
      return (
        this.x + 20 < element.x + element.width &&
        this.x + this.width > element.x &&
        this.y + 20 < element.y + element.height &&
        this.y - 20 + this.height > element.y
      );
    }
  }

  collidesWithObst(obstacle) {
    if (obstacle.isReady()) {
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      );
    }
  }
}
