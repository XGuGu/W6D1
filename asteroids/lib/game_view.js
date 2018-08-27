const Game = require('./game.js');
window.Game = Game;

const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");

function GameView() {
  this.game = new Game(100, 100, 10);
  // this.ctx = ctx;
}

GameView.prototype.start = function(ctx) {
  setInterval(this.game.moveObjects(ctx), 3000);
};
