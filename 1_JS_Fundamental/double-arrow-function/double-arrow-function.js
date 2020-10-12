const arrowFunc = something => something2 => {
  return something3;
}

// Both are same

const generalFunc = function (something) {
  return function (something2) {
    return something3;
  }
}

// Mostly used store concept