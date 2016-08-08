"use strict";
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
/*
var person = {
  name: 'aaa',
  age: 22
};
console.log(person);
var jsonText = JSON.stringify(person);
console.log(jsonText);
var json = JSON.parse(jsonText);
console.log(json);
console.log(json.name);
*/
var book = {
  "title": "Profefessional JavaScript",
  "author": [
    "Nicholas C. Zakas",
    "duxy"
  ],
  "edition": 3,
  "year": 2011
};
var jsonArr = JSON.stringify(book, ["title", "edition"]);
console.log(jsonArr);
var jsonFun = JSON.stringify(book, function (key, value) {
  switch (key) {
    case "author":
      return value.join(",");
    case "year":
      return 5000;
    case "edition":
      return undefined;
    default:
      return value;
  }
});
console.log(jsonFun);
// console.log(JSON.stringify(book, null, 4));
// console.log(JSON.stringify(book, null, "--"));
var book1 = {
  "title": "Profefessional JavaScript",
  "author": [
    "Nicholas C. Zakas",
    "duxy"
  ],
  "edition": 3,
  "year": 2011,
  toJSON: function () {
    return this.title;
  }
};
console.log(JSON.stringify(book1));
var book2 = {
  // "title": "Profefessional JavaScript",
  // "author": [
  //   "Nicholas C. Zakas",
  //   "duxy"
  // ],
  // "edition": 3,
  // "year": 2011,
  "releaseDate": new Date(2011, 11,1)
};
console.log(book2);
var jsonText = JSON.stringify(book2);
console.log(jsonText);
var book2Copy = JSON.parse(jsonText, function (key, value) {
  if (key == "releaseDate") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(book2Copy);