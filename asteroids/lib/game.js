const Asteroid = require('./asteroid.js');
window.Asteroid = Asteroid;

const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");

function Game(dimX, dimY, numAsteroids) {
  this.dimX = dimX;
  this.dimY = dimY;
  this.numAsteroids = numAsteroids;
  this.asteroids = [];
  for (let i = 0; i < numAsteroids; i++) {
    this.addAsteroids();
  }
  this.draw(ctx);
}

Game.prototype.draw = function(ctx) {

  ctx.clearRect(0, 0, 800, 600);
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(ctx) {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
  this.draw(ctx);
};

Game.prototype.addAsteroids = function() {
  let newAsteroid = new Asteroid(this.randomPosition());
  this.asteroids.push(newAsteroid);
};

Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);
  return [x, y];
};

module.exports = Game;
