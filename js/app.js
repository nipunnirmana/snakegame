var options = {
  gameCanvasID : 'game', // Game canvas ID *
  gH : 500, // Game Height
  gW : 500, // Gamw Width
  bW : 20, // Box Height
  bH : 20, // Box Width
  xPos : 0, // Starting x Position
  yPos : 0, // Starting y Position
  speed : 100 , // Speed in ms
  ctx : "", // Context of canavas leave blank
  flowDirection : "" // Flow interval leave blank
};

function initGame() {
  var game = document.getElementById(options.gameCanvasID);
  options.ctx = game.getContext("2d");
  game.height = options.gH;
  game.width = options.gW;
  moveBox();
  flow(39);
}

function moveBox(direction) { // Move box in given direction

  options.ctx.clearRect(0, 0, options.gW, options.gH);
  if (direction === 37) (options.xPos-options.bH < 0) ? options.xPos = options.gW-options.bW : options.xPos = options.xPos-options.bW ; // LEFT
  if (direction === 38) (options.yPos-options.bW < 0) ? options.yPos = options.gH-options.bH : options.yPos = options.yPos-options.bH ; // UP
  if (direction === 39) (options.xPos+options.bH > options.gW-options.bW) ? options.xPos = 0 : options.xPos = options.xPos+options.bW; // RIGHT
  if (direction === 40) (options.yPos+options.bH > options.gH-options.bH) ? options.yPos = 0 : options.yPos = options.yPos+options.bH ; // DOWN

  options.ctx.clearRect(0, 0, options.gW, options.gH);
  options.ctx.fillRect(options.xPos,options.yPos,options.bW,options.bH);

}

function flow(code) { // Move box until user changes box direction
  clearInterval(options.flowDirection);
  options.flowDirection = setInterval(function() {moveBox(code);},options.speed);
}


document.addEventListener('keydown',function (e) { // Bind keys
  moveBox(e.keyCode);
  flow(e.keyCode);
});

initGame();
