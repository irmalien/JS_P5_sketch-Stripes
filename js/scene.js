//SCENE SETTINGS
const scene = {
  canvas: null,
  relativeSize: 200,
  windowWidth: document.documentElement.clientWidth,
  windowHeight: document.documentElement.clientHeight,

  canvasWidth: this.windowWidth,
  canvasHeight: this.windowHeight,

  looping: true,
  countDraw: 0,
  speed: 30,

  setCanvas(){

  },

  wrapCanvas (id) {
    const canvasWrapper = document.createElement('div');
    canvasWrapper.style.cssText = 'position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#000;';
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
      saveCanvas('image', 'png');
    }
  },
  
  pause(msec){
    setTimeout(() => {
      loop()
    }, msec);
    noLoop()
  }
}