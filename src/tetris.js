window.onload = function(){
  Game.init();
}
const VARS = {
  rand:function(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
  },
  fps:17,
  W: 400,
  H: 600,
  lastTime: 0,
  lastTimeF: 0,
  scale: 25,
}

let animation;

const Game = {
  menu: function(){
    drawMenu();
  },
  init: function(){
    Game.canvas = document.createElement('canvas');
    Game.ctx = Game.canvas.getContext('2d');
    Game.layout();
    Game.menu();
    document.body.appendChild(Game.canvas);
  },
  layout: function(){
    Game.canvas.width = 400;
    Game.canvas.height = 600;
    Game.canvas.fillStyle = "white";
    Game.canvas.strokeStyle =  "black";
    Game.canvas.lineWidth = 1;
    Game.canvas.lineJoin = "round";
    Game.col = Math.floor(VARS.W/VARS.scale);
    Game.rows = Math.floor(VARS.H/VARS.scale);
  },
  animationLoop: function(time){
  animation = window.requestAnimationFrame(Game.animationLoop);
    if (time - VARS.lastTime >= 1000/VARS.fps){
      console.log('nadal animuje');
      Game.ctx.clearRect(0,0,VARS.W,VARS.H);
      Game.square.draw();
      Game.square.update(time);
      VARS.lastTime = time;
      for (i=1; i<Game.rows; i++){
        Game.ctx.beginPath();
        Game.ctx.moveTo(0,i*VARS.scale);
        Game.ctx.lineTo(400,i*VARS.scale);
        Game.ctx.stroke();
      };
      for (i=1; i<Game.col; i++){
        Game.ctx.beginPath();
        Game.ctx.moveTo(i*VARS.scale, 0);
        Game.ctx.lineTo(i*VARS.scale, 600);
        Game.ctx.stroke();
      };

  }
}
}