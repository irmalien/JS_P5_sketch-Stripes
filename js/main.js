let square = null;
let quantity = 100;
const objArr = []

function preload(){
  colorsData = loadJSON("data/palettes.json");
}

function setup() {
  selectPalette(true, true, 5);
  scene.canvasWidth = scene.windowWidth-(scene.windowWidth%scene.relativeSize);
  scene.canvasHeight = scene.windowHeight-(scene.windowHeight%scene.relativeSize);

  scene.canvas = createCanvas(scene.canvasWidth, scene.canvasHeight);
  scene.canvas.class("canvasClass");
  scene.canvas.id("canvasId");
  scene.wrapCanvas("canvasId");

  colorMode(HSL, 360,100,100);
  background(scene.color[0],scene.color[1],scene.color[2]);
  scene.fitCanvasToScreen();
  window.addEventListener('resize', scene.fitCanvasToScreen, false);

  if(objArr.length<quantity){
    for(let i =0; i<quantity; i++){
      objArr.push(new Square());
    }
  }
}


function draw() {
  // background(0,0,0);
  frameRate(scene.fps);
  addRemoveObj(objArr, quantity, new Square())

  for(let j = 0; j <= scene.trailing; j++){
    for(let i = objArr.length-1; i >= 0; i-- ){
      objArr[i].move();
        objArr[i].select();
        objArr[i].drag();
        objArr[i].snap();
        objArr[i].bounce();
      objArr[i].draw();
  }
  scene.fadeIn(300);
  // scene.download(scene.countDraw, 100, 3)
  // scene.pause(1000);
  // scene.countDraw++;
  }
}