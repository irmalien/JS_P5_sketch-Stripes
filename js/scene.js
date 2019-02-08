const scene = {
  titleFull: "Stripes",
  titleShort: "Stripes",
  canvas: null,
  relativeSize: 16,
  windowWidth: document.documentElement.clientWidth,
  windowHeight: document.documentElement.clientHeight,

  canvasWidth: this.windowWidth,
  canvasHeight: this.windowHeight,
  color: [0,0,0],
  alfa: 1,
  looping: true,
  countDraw: 0,
  fps: 30,
  trailing: 1,

  wrapCanvas (id) {
    const canvasWrapper = document.createElement('div');
    canvasWrapper.style.cssText = `position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:hsl(${scene.color[0]}, ${scene.color[1]}%, ${scene.color[2]}%);`;
    document.body.appendChild(canvasWrapper);
    canvasWrapper.appendChild(document.getElementById(id));
  },
  
  fitCanvasToScreen() {
    let c = document.getElementsByTagName('canvas');
    let px = /px/;
  
    for(let i =0; i<c.length; i++){
      let p1 = window.innerWidth/window.innerHeight;
      let p2 = c[i].style.width.replace(px, '')/c[i].style.height.replace(px, '');
      let w1w2 = window.innerWidth/c[i].style.width.replace(px, '')
      let h1h2 = window.innerHeight/c[i].style.height.replace(px, '')
  
      if(p1 > p2){
        let w = c[i].style.width.replace(px, '')*h1h2
        let h = c[i].style.height.replace(px, '')*h1h2
        c[i].style.width = `${w}px`;
        c[i].style.height = `${h}px`;
      }
      else{
        let w = c[i].style.width.replace(px, '')*w1w2
        let h = c[i].style.height.replace(px, '')*w1w2
        c[i].style.width = `${w}px`;
        c[i].style.height = `${h}px`;
      }
    }
  },

  download(counter, totalImages =100, everyNth = 1){
    totalImages = totalImages*everyNth;
    if(counter < totalImages & counter%everyNth===0){
      saveCanvas(this.titleShort, 'png');
    }
  },
  
  pause(msec){
    setTimeout(() => {
      loop()
    }, msec);
    noLoop()
  },

  fadeIn(frames){
    if(scene.alfa>=0){
      let step = 1/frames
      scene.alfa=scene.alfa-step;
      background(scene.color[0],scene.color[1],scene.color[2], scene.alfa);
    }
  },

  fadeOut(frames){
    if(scene.alfa<=1){
      let step = 1/frames
      scene.alfa=scene.alfa+step;
      background(scene.color[0],scene.color[1],scene.color[2], scene.alfa);
    }
  }
}