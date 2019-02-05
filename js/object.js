const SQUARE = 512;
let squareSize = SQUARE;

let x = 0;
let y = 0;
let beginRow = 0
let beginCol = 0
let endCol = scene.canvasWidth;
let endRow = scene.canvasHeight;

let nextColumn = squareSize;
let nextRow = squareSize;
let lineSize = squareSize/2;
let mirrorChance = .5;

let color = [360, 80, 80]
const white = [0, 100, 100]
const black = [0, 0, 0]

class Square {
  constructor(x, y) {
    this.horisontal = coinFlip(true, false, 1);


    if(this.horisontal){
      this.height = height;
      this.width = coinFlip(coinFlip(16, 8, .2), coinFlip(4, 2, .4), .2);
      if(x == undefined || y == undefined){
        this.x=random(0, scene.canvasWidth)
        this.y=0;
      }
      else{
        this.x = mouseX;
        this.y = 0;
      }
    }
    else{
      this.height = coinFlip(coinFlip(16, 8, .2), coinFlip(4, 2, .4), .2);
      this.width = width;
      if(x == undefined || y == undefined){
        this.x=0
        this.y=random(0, height);
      }
      else{
        this.x = 0;
        this.y = mouseY;
      }
    }


    this.color = selectColor();

    //MOVEMENT
    this.direction =coinFlip(true, false);
    // this.speed = 0.25;
    this.speed = coinFlip(random(0,.1), random(.1,.5), .99)


  };

  draw(){
    noStroke()
    fill(this.color[0],this.color[1],this.color[2],)
    rect(this.x, this.y, this.width, this.height)
  };
  move(){
    if(this.horisontal){
      if(this.direction){
        this.x = this.x+this.speed
      }
      else{
        this.x = this.x-this.speed
      }
      if (this.x > width){this.x = 0};
      if (this.x < 0){this.x = width};
    }

    else{
      if(this.direction){
        this.y = this.y+this.speed
      }
      else{
        this.y = this.y-this.speed
      }
      if (this.y > height){this.y = 0};
      if (this.y < 0){this.y = height};
    }

  };
  randomize(){ 
  };

}