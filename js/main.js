
let x = 0;
let y = 0;

const SQUARE = 256;
let squareSize = SQUARE;
const canvasWidth = squareSize*8;
const canvasHeight = squareSize*8;

let nextColumn = squareSize;
let nextRow = squareSize;
let lineSize = squareSize/2;
let mirrorChance = .5;
// let mirrorSquare = false;
let looping = true;

let color = [360, 80, 80]
const white = [0, 100, 100]
const black = [0, 0, 0]


function setup() {
  createCanvas(canvasWidth, canvasHeight)
  colorMode(HSL, 360,100,100);
  background(0) 
}

function draw() {
  frameRate(20)
  noSmooth();

  let drawIncrement = 0;
  const mirrorSquare = coinFlip(true, false, mirrorChance);
  // let drawLine = coinFlip(true, false);
  let drawLine = false;

  //DRAW SQUARE  
  for(let i=0; i<squareSize; i++){
    let dist = i/lineSize;
    if(dist%1 === 0){
      drawLine = !drawLine;
    };

    if(drawLine){
      stroke(color[0],color[1],color[2]);
    }
    else {
      stroke(0, 0);
    };

    if(!mirrorSquare){
      line(x+squareSize-drawIncrement , y, x+squareSize, y+drawIncrement);
      line(x , y+drawIncrement, x+squareSize-drawIncrement, y+squareSize); 
    }
    else {
      line(x , y+drawIncrement, x+drawIncrement, y);
      line(x+drawIncrement , y+squareSize, x+squareSize, y+drawIncrement);
    }
    drawIncrement++
  }

    


  //MOVE SQUARE
  x = move(x, nextColumn);
  
  //MOVE LINE
  if (x > width) {
    x = 0;
    y = move(y, nextRow);
  }




  //SET NEW SCENE
  if (y > height) {
    x, y = 0
    squareSize = coinFlip(SQUARE, squareSize*coinFlip(.5, 2, 0.2))
    
    squareSize*coinFlip(SQUARE, coinFlip(.5, 2));

    nextColumn = squareSize*coinFlip(1, 2, .9);
    nextRow = squareSize*coinFlip(1, 2, .9);
    mirrorChance = coinFlip(.5, coinFlip(0, 1), .9);
    let randomColor = [random(0,360), 80, 80];

    //Randomize Line and Color
    let randomize = random(1)
    if (randomize<0.1){
      lineSize = squareSize/coinFlip(32, 64)
      color = coinFlip(coinFlip(black, white), randomColor)
      nextColumn = squareSize*coinFlip(1, 2, .25)
      nextRow = squareSize*coinFlip(1, 2, .25)
    }
    else if (randomize<0.2){
      lineSize = squareSize/8
      color = coinFlip(black, white)
      nextColumn = squareSize*coinFlip(1, 2, .5)
      nextRow = squareSize*coinFlip(1, 2, .5)
    }
    else if (randomize<0.4){
      lineSize = squareSize/4
      color = coinFlip(black, white)
    }
    else {
      lineSize = squareSize/2
      color = randomColor;
    };
  }
}


// HELPERS
function move(pos, distance, step=1){
  pos=pos+distance*step;
  return pos;
}

function coinFlip(arg1, arg2, chance = .5){
  let randomize = random(1)
  if (randomize<chance){
    return arg1
  }
  else{
    return arg2
  }
}

// EVENTS
function keyPressed() {
    if (keyCode === 32) {
      if (looping) {
        noLoop()
        looping = false;
      } else {
        loop()
        looping = true;
      }
    }
  }
