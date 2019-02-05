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

colArray = [];

function selectColor(){
  const color = []
  colRand = int(random(0, this.colArray.length));
  color[0] = this.colArray[this.colRand][0];
  color[1]= this.colArray[this.colRand][1];
  color[2]= this.colArray[this.colRand][2];
  return color;
}


function selectPalette(size =5, white = true, black = false){
  let selectRand = floor(random(0, colorsData.palettes.length))

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
