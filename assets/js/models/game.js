class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 711;
    this.canvas.height = 800;

    this.fps = 1000 / 60;

    this.timeCount = 0;

    this.scoreCount = 0;

    this.livesCount = 3;

    this.drawInterval = undefined;

    this.map = new Map(this.ctx);

    const theme = new Audio("./assets/sound/fr-theme.mp3");
    theme.volume = 0.2;

    this.sounds = {
      theme,
      water: new Audio("./assets/sound/fr-water.mp3"),
      road: new Audio("./assets/sound/fr-road.wav"),
      time: new Audio("./assets/sound/fr-time.wav"),
      fly: new Audio("./assets/sound/fr-fly.mp3"),
      gameOver: new Audio("./assets/sound/fr-gameOver.mp3"),
      winner: new Audio("./assets/sound/fr-winner.mp3"),
    };

    this.cars = [];

    this.obstacles = [];
    this.obstaclesW1 = [];
    this.obstaclesW2 = [];
    this.obstaclesW3 = [];
    this.obstaclesW4 = [];

    this.flys = [];

    this.deaths = [];

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

    this.frog = new Frog(this.ctx, 335, 700);
  }

  start() {
    if (!this.drawInterval) {
      this.drawInterval = setInterval(() => {
        if (!this.sounds.theme.play()) {
          this.sounds.theme.play();
        }
        this.clear();
        this.move();
        this.draw();

        this.checkCollisions();

        this.timeCount++;
        this.time();

        this.lives();

        this.score();
        if (this.scoreCount >= 0) {
          let scoreUni = document.querySelector("#uni");
          scoreUni.innerHTML = Math.floor(this.scoreCount / 20);
        }
        if (this.timeCount % 720 == 0) {
          this.addFly();
        }

        this.checkCollisionsFlys();

        this.finish();
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

    this.deaths.forEach((death) => death.draw());

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

    this.flys.forEach((fly) => fly.draw());
  }

  onKeyEvent(event) {
    this.frog.onKeyEvent(event);
  }

  gameOver() {
    clearInterval(this.drawInterval);
    this.sounds.theme.pause();
    this.sounds.gameOver.play();

    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.font = "50px 'Press Start 2P', cursive";
    this.ctx.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 + 50
    );
    this.ctx.restore();

    let playAgain = document.getElementById("play-again");
    playAgain.classList.replace("inactive", "active");
  }

  checkCollisions() {
    if (this.cars.some((car) => this.frog.collidesWith(car))) {
      this.livesCount--;
      this.sounds.road.play();
      this.addDeath();
      this.restart();
    } else if (this.frog.vision.up && this.frog.y >= 53 && this.frog.y <= 285) {
      if (
        this.obstacles.some((obstacle) => this.frog.collidesWithObst(obstacle))
      ) {
        if (this.frog.y >= 53 && this.frog.y <= 90) {
          if (
            this.obstaclesW1.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x += VEL_WATER_R1;
          }
        } else if (this.frog.y >= 110 && this.frog.y <= 149) {
          if (
            this.obstaclesW2.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R2;
          }
        } else if (this.frog.y >= 174 && this.frog.y <= 211) {
          if (
            this.obstaclesW3.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x += VEL_WATER_R3;
          }
        } else if (this.frog.y >= 235 && this.frog.y <= 285) {
          if (
            this.obstaclesW4.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R4;
          }
        }
      } else {
        this.livesCount--;
        this.sounds.water.play();
        this.addDeath();
        this.restart();
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
        } else if (this.frog.y >= 224 && this.frog.y <= 279) {
          if (
            this.obstaclesW4.some((obstacle) =>
              this.frog.collidesWithObst(obstacle)
            )
          ) {
            this.frog.x -= VEL_WATER_R4;
          }
        }
      } else {
        this.livesCount--;
        this.sounds.water.play();
        this.addDeath();
        this.restart();
      }
    } else if (
      (this.frog.vision.left || this.frog.vision.right) &&
      this.frog.y >= 54 &&
      this.frog.y < 280
    ) {
      if (
        this.obstacles.some((obstacle) => this.frog.collidesWithObst(obstacle))
      ) {
        if (this.frog.y >= 54 && this.frog.y <= 83.5) {
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
        this.livesCount--;
        this.sounds.water.play();
        this.addDeath();
        this.restart();
      }
    }
  }

  time() {
    if (this.timeCount % 180 == 0) {
      let time = document.querySelectorAll(".score-time.active");
      const timeArr = [...time];
      let lastIndex = timeArr.length - 1;
      if (timeArr.length > 0) {
        timeArr[lastIndex].classList.replace("active", "inactive");
      } else {
        this.livesCount--;
        this.addDeath();
        this.restart();
      }
    }
    if (this.timeCount >= 2430) {
      if (!this.sounds.time.play()) {
        this.sounds.time.play();
      }
    }
  }

  score() {
    if (this.frog.vision.up) {
      if (this.frog.y <= 697 && this.frog.y >= 356) {
        return (this.scoreCount += 3);
      } else if (this.frog.y <= 264.5 && this.frog.y >= 53.5) {
        return (this.scoreCount += 2);
      }
    } else if (this.frog.vision.down) {
      if (this.frog.y <= 685.5 && this.frog.y >= 370.5) {
        return (this.scoreCount += 3);
      } else if (this.frog.y <= 255 && this.frog.y >= 19.5) {
        return (this.scoreCount += 2);
      }
    } else if (this.frog.vision.left || this.frog.vision.right) {
      if (this.frog.y <= 690 && this.frog.y >= 379.5) {
        return (this.scoreCount += 3);
      } else if (this.frog.y <= 252 && this.frog.y >= 54) {
        return (this.scoreCount += 2);
      }
    }
  }

  lives() {
    if (this.livesCount == 3) {
    } else if (this.livesCount == 2) {
      let live = document.querySelectorAll(".score-heart");
      const liveArr = [...live];
      liveArr[2].classList.add("inactive");
      liveArr[2].classList.remove();
    } else if (this.livesCount == 1) {
      let live = document.querySelectorAll(".score-heart");
      const liveArr = [...live];
      liveArr[1].classList.add("inactive");
      liveArr[1].classList.remove();
    } else if (this.livesCount == 0) {
      let live = document.querySelectorAll(".score-heart");
      const liveArr = [...live];
      liveArr[0].classList.add("inactive");
      liveArr[0].classList.remove();
      this.gameOver();
    }
  }

  addFly() {
    let posX = Math.floor(Math.random() * (this.ctx.canvas.width - 50));

    let posY = Math.floor(Math.random() * (this.ctx.canvas.height - 50));
    if (posY >= 370) {
      posY = 370;
    } else if (posY <= 65) {
      posY = 65;
    }

    this.flys.push(new Fly(this.ctx, posX, posY));
  }

  checkCollisionsFlys() {
    const restFlys = this.flys.filter((fly) => !this.frog.collidesWith(fly));

    const newPoints = this.flys.length - restFlys.length;
    this.flys = restFlys;
    if (newPoints) {
      this.sounds.fly.currentTime = 0;
      this.sounds.fly.play();
    }

    this.scoreCount += newPoints * 1500;
  }

  restart() {
    this.frog.x = 335;
    this.frog.y = 700;
    let interval = null;
    interval = setInterval(() => {
      this.frog.x = 335;
      this.frog.y = 700;
      this.frog.movements.up = false;
      this.frog.movements.right = false;
      this.frog.movements.left = false;
      this.frog.movements.down = false;
    }, this.fps);

    this.flys.splice(0, this.flys.length);

    setTimeout(function () {
      clearInterval(interval);
    }, 2000);

    if (this.livesCount > 0) {
      this.timeCount = 0;
      this.scoreCount = 0;
      let time = document.querySelectorAll(".score-time.inactive");
      let timeArr = [...time];
      timeArr.forEach((el) => el.classList.replace("inactive", "active"));
    }
  }

  finish() {
    if (
      (this.frog.vision.up && this.frog.y <= 13) ||
      (this.frog.vision.down && this.frog.y <= 6) ||
      ((this.frog.vision.left || this.frog.vision.right) && this.frog.y <= 10.5)
    ) {
      clearInterval(this.drawInterval);
      this.sounds.winner.play();
      this.sounds.theme.pause();

      this.ctx.save();
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      this.ctx.font = "50px 'Press Start 2P', cursive";
      this.ctx.fillStyle = "red";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        "Winner",
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2 - 90
      );
      this.ctx.restore();

      this.ctx.save();
      this.ctx.font = "40px 'Press Start 2P', cursive";
      this.ctx.fillStyle = "#fff";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        `Your final score`,
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2 - 25
      );

      let scoreUni = document.querySelector("#uni");
      scoreUni.innerHTML =
        Math.floor(this.scoreCount / 20) +
        Math.floor((2700 - this.timeCount) / 20);

      this.ctx.restore();

      this.ctx.save();
      this.ctx.font = "40px 'Press Start 2P', cursive";
      this.ctx.fillStyle = "#fff";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        `${
          Math.floor(this.scoreCount / 20) +
          Math.floor((2700 - this.timeCount) / 20)
        }`,
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2 + 50
      );
      this.ctx.restore();

      let playAgain = document.getElementById("play-again");
      playAgain.classList.replace("inactive", "active");
    }
  }

  addDeath() {
    this.deaths.push(new Death(this.ctx, this.frog.x, this.frog.y));
  }

  restartGame() {
    let time = document.querySelectorAll(".score-time.inactive");
    let timeArr = [...time];
    timeArr.forEach((el) => el.classList.replace("inactive", "active"));

    let live = document.querySelectorAll(".score-heart");
    const liveArr = [...live];
    liveArr.forEach((live) => live.classList.remove("inactive"));
  }
}
