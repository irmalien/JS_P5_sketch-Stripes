function coinFlip(arg1, arg2, chance = .5){
  let randomize = random(1)
  if (randomize<chance){
    return arg1
  }
  else{
    return arg2
  }
}

function edgeless(x = undefined){
    if (x > width){x = 0};
    if (x < 0){x = width};
  return x;
}

function addRemoveObj(arr, quantity, obj){
  if(arr.length>quantity){
    arr.splice(0, 1);
  }
  else if(arr.length<quantity){
    arr.push(
      obj)
  }
}

function mobileVersion(normal, mobile){
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    return mobile
  }
  else if(document.documentElement.clientWidth < 900){
    return mobile
  }
  else{
    return normal
  }
}

colArray = [];

function selectColor(){
  const color = []
  colRand = int(random(0, this.colArray.length));
  color[0] = this.colArray[this.colRand][0];
  color[1]= this.colArray[this.colRand][1];
  color[2]= this.colArray[this.colRand][2];
  return color;
}


function selectPalette(white = true, black = false, size = 5, selected = undefined){
  let selectRand;
  if(selected !=undefined){
    selectRand = selected;
  }
  else{
    selectRand = floor(random(0, colorsData.palettes.length))
  }
  console.log("color:" + selectRand);
  
  if (size > colorsData.palettes[selectRand].length){
    size = colorsData.palettes[selectRand].length
  };

  for (let i=0; i<size; i++){
    let hslNew = hexToHSL(colorsData.palettes[selectRand][i])
    colArray.push(hslNew);
  }

  if (white){
    let colorTemp = [0, 0, 100];
    colArray.push(colorTemp);
  };

  if (black){
    let colorTemp = [0, 0, 0];
    colArray.push(colorTemp);
  };
}
