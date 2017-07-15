var gameCanvasID = 'game';
var gH = 500;
var gW = 500;
var bW = 30;
var bH = 30;
var xPos = 0;
var yPos = 0;
var ctx;

function initGame() {
  var game = document.getElementById(gameCanvasID);
  ctx = game.getContext("2d");
  game.height = gH;
  game.width = gW;
  moveBox(xPos,yPos);
}

function moveBox(x,y) {
  xPos = x ;
  yPos = y;
  ctx.clearRect(0, 0, gW, gH);
  ctx.fillRect(x,y,bW,bH);
}


document.addEventListener('keydown',function (e) {
  switch (e.keyCode) {
    case 37: // LEFT
    (xPos-bH < 0) ? moveBox(gW-bW,yPos) : moveBox(xPos-bW,yPos) ;
    break;
    case 38: // UP
    (yPos-bW < 0) ? moveBox(xPos,gH-bH) : moveBox(xPos,yPos-bH) ;
    break;
    case 39: // RIGHT
    (xPos+bH > gW-bW) ? moveBox(0,yPos) : moveBox(xPos+bW,yPos);
    break;
    case 40: // DOWN
    (yPos+bH > gH-bH) ? moveBox(xPos,0) : moveBox(xPos,yPos+bH) ;
    break;
  }

});

initGame();
