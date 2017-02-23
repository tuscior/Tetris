  let map = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

let keys = {
  left: false,
  right: false,
  down: false,
  rotate: false
}
const image = document.querySelector('#block');


function Square(x, y){
  this.x = 175+x;
  this.y = 0+y;
  this.addX = VARS.scale;
  this.addY = VARS.scale;
  this.active = true;
  this.rotate = 'left';
}
Square.prototype.draw = function(){

  Game.square.drawFixed();
  Game.ctx.fillStyle = "blue";
  Game.ctx.beginPath();
  Game.ctx.drawImage(image, Game.square.s1.x, Game.square.s1.y, VARS.scale, VARS.scale);
  Game.ctx.drawImage(image,Game.square.s2.x, Game.square.s2.y, VARS.scale, VARS.scale);
  Game.ctx.drawImage(image,Game.square.s3.x, Game.square.s3.y, VARS.scale, VARS.scale);
  Game.ctx.drawImage(image,Game.square.s4.x, Game.square.s4.y, VARS.scale, VARS.scale);
  Game.ctx.closePath();
}
Square.prototype.drawFixed = function(){
 
    for (i=0; i<24; i++){
    for(j=0; j<=15; j++){
    if(map[i][j] === 1){
      Game.ctx.drawImage(image, VARS.scale*j, VARS.scale*i, VARS.scale, VARS.scale);
     /*/ Game.ctx.beginPath();
      Game.ctx.fillRect(VARS.scale*j, VARS.scale*i, VARS.scale, VARS.scale);
      Game.ctx.closePath();/*/
    }
  }
}
}
Square.prototype.update = function(time, lastTime){
  checkFixed();
  if(endGame()){
    window.cancelAnimationFrame(animation);
    drawEnd();
  }
  else{
  Game.square.s1.move(time);
  if(Game.square.s1.active === true){
    if (map[(Game.square.s4.y/VARS.scale)+1][(Game.square.s4.x/VARS.scale)] === 1 || map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)] === 1 ||
   map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)] === 1 || map[(Game.square.s2.y/VARS.scale)+1][(Game.square.s2.x/VARS.scale)] === 1)
     {
       map[(Game.square.s1.y/VARS.scale)][(Game.square.s1.x/VARS.scale)]=1;
       map[(Game.square.s2.y/VARS.scale)][(Game.square.s2.x/VARS.scale)]=1;
       map[(Game.square.s3.y/VARS.scale)][(Game.square.s3.x/VARS.scale)]=1;
       map[(Game.square.s4.y/VARS.scale)][(Game.square.s4.x/VARS.scale)]=1;
       Game.square.s1.active = false;
       Game.square.s2.active = false;
       Game.square.s3.active = false;
       Game.square.s4.active = false;
       let shape = [O,T,Z,I,L,J,S];
       let num = VARS.rand(0,6);
       shape[num]();
        
       Game.square.drawFixed();
      }
  else if(time - VARS.lastTimeF >= 4000/VARS.fps){
        VARS.lastTimeF = time;
        Game.square.s1.y += VARS.scale;
        Game.square.s2.y += VARS.scale;
        Game.square.s3.y += VARS.scale;
        Game.square.s4.y += VARS.scale;
      
    }
}
}
}
Square.prototype.moveup = function(ev){
let kc  = ev.keyCode;
ev.preventDefault();
if(kc === 39){
keys.right = false;
}
else if(kc === 40){
keys.down = false;
}
else if(kc === 37){
keys.left = false;
}
else if(kc === 38){
keys.rotate = false;
}
}
Square.prototype.movedown = function(ev){
let kc  = ev.keyCode;
ev.preventDefault();
if(kc === 39){
keys.right = true;
}
else if(kc === 40){
keys.down = true;
}
else if(kc === 37){
keys.left = true;
}
else if(kc === 38){
keys.rotate = true;
}
}
Square.prototype.move = function(time){
  if(keys.left && checkMove() && time - VARS.lastTimeF >= 2000/VARS.fps){
    Game.square.s1.x -= VARS.scale;
    Game.square.s2.x -= VARS.scale;
    Game.square.s3.x -= VARS.scale;
    Game.square.s4.x -= VARS.scale;
}
  else if(keys.right && checkMove() && time - VARS.lastTimeF >= 2000/VARS.fps){
    Game.square.s1.x += VARS.scale;
    Game.square.s2.x += VARS.scale;
    Game.square.s3.x += VARS.scale;
    Game.square.s4.x += VARS.scale;
  }
  else if(keys.down && checkMove() && time - VARS.lastTimeF >= 2000/VARS.fps){
    Game.square.s1.y += VARS.scale;
    Game.square.s2.y += VARS.scale;
    Game.square.s3.y += VARS.scale;
    Game.square.s4.y += VARS.scale;
  }
  else if(keys.rotate && time - VARS.lastTimeF >= 3000/VARS.fps){
    switch(Game.square.shape){
      case "O":
      return true;
      case "I":
      return checkRotateI();
      case "L":
      return checkRotateL();
      case "S":
      return checkRotateS();
      case "Z":
      return checkRotateZ();
      case "J":
      return checkRotateJ();
      case "T":
      return checkRotateT();
      default: true;
  }
}
}
function checkRotateL(){
if(Game.square.s1.rotate === "left" && map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)+1] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)][(Game.square.s4.x/VARS.scale)-2] === 0){
  Game.square.s1.x += VARS.scale;
  Game.square.s1.y += VARS.scale;
  Game.square.s3.x -= VARS.scale;
  Game.square.s3.y -= VARS.scale;
  Game.square.s4.x -= 2*VARS.scale;
  Game.square.s1.rotate = "up";
}
else if(Game.square.s1.rotate === "up" && map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)-2][(Game.square.s4.x/VARS.scale)] === 0){
  Game.square.s1.x -= VARS.scale;
  Game.square.s1.y += VARS.scale;
  Game.square.s3.x += VARS.scale;
  Game.square.s3.y -= VARS.scale;
  Game.square.s4.y -= 2*VARS.scale;
  Game.square.s1.rotate = "right";
}
else if(Game.square.s1.rotate === "right" && map[(Game.square.s1.y/VARS.scale)-1][(Game.square.s1.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)][(Game.square.s4.x/VARS.scale)+2] === 0){
  Game.square.s1.x -= VARS.scale;
  Game.square.s1.y -= VARS.scale;
  Game.square.s3.x += VARS.scale;
  Game.square.s3.y += VARS.scale;
  Game.square.s4.x += 2*VARS.scale;
  Game.square.s1.rotate = "down";
}
else if(Game.square.s1.rotate === "down" && map[(Game.square.s1.y/VARS.scale)-1][(Game.square.s1.x/VARS.scale)+1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)][(Game.square.s4.x/VARS.scale)+2] === 0){
  Game.square.s1.x += VARS.scale;
  Game.square.s1.y -= VARS.scale;
  Game.square.s3.x -= VARS.scale;
  Game.square.s3.y += VARS.scale;
  Game.square.s4.y += 2*VARS.scale;
  Game.square.s1.rotate = "left";
}
}
function checkRotateI(){
if(keys.rotate && Game.square.s1.rotate === "left" && map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)+1] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)-2][(Game.square.s4.x/VARS.scale)-2] === 0){
  Game.square.s1.x += VARS.scale;
  Game.square.s1.y += VARS.scale;
  Game.square.s3.x -= VARS.scale;
  Game.square.s3.y -= VARS.scale;
  Game.square.s4.x -= 2*VARS.scale;
  Game.square.s4.y -= 2*VARS.scale;
  Game.square.s1.rotate = "up";
}
else if(Game.square.s1.rotate === "up" && map[(Game.square.s1.y/VARS.scale)-1][(Game.square.s1.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)+2][(Game.square.s4.x/VARS.scale)+2] === 0){
  Game.square.s1.x -= VARS.scale;
  Game.square.s1.y -= VARS.scale;
  Game.square.s3.x += VARS.scale;
  Game.square.s3.y += VARS.scale;
  Game.square.s4.x += 2*VARS.scale;
  Game.square.s4.y += 2*VARS.scale;
  Game.square.s1.rotate = "left";
}
}
function checkRotateZ(){
if(Game.square.s1.rotate === "left" && map[(Game.square.s1.y/VARS.scale)][(Game.square.s1.x/VARS.scale)+2] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)+1][(Game.square.s4.x/VARS.scale)-1] === 0){
  Game.square.s1.x += 2*VARS.scale;
  Game.square.s2.x += VARS.scale;
  Game.square.s2.y += VARS.scale;
  Game.square.s4.x -= VARS.scale;
  Game.square.s4.y += VARS.scale;
  Game.square.s1.rotate = "up";
}
else if(Game.square.s1.rotate === "up" && map[(Game.square.s1.y/VARS.scale)][(Game.square.s1.x/VARS.scale)-2] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)-1][(Game.square.s4.x/VARS.scale)+1] === 0){
  Game.square.s1.x -= 2*VARS.scale;
  Game.square.s2.x -= VARS.scale;
  Game.square.s2.y -= VARS.scale;
  Game.square.s4.x += VARS.scale;
  Game.square.s4.y -= VARS.scale;
  Game.square.s1.rotate = "left";
}
}
function checkRotateT(){
if(Game.square.s1.rotate === "left" && Game.square.s1.y !== 25 && Game.square.s2.y !== 25 && Game.square.s3.y !== 25 && Game.square.s4.y !== 25 && map[(Game.square.s2.y/VARS.scale)+1][(Game.square.s2.x/VARS.scale)] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)] === 0 && map[Game.square.s4.y/VARS.scale][(Game.square.s4.x/VARS.scale)-1] === 0){
Game.square.s4.x -= VARS.scale;
Game.square.s4.y -= VARS.scale; 
Game.square.s2.x -= VARS.scale; 
Game.square.s2.y += VARS.scale;
Game.square.s3.x += VARS.scale;  
Game.square.s3.y -= VARS.scale;
Game.square.s1.rotate = 'up';
}
else if(Game.square.s1.rotate === "up" && map[(Game.square.s2.y/VARS.scale)-1][(Game.square.s2.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)-1][(Game.square.s4.x/VARS.scale)+1] === 0){
Game.square.s2.x -= VARS.scale;
Game.square.s2.y -= VARS.scale;
Game.square.s3.x += VARS.scale;
Game.square.s3.y += VARS.scale;
Game.square.s4.x += VARS.scale;
Game.square.s4.y -= VARS.scale;
Game.square.s1.rotate = "right";
}
else if(Game.square.s1.rotate === "right" && map[(Game.square.s2.y/VARS.scale)-1][(Game.square.s2.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)+1][(Game.square.s4.x/VARS.scale)+1] === 0){
Game.square.s2.x += VARS.scale;
Game.square.s2.y -= VARS.scale;
Game.square.s3.x -= VARS.scale;
Game.square.s3.y += VARS.scale;
Game.square.s4.x += VARS.scale;
Game.square.s4.y += VARS.scale;
Game.square.s1.rotate = "down";
}
else if(Game.square.s1.rotate === "down" && map[(Game.square.s2.y/VARS.scale)+1][(Game.square.s2.x/VARS.scale)+1] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)+1][(Game.square.s4.x/VARS.scale)-1] === 0){
Game.square.s2.x += VARS.scale;
Game.square.s2.y += VARS.scale;
Game.square.s3.x -= VARS.scale;
Game.square.s3.y -= VARS.scale;
Game.square.s4.x -= VARS.scale;
Game.square.s4.y += VARS.scale;
Game.square.s1.rotate = "left";
}
}
function checkRotateJ(){
if(Game.square.s1.rotate === "left" && map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)+1] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)-2][(Game.square.s4.x/VARS.scale)] === 0){
Game.square.s1.x += VARS.scale;
Game.square.s1.y += VARS.scale;
Game.square.s3.x -= VARS.scale;
Game.square.s3.y -= VARS.scale;
Game.square.s4.y -= 2*VARS.scale;
Game.square.s1.rotate = "up";
}
else if(Game.square.s1.rotate === "up" && map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)-1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)][(Game.square.s4.x/VARS.scale)+2] === 0){
Game.square.s1.x -= VARS.scale;
Game.square.s1.y += VARS.scale;
Game.square.s3.x += VARS.scale;
Game.square.s3.y -= VARS.scale;
Game.square.s4.x += 2*VARS.scale;
Game.square.s1.rotate = "right";
}
else if(Game.square.s1.rotate === "right" && map[(Game.square.s1.y/VARS.scale)-1][(Game.square.s1.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)+2][(Game.square.s4.x/VARS.scale)] === 0){
Game.square.s1.x -= VARS.scale;
Game.square.s1.y -= VARS.scale;
Game.square.s3.x += VARS.scale;
Game.square.s3.y += VARS.scale;
Game.square.s4.y += 2*VARS.scale;
Game.square.s1.rotate = "down";
}
else if(Game.square.s1.rotate === "down" && map[(Game.square.s1.y/VARS.scale)-1][(Game.square.s1.x/VARS.scale)+1] === 0 && map[(Game.square.s3.y/VARS.scale)+1][(Game.square.s3.x/VARS.scale)-1] === 0 && map[(Game.square.s4.y/VARS.scale)][(Game.square.s4.x/VARS.scale)-2] === 0){
Game.square.s1.x += VARS.scale;
Game.square.s1.y -= VARS.scale;
Game.square.s3.x -= VARS.scale;
Game.square.s3.y += VARS.scale;
Game.square.s4.x -= 2*VARS.scale;
Game.square.s1.rotate = "left";
}
}
function checkRotateS(){
if(Game.square.s1.rotate === "up" && map[(Game.square.s1.y/VARS.scale)-1][(Game.square.s1.x/VARS.scale)-1] === 0 && map[(Game.square.s3.y/VARS.scale)-2][(Game.square.s3.x/VARS.scale)+1] === 0 && map[(Game.square.s4.y/VARS.scale)+1][(Game.square.s4.x/VARS.scale)-1] === 0){
Game.square.s1.x -= VARS.scale;
Game.square.s1.y -= VARS.scale;
Game.square.s2.y -= 2*VARS.scale;
Game.square.s4.x -= VARS.scale;
Game.square.s4.y += VARS.scale;
Game.square.s1.rotate = "left";
}
else if(Game.square.s1.rotate === "left" && map[(Game.square.s1.y/VARS.scale)+1][(Game.square.s1.x/VARS.scale)+1] === 0 && map[(Game.square.s2.y/VARS.scale)+2][(Game.square.s2.x/VARS.scale)] === 0 && map[(Game.square.s4.y/VARS.scale)-1][(Game.square.s4.x/VARS.scale)+1] === 0){
Game.square.s1.x += VARS.scale;
Game.square.s1.y += VARS.scale;
Game.square.s2.y += 2*VARS.scale;
Game.square.s4.x += VARS.scale;
Game.square.s4.y -= VARS.scale;
Game.square.s1.rotate = "up";
  }
}
function checkMove(){
let squaresX = [Game.square.s1.x, Game.square.s2.x, Game.square.s3.x, Game.square.s4.x];
let squaresY = [Game.square.s1.y, Game.square.s2.y, Game.square.s3.y, Game.square.s4.y];
if(keys.left){
  return squaresX.every((x,i) => {
    return map[squaresY[i]/VARS.scale][(x/VARS.scale)-1]===0;
  });
} 
if(keys.right){
  return squaresX.every((x,i) => {
    return map[squaresY[i]/VARS.scale][(x/VARS.scale)+1]===0;
  });
} 
if(keys.down){
  return squaresY.every((y,i) => {
    return map[(y/VARS.scale)+1][(squaresX[i]/VARS.scale)]===0;
  });
} 
}

function checkFixed(){
  for(i=0; i<24; i++){
    let count = 0;
    map[i].map(l => {
      l===1 ? count++ : l;
    });
    if(count===16){
      map.splice(i, 1);
      map.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    }
  }
}

function endGame(){
let squaresX = [Game.square.s1.x, Game.square.s2.x, Game.square.s3.x, Game.square.s4.x];
let squaresY = [Game.square.s1.y, Game.square.s2.y, Game.square.s3.y, Game.square.s4.y];
return squaresY.some((y,i) => {
 return map[y/VARS.scale][squaresX[i]/VARS.scale] === 1;
});
}
//check if next pos is free
//if is free, move square
//if not, draw actual pos
