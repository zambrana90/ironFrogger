class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 711;
    this.canvas.height = 800;

    this.fps = 1000 / 60;

    this.drawInterval = undefined;

    this.map = new Map(this.ctx);

    this.cars = [];
    this.obstacles = [];
    this.obstaclesW1 = [];
    this.obstaclesW2 = [];
    this.obstaclesW3 = [];
    this.obstaclesW4 = [];

    this.carYellow = new CarYellow(this.ctx, -250, 560, VEL_ROAD_R3);
    this.cars.push(this.carYellow);
    this.carYellowReverse = new CarYellowReverse(
      this.ctx,
      750,
      410,
      VEL_ROAD_R1
    );
    this.cars.push(this.carYellowReverse);

    this.carBlue1 = new CarBlue(this.ctx, -700, 645, VEL_ROAD_R4);
    this.cars.push(this.carBlue1);
    this.carBlue2 = new CarBlue(this.ctx, -800, 560, VEL_ROAD_R3);
    this.cars.push(this.carBlue2);

    this.truckReverse = new TruckReverse(this.ctx, 1200, 410, VEL_ROAD_R1);
    this.cars.push(this.truckReverse);

    this.police1 = new CarPoliceReverse(this.ctx, 800, 485, VEL_ROAD_R2);
    this.cars.push(this.police1);
    this.police2 = new CarPoliceReverse(this.ctx, 1250, 485, VEL_ROAD_R2);
    this.cars.push(this.police2);

    this.fireTruck = new FireTruck(this.ctx, -200, 645, VEL_ROAD_R4);
    this.cars.push(this.fireTruck);

    this.turtle1 = new Turtle(this.ctx, 15, 80, VEL_WATER_R1);
    this.obstacles.push(this.turtle1);
    this.obstaclesW1.push(this.turtle1);
    this.turtle2 = new Turtle(this.ctx, 80, 80, VEL_WATER_R1);
    this.obstacles.push(this.turtle2);
    this.obstaclesW1.push(this.turtle2);
    this.turtle3 = new Turtle(this.ctx, 145, 80, VEL_WATER_R1);
    this.obstacles.push(this.turtle3);
    this.obstaclesW1.push(this.turtle3);

    this.turtleReverse1 = new TurtleReverse(this.ctx, 800, 260, VEL_WATER_R4);
    this.obstacles.push(this.turtleReverse1);
    this.obstaclesW4.push(this.turtleReverse1);
    this.turtleReverse2 = new TurtleReverse(this.ctx, 865, 260, VEL_WATER_R4);
    this.obstacles.push(this.turtleReverse2);
    this.obstaclesW4.push(this.turtleReverse2);
    this.turtleReverse3 = new TurtleReverse(this.ctx, 930, 260, VEL_WATER_R4);
    this.obstacles.push(this.turtleReverse3);
    this.obstaclesW4.push(this.turtleReverse3);

    this.treeXL = new Treexl(this.ctx, -400, 200, VEL_WATER_R3);
    this.obstacles.push(this.treeXL);
    this.obstaclesW3.push(this.treeXL);
    this.treeL = new TreeLReverse(this.ctx, 1200, 140, VEL_WATER_R2);
    this.obstacles.push(this.treeL);
    this.obstaclesW2.push(this.treeL);
    this.treeL2 = new TreeLReverse(this.ctx, 1430, 260, VEL_WATER_R4);
    this.obstacles.push(this.treeL2);
    this.obstaclesW4.push(this.treeL2);
    this.treeM = new TreeMReverse(this.ctx, 720, 140, VEL_WATER_R2);
    this.obstacles.push(this.treeM);
    this.obstaclesW2.push(this.treeM);
    this.treeM2 = new Treem(this.ctx, -475, 80, VEL_WATER_R1);
    this.obstacles.push(this.treeM2);
    this.obstaclesW1.push(this.treeM2);

    this.frog = new Frog(
      this.ctx,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 90
    );
  }

  start() {
    if (!this.drawInterval) {
      this.drawInterval = setInterval(() => {
        this.clear();
        this.move();
        this.draw();

        this.checkCollisions();
      }, this.fps);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  move() {
    this.frog.move();
    this.turtle1.move();
    this.turtle2.move();
    this.turtle3.move();
    this.turtleReverse1.move();
    this.turtleReverse2.move();
    this.turtleReverse3.move();
    this.carYellow.move();
    this.carYellowReverse.move();
    this.carBlue1.move();
    this.carBlue2.move();
    this.truckReverse.move();
    this.police1.move();
    this.police2.move();
    this.fireTruck.move();
    this.treeXL.move();
    this.treeL.move();
    this.treeL2.move();
    this.treeM.move();
    this.treeM2.move();
  }

  draw() {
    this.map.draw();

    this.turtle1.draw();
    this.turtle2.draw();
    this.turtle3.draw();
    this.turtleReverse1.draw();
    this.turtleReverse2.draw();
    this.turtleReverse3.draw();
    this.treeXL.draw();
    this.treeL.draw();
    this.treeL2.draw();
    this.treeM.draw();
    this.treeM2.draw();

    this.frog.draw();

    this.carYellow.draw();
    this.carYellowReverse.draw();
    this.carBlue1.draw();
    this.carBlue2.draw();
    this.truckReverse.draw();
    this.police1.draw();
    this.police2.draw();
    this.fireTruck.draw();
  }

  onKeyEvent(event) {
    this.frog.onKeyEvent(event);
  }

  gameOver() {
    //this.frog.x = this.ctx.canvas.width / 2;
    //this.frog.y = this.ctx.canvas.height - 90;
    console.log("MUERTO")
    /*
      clearInterval(this.drawInterval)

      this.ctx.save()
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

      this.ctx.font = "28px Goblin One"
      this.ctx.fillStyle = "#fff"
      this.ctx.textAlign = "center"
      this.ctx.fillText(
        "Game Over",
        this.canvas.width / 2,
        this.canvas.height / 2,
      )
      this.ctx.restore()
    }
    */
  }

  checkCollisions() {
    if (this.cars.some((car) => this.frog.collidesWithCar(car))) {
      //this.gameOver();
    } else if (this.frog.vision.up && this.frog.y >= 54 && this.frog.y < 290) {
      if (
        this.obstacles.some((obstacle) => this.frog.collidesWithObst(obstacle))
      ) {
        if (this.frog.y >= 54 && this.frog.y <= 90) {
          if (
            this.obstaclesW1.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            //console.log("1ª");
            this.frog.x += VEL_WATER_R1;
          }
        } else if (this.frog.y >= 110 && this.frog.y <= 149) {
          if (
            this.obstaclesW2.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            //console.log("2ª");
            this.frog.x -= VEL_WATER_R2;
          }
        } else if (this.frog.y >= 174 && this.frog.y <= 211) {
          if (
            this.obstaclesW3.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            // console.log("3ª");
            this.frog.x += VEL_WATER_R3;
          }
        } else if (this.frog.y >= 235 && this.frog.y <= 282) {
          if (
            this.obstaclesW4.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            //console.log("4ª");
            this.frog.x -= VEL_WATER_R4;
          }
        }
      } else {
        this.gameOver();
      }
    } else if (
      this.frog.vision.down &&
      this.frog.y >= 49 &&
      this.frog.y < 280
    ) {
      if (
        this.obstacles.some((obstacle) => this.frog.collidesWithObst(obstacle))
      ) {
        if (this.frog.y >= 49.5 && this.frog.y <= 83.5) {
          if (
            this.obstaclesW1.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x += VEL_WATER_R1;
          }
        } else if (this.frog.y >= 105.5 && this.frog.y <= 146) {
          if (
            this.obstaclesW2.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R2;
          }
        } else if (this.frog.y >= 166.5 && this.frog.y <= 204) {
          if (
            this.obstaclesW3.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x += VEL_WATER_R3;
          }
        } else if (this.frog.y >= 224 && this.frog.y <= 256.5) {
          if (
            this.obstaclesW4.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R4;
          }
        }
      } else {
        this.gameOver();
      }
    } else if (
      (this.frog.vision.left || this.frog.vision.right) &&
      this.frog.y >= 54 &&
      this.frog.y < 280
    ) {
      if (
        this.obstacles.some((obstacle) => this.frog.collidesWithObst(obstacle))
      ) {
        if (this.frog.y >= 54 && this.frog.y <= 74.5) {
          if (
            this.obstaclesW1.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x += VEL_WATER_R1;
          }
        } else if (this.frog.y >= 109.5 && this.frog.y <= 145) {
          if (
            this.obstaclesW2.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R2;
          }
        } else if (this.frog.y >= 169.5 && this.frog.y <= 199) {
          if (
            this.obstaclesW3.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x += VEL_WATER_R3;
          }
        } else if (this.frog.y >= 229.5 && this.frog.y <= 266) {
          if (
            this.obstaclesW4.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R4;
          }
        }
      } else {
        this.gameOver();
      }
    }
  }
}
