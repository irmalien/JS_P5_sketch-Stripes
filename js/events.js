function mousePressed() {
  for(i = objArr.length-1; i >= 0; i-- ){
    objArr[i].pressed = true;
  }
  
}
function mouseReleased() {
  for(i = objArr.length-1; i >= 0; i-- ){
    objArr[i].pressed = false;
    objArr[i].released = true;
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
    // console.log("space:pause/play");
  }
  else if (keyCode === LEFT_ARROW) {
    for(i = objArr.length-1; i >= 0; i-- ){
      objArr[i].newSpeed = false;
    }
    // console.log("left:Slower");
  } 
  else if (keyCode === RIGHT_ARROW) {
    for(i = objArr.length-1; i >= 0; i-- ){
      objArr[i].newSpeed = true;
    }
    // console.log("right:faster");
  }

  else if (keyCode === UP_ARROW) {
    if(quantity<=25){quantity=quantity+1}
    else {quantity=floor(quantity*1.1)}    
    // console.log("up:add");
  } 
  else if (keyCode === DOWN_ARROW) {
    if(quantity<=25){quantity=quantity-1}
    else {quantity=floor(quantity*0.1)} 
    // console.log("down:remove");
  }
  else if (keyCode === 67) {
    selectPalette(true, true, 5);
    for(i = objArr.length-1; i >= 0; i-- ){
      objArr[i].newColor = selectColor();
    }
    // console.log("c:color");
  }
  else if (keyCode === 77) {
    toggleMenu();
    // console.log("m:menu");
  }

  else if (keyCode === 83) {
    saveCanvas(scene.titleShort, 'png')
    // console.log("s:save");
  }
}