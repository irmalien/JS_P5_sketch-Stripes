let square = null;
let quantity = 300;
const objArr = []

function preload(){
  colorsData = loadJSON("data/palettes.json");
}

function setup() {
  selectPalette(5, true, false);
  scene.canvasWidth = scene.windowWidth-(scene.windowWidth%scene.relativeSize);
  scene.canvasHeight = scene.windowHeight-(scene.windowHeight%scene.relativeSize);

  scene.canvas = createCanvas(scene.canvasWidth, scene.canvasHeight);
  scene.canvas.class("canvasClass");
  scene.canvas.id("canvasId");
  scene.wrapCanvas("canvasId");

  colorMode(HSL, 360,100,100);
  background(0);
  window.addEventListener('resize', scene.fitCanvasToScreen, false);

  if(objArr.length<quantity){
    for(let i =0; i<quantity; i++){
      objArr.push(new Square());
    }

  }

}



function draw() {
  background(0,0,0);
  frameRate(scene.speed);

  // if(objArr.length>quantity){
  //   objArr.splice(0, 1);
  // }
  // else if(objArr.length<quantity){
  //   objArr.push(
  //     new Square());
  // };
  for(i = objArr.length-1; i >= 0; i-- ){
      objArr[i].move();
      objArr[i].draw();

  // square.randomize();
  // scene.download(scene.countDraw, 100, 3)
  // scene.pause(1000);
  // scene.countDraw++;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (scene.looping) {
      noLoop()
      scene.looping = false;
    } else {
      loop()
      scene.looping = true;
    }
  }
}

function mouseDragged() {
  quantity++;
  objArr.push(
    new Square(mouseX, mouseY))
}