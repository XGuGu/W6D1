// Function.prototype.inherits = function (Parent) {
//   function Surrogate() {}
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };
//
//
// function MovingObject (name) {
//   this.name = name;
// }
//
// MovingObject.prototype.move = function () {
//   console.log(`${this.name} moves!!!`);
// };
//
// Ship.inherits(MovingObject);
// function Ship (name) {
//   MovingObject.call(this, name);
// }
//
// Asteroid.inherits(MovingObject);
// function Asteroid (name) {
//   MovingObject.call(this, name);
// }


Function.prototype.inherits = function (Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};


class MovingObject {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} moves!!!`);
  }
}

class Ship extends MovingObject {
  constructor(name) {
    super(name);
  }
}

class Asteroid extends MovingObject {
  constructor(name) {
    super(name);
  }
}
