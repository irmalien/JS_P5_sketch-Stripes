
let x = 0;
let y = 0;
let spacing = 200;
let distanceBetweenLine = 100;
let col1H = 360;
let col1S = 90;
let col1L = 90;
let col2 = 0
let looping = true;

function setup() {
  createCanvas(2400, 1200,)
  colorMode(HSL, 360,100,100);
  background(0) 
}

function draw() {
  frameRate(15)
  
  let smallStep = 0
  let spaceBetweenLine = true;
  let mirrorSquare = false;

  noSmooth();
  strokeWeight(1);
  // noFill();
  
  // if(random(1) < 0.5) {spaceBetweenLine=!spaceBetweenLine;}
  if(random(1) < 0.5) {mirrorSquare=!mirrorSquare;}

  for(let i=0; i<spacing; i++){
    let dist = i/distanceBetweenLine;
    if(dist%1 === 0){
      spaceBetweenLine = !spaceBetweenLine;
    };
    if(spaceBetweenLine){
      stroke(col1H,col1S,col1L);
      // console.log("white")
    }
    else {
      stroke(0,0,0, 0);
      // console.log("black")
    };
    if(!mirrorSquare){
      line(x+spacing-smallStep , y, x+spacing, y+smallStep);
      line(x , y+smallStep, x+spacing-smallStep, y+spacing); 
    }
    else {
      line(x , y+smallStep, x+smallStep, y);
      line(x+smallStep , y+spacing, x+spacing, y+smallStep);
    }
    smallStep++
  }

    
  // if(!mirrorSquare){
  //   line(x , y+smallStep, x+spacing-smallStep, y+spacing); 
  // }
  // else {
  //   line(x+smallStep , y+spacing, x+spacing, y+smallStep);
  // }
  
  x=x+spacing;
  
  if (x > width) {
    x = 0;
    y = y+spacing
  }
  if (y > height) {
    x=0;
    y=0;
    let randomize = random(1)
    if (randomize<0.25){
      distanceBetweenLine = 25
      col1H=random(0,360);
      col1S=0;
      col1L=0;
    }
    else if (randomize<0.5){
      console.log("middle")
      distanceBetweenLine = 50
      col1H=0;
      col1S=100;
      col1L=100;
    }
    else {
      distanceBetweenLine = 100
      col1H=random(0,360);
      col1S=80;
      col1L=80;
    };

    // console.log("end")
    // noLoop();

  }
}

function keyPressed() {
    // if (keyCode === LEFT_ARROW) {
    //   rose.playspeed = rose.playspeed / 2;
    //   // console.log("left");
    // } else if (keyCode === RIGHT_ARROW) {
    //   rose.playspeed = rose.playspeed * 2;
    //   // console.log("right");
    // } else if (keyCode === UP_ARROW) {
    //   rose.c = rose.c + 0.1;
    //   // console.log("up");
    // } else if (keyCode === DOWN_ARROW) {
    //   rose.c = rose.c - 0.1;
    //   if (rose.c <= 0.1) {
    //     rose.c = 1;
    //   }
    //   // console.log("down");
    // } 
    if (keyCode === 32) {
      if (looping) {
        noLoop()
        looping = false;
      } else {
        loop()
        looping = true;
      }
      // console.log("spacebar");
    }
  }