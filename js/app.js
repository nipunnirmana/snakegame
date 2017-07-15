var gameCanvasID = 'game';
var gH = 500;
var gW = 500;
var bW = 20;
var bH = 20;
var xPos = 0;
var yPos = 0;
var ctx , flowDirection;
var speed = 100; // in ms

function initGame() {
  var game = document.getElementById(gameCanvasID);
  ctx = game.getContext("2d");
  game.height = gH;
  game.width = gW;
  moveBox();
  flow(39);
}

function moveBox(direction) {

  ctx.clearRect(0, 0, gW, gH);
  if (direction === 37) (xPos-bH < 0) ? xPos = gW-bW : xPos = xPos-bW ; // LEFT
  if (direction === 38) (yPos-bW < 0) ? yPos = gH-bH : yPos = yPos-bH ; // UP
  if (direction === 39) (xPos+bH > gW-bW) ? xPos = 0 : xPos = xPos+bW; // RIGHT
  if (direction === 40) (yPos+bH > gH-bH) ? yPos = 0 : yPos = yPos+bH ; // DOWN

  ctx.clearRect(0, 0, gW, gH);
  ctx.fillRect(xPos,yPos,bW,bH);

}

function flow(code) {
  clearInterval(flowDirection);

  flowDirection = setInterval(function functionName() {
    moveBox(code);
  },speed);
}


document.addEventListener('keydown',function (e) {
  moveBox(e.keyCode);
  flow(e.keyCode);
});

initGame();
