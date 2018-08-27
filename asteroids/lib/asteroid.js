const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

const Util = require('./util.js');
window.Util = Util;


function Asteroid (pos) {
  // debugger
  const vel = Util.randomVec(10);
  const color = 'purple';
  const radius = 25;
  MovingObject.call(this, pos, vel, radius, color);
}
Util.inherits(Asteroid, MovingObject);

const asty = new Asteroid([10,10]);
const asty2 = new Asteroid([20,20]);


module.exports = Asteroid;
