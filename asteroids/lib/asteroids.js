// require soemthing for bundle
// game.js?
// view.js?
// document.addEventListener("DOMContentLoaded", () => {
//     const canvasEl = document.getElementById("canvas");
// });

const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

const Util = require('./util.js');
window.Util = Util;

const Asteroid = require('./asteroid.js');
window.Asteroid = Asteroid;

const Game = require('./game.js');
window.Game = Game;
