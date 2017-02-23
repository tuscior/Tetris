
function O(){
  Game.square.s1  = new Square(0, 0);
  Game.square.s2 = new Square(0, VARS.scale*1);
  Game.square.s3  = new Square(VARS.scale, VARS.scale*1);
  Game.square.s4  = new Square(VARS.scale, 0);
  Game.square.shape = "O";
}
function T(){
  Game.square.s1  = new Square(0, 0);
  Game.square.s2 = new Square(VARS.scale*1, 0);
  Game.square.s3  = new Square(-VARS.scale*1, 0);
  Game.square.s4  = new Square(0, VARS.scale*1);
  Game.square.shape = "T";
}
function Z(){
  Game.square.s1  = new Square(-VARS.scale, 0);
  Game.square.s2 = new Square(0, 0);
  Game.square.s3  = new Square(0, VARS.scale);
  Game.square.s4  = new Square(VARS.scale, VARS.scale);
  Game.square.shape = "Z";
}
function I(){
  Game.square.s1  = new Square(0, 0);
  Game.square.s2 = new Square(0, VARS.scale*1);
  Game.square.s3  = new Square(0, VARS.scale*2);
  Game.square.s4  = new Square(0, VARS.scale*3);
  Game.square.shape = "I";
}
function L(){
  Game.square.s1  = new Square(0, 0);
  Game.square.s2 = new Square(0, VARS.scale*1);
  Game.square.s3  = new Square(0, VARS.scale*2);
  Game.square.s4  = new Square(VARS.scale, VARS.scale*2);
  Game.square.shape = "L";
}
function J(){
  Game.square.s1  = new Square(0, 0);
  Game.square.s2 = new Square(0, VARS.scale*1);
  Game.square.s3  = new Square(0, VARS.scale*2);
  Game.square.s4  = new Square(-VARS.scale, VARS.scale*2);
  Game.square.shape = "J";
}
function S(){
  Game.square.s1  = new Square(0, 0);
  Game.square.s2 = new Square(VARS.scale, 0);
  Game.square.s3  = new Square(0, VARS.scale);
  Game.square.s4  = new Square(-VARS.scale, VARS.scale);
  Game.square.shape = "S";
}
