function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

// return array-like object
multiply();
multiply(1);
multiply(1, 2);
multiply(1, 2, 3);

function sum() {
  var res = 0;

  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

function arrayLikeSum() {
  if (!arguments.length) return 0;

  // arguments 객체를 배열로 변환
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function(pre, cur) {
    return pre + cur;
  });
}

// ES6
const es6Sum = (...args) => {
  if (!args.length) return 0;
  return args.reduce((pre, cur) => pre + cur);
};

console.log(arrayLikeSum(1, 2, 3, 4, 5));
console.log(es6Sum(1, 2, 3, 4, 5));
