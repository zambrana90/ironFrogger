class Map {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 79;
    this.height = 80;

    this.road = new Image();
    this.road.src = "./assets/img/road.png";
    this.road.isReady = false;
    this.road.onload = () => {
      this.road.isReady = true;
    };
    this.grass = new Image();
    this.grass.src = "./assets/img/grass.png";
    this.grass.isReady = false;
    this.grass.onload = () => {
      this.grass.isReady = true;
    };
    this.finalGrass = new Image();
    this.finalGrass.src = "./assets/img/final-grass2.png";
    this.finalGrass.isReady = false;
    this.finalGrass.onload = () => {
      this.finalGrass.isReady = true;
    };
    this.finalFrog = new Image();
    this.finalFrog.src = "./assets/img/final-frog2.png";
    this.finalFrog.isReady = false;
    this.finalFrog.onload = () => {
      this.finalFrog.isReady = true;
    };
    this.water = new Image();
    this.water.src = "./assets/img/water.png";
    this.water.isReady = false;
    this.water.onload = () => {
      this.water.isReady = true;
    };
  }

  isReady() {
    return (
      this.road.isReady,
      this.grass.isReady,
      this.finalGrass.isReady,
      this.water.isReady,
      this.finalFrog.isReady
    );
  }

  draw() {
    if (this.isReady()) {
      //ROW 1
      this.ctx.drawImage(
        this.finalFrog,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalGrass,
        this.x-2 + this.width,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalFrog,
        this.x-4 + this.width * 2,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalGrass,
        this.x-4 + this.width * 3,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalFrog,
        this.x-8 + this.width * 4,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalGrass,
        this.x-4 + this.width * 5,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalFrog,
        this.x-8 + this.width * 6,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalGrass,
        this.x-4 + this.width * 7,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.finalFrog,
        this.x-8 + this.width * 8,
        this.y,
        this.width,
        this.height
      );
      //ROW 2
      this.ctx.drawImage(
        this.water,
        this.x,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2),
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 2,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 3,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 4,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 5,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 6,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 7,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 8,
        this.y + this.height,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 9,
        this.y + this.height,
        this.width,
        this.height
      );
      //ROW 3
      this.ctx.drawImage(
        this.water,
        this.x,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2),
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 2,
        this.width,
        this.height
      );
      //ROW 4
      this.ctx.drawImage(
        this.water,
        this.x,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2),
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.water,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 3,
        this.width,
        this.height
      );
      //ROW 5
      this.ctx.drawImage(
        this.grass,
        this.x,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2),
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 4,
        this.width,
        this.height
      );
      //ROW 6
      this.ctx.drawImage(
        this.road,
        this.x,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2),
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 5,
        this.width,
        this.height
      );
      //ROW 7
      this.ctx.drawImage(
        this.road,
        this.x,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2),
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 6,
        this.width,
        this.height
      );
      //ROW 8
      this.ctx.drawImage(
        this.road,
        this.x,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2),
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 7,
        this.width,
        this.height
      );
      //ROW 9
      this.ctx.drawImage(
        this.road,
        this.x,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2),
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.road,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 8,
        this.width,
        this.height
      );
      //ROW 10
      this.ctx.drawImage(
        this.grass,
        this.x,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2),
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 2,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 3,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 4,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 5,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 6,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 7,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 8,
        this.y + this.height * 9,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.grass,
        this.x + (this.width - 2) * 9,
        this.y + this.height * 9,
        this.width,
        this.height
      );
    }
  }
}
