function sum(args) {
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

function sum(...args) {
  let total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

Function.prototype.myBind = function (ctx, ...bindArgs) {
  // const that = this;
  // const bindArgs = Array.from(arguments).slice(1);
  return (...args) => {
    this.apply(ctx, bindArgs.concat(args));
  };
};

function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function (numArgs) {
  const array = [];
  const ctx = this;
  return function _curried(arg) {
    array.push(arg);
    if (array.length === numArgs) {
      return ctx.apply(null, array);
    } else {
      return _curried;
    }
  };
};
