/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nwindow.Util = Util;\n\n\nfunction Asteroid (pos) {\n  // debugger\n  const vel = Util.randomVec(10);\n  const color = 'purple';\n  const radius = 25;\n  MovingObject.call(this, pos, vel, radius, color);\n}\nUtil.inherits(Asteroid, MovingObject);\n\nconst asty = new Asteroid([10,10]);\nconst asty2 = new Asteroid([20,20]);\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// require soemthing for bundle\n// game.js?\n// view.js?\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvasEl = document.getElementById(\"canvas\");\n// });\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nwindow.Util = Util;\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nwindow.Game = Game;\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\nconst canvasEl = document.getElementById(\"canvas\");\nconst ctx = canvasEl.getContext(\"2d\");\n\nfunction Game(dimX, dimY, numAsteroids) {\n  this.dimX = dimX;\n  this.dimY = dimY;\n  this.numAsteroids = numAsteroids;\n  this.asteroids = [];\n  for (let i = 0; i < numAsteroids; i++) {\n    this.addAsteroids();\n  }\n  this.draw(ctx);\n}\n\nGame.prototype.draw = function(ctx) {\n\n  ctx.clearRect(0, 0, 800, 600);\n  for (var i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function(ctx) {\n  for (var i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n  this.draw(ctx);\n};\n\nGame.prototype.addAsteroids = function() {\n  let newAsteroid = new Asteroid(this.randomPosition());\n  this.asteroids.push(newAsteroid);\n};\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * 500);\n  let y = Math.floor(Math.random() * 500);\n  return [x, y];\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("  function MovingObject (pos, vel, radius, color) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n  }\n\n  MovingObject.prototype.draw = function(ctx) {\n\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n\n    ctx.fill();\n  };\n\n  MovingObject.prototype.move = function() {\n    this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])];\n  };\n\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n    scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\n\nUtil.inherits = function(childClass, parentClass) {\n  childClass.prototype = Object.create(parentClass.prototype);\n  childClass.prototype.constructor = childClass;\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });