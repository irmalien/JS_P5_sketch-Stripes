class Square {
  constructor(x, y) {
    //OBJECT
    this.horisontal = coinFlip(true, false, 1);
    this.weight = coinFlip(coinFlip(16, 8, .2), coinFlip(4, 2, .4), .2);

    if(x == undefined || y == undefined){
      this.x=random(0, scene.canvasWidth)
      this.y=0;
    }
    else{
      this.x = mouseX;
      this.y = 0;
    }
  
    this.color = selectColor();
    this.alfa = coinFlip(0.7, 0.05, .9)
    //MOVEMENT
    this.direction =coinFlip(true, false);
    this.speed = coinFlip(random(0,.064), random(.064,.512), .95)

    //STATE
    this.isPressed = false;
    this.isSelected = false;
    this.isReleased = false;

    //BOUNCE
    this.bSin = {
      initialized: false,
      timeY: 0,
      speed: 0.1,
      positionX: 0,
      amplitude: 0,
      frequency: 0,
      decay: 0,
      endstate: 0,
      zeroPoint: this.x
    };

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

  draw(){
    strokeWeight(this.weight)
    stroke(this.color[0],this.color[1],this.color[2], this.alfa)
    if(this.isSelected){
      line(this.xTemp, 0, this.xTemp, height)
    }
    else{
      line(this.x, 0, this.x, height)
    }

  };

  //IF ACTIVE
  select(){
    if(this.isPressed){
      if(mousePos[0]<this.x && mouseX>this.x){
        this.selected = true;
      }
      else if(mousePos[0]>this.x && mouseX<this.x){
        this.selected = true;
      }
      else if(mousePos[0]===this.x || mouseX===this.x){
        this.selected = true;
      }
    }
  }

  selectSimple(){
    if(this.isPressed){
      const safeArea = (this.weight/2)+10;
      if(mouseX>this.x-safeArea && mouseX<this.x+safeArea){
        this.selected = true;
      }
    }
  }

  drag(){
    if(this.isPressed && this.isSelected){
      let dist = mouseX-this.x
      this.xTemp = this.x+(dist/this.weight);
    }
  }

  snap(){
    if(this.isPressed && this.isSelected){
      let dist = mouseX-this.x;
      if(dist<0){dist = -dist};
      if(dist>400){
        this.pressed = false;
        this.released = true;
      }
    }
  }


  bounce(){
    if(this.isReleased && this.isSelected){
      //initialize parameters
      if(!this.bSin.initialized){
        let dist = this.xTemp-this.x;
        if(dist<0){
          dist = -dist;
          this.bSin.timeY = this.bSin.frequency/2;
        }
        else{
          this.bSin.timeY = this.bSin.frequency;
        }
        this.bSin.speed =2/this.weight;
        this.bSin.amplitude = dist;
        this.bSin.frequency = 1,
        this.bSin.decay = 0.98
        this.bSin.endstate = 0.1,
        this.bSin.initialized = true;
      }

      this.bSin.zeroPoint = this.x;
      this.bSin.positionX = this.bSin.zeroPoint + this.bSin.amplitude * Math.sin(this.bSin.timeY/this.bSin.frequency);
      this.bSin.timeY = this.bSin.timeY+this.bSin.speed;
      this.bSin.amplitude = this.bSin.amplitude*this.bSin.decay;
      this.xTemp = this.bSin.positionX

      if(this.bSin.amplitude<this.bSin.endstate){
        this.xTemp = null;
        this.bSin.initialized = false;
        this.released = false;
        this.selected = false;
      }
    }
  }

  //SET STATE
  set pressed(value){
    this.isPressed = value;
  }

  set selected(value){
    this.isSelected = value;
  }

  set released(value){
    this.isReleased = value;
  }

  set newColor(value){
    this.color = value;
  }

  set newSpeed(value){
    if (value){
      this.speed=this.speed*2
    }
    else
      this.speed=this.speed/2
  }
}