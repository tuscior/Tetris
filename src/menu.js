let space;
let menuAnimation;
function drawMenu(){
	space = true;
	const image = document.querySelector('#menu');
	const image2 = document.querySelector('#menu2');
	Game.ctx.beginPath();
	Game.ctx.fillStyle = "black";
	Game.ctx.font = "33px Gamefont";
	Game.ctx.fillText('Tetris', 98, 100);
	Game.ctx.font = "17px Gamefont";
	Game.ctx.fillText('Press space to start', 35,200);
	let image2H = 437;
	let count = 0;
	menuAnimation = setInterval(() => {
		count += 1;
		Game.ctx.fillStyle = 'white';
		Game.ctx.fillRect(330, image2H-23, 400, image2H);
		Game.ctx.drawImage(image2, 330, image2H, 70, 48);
		image2H += 23;
		count > 5 ? clearInterval(menuAnimation) : count;
	}, 1000);
	Game.ctx.drawImage(image, 0,200,330,400);	
	if (space){
		window.addEventListener('keydown', function(){
		startGame(event);
	});
}
}
function drawEnd(){
setTimeout(() => {
	Game.ctx.fillStyle = 'rgba(255,255,255,0.44)';
	Game.ctx.fillRect(0,0,400,600);
	Game.ctx.font = "27px Gamefont";
	Game.ctx.fillStyle = "black";
	Game.ctx.fillText('Game over', 90, 300);
}, 300);
setTimeout(() => {
for(i=0; i<24; i++){
for(j=0; j<16; j++){
	map[i][j] = 0;
	}
}	
Game.ctx.fillStyle = 'white';	
Game.ctx.fillRect(0,0,400,600);	
drawMenu();	
}, 3000);
}
function startGame(event){
if(event.key === " " && space){
space = false;
clearInterval(menuAnimation);	
Game.square = new Square(0, 0);
I();
window.addEventListener("keyup",Game.square.moveup,false);
window.addEventListener("keydown",Game.square.movedown,false);
Game.animationLoop();
}
}