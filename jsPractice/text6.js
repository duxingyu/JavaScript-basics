//   EvalError
try {
  // new eval();
  // eval = foo;
} catch (error) {
  console.log(error.message);
}

// RangeError
try {
  var item1 = new Array(-12);
} catch (error) {
  console.log(error.message);
}

// ReferenceError
try {
  var obj = x;
} catch (error) {
  console.log(error.message);
}

// SyntaxError
try {
  eval('a' + 'b');    // ++
}catch (error) {
  console.log(error.message);
}
// throw new Error('Something bad happend');
console.error(11);
console.info(22);
console.warn(33);