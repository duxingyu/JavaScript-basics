"use strict";
var a = [1,2,3,4,5];
// alert(a.indexOf(2));
/*
alert(a.forEach(function (item, index, array){
  array.sort(function (a,b){return b-a;});
}));*/
// alert(a);
function doSomething () {
  for (var i = 0; i < 1000000; i++) {
    var sum = 0;
    sum += i;
  }
}
var start = +new Date() || Date.now();
doSomething();
var stop = +new Date() || Date.now();
// alert(stop - start);
var text = 'cat,bat,sat,fat';
var pattern = /.at/g;
var match = pattern.exec(text);
// alert(match.index);
// alert(match.input);
/*var a1 = function (a, b) {
  return a + b;
};
var b1 = a1;
alert(b1(1,1));
a1 = null;
alert(b1(2,3));
alert(a1 instanceof Function);*/
///////////////////////////////
/*
function outer() {
  inner();
}
function inner() {
  alert(inner.caller);
}
outer();
function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);  // === * factorial(num - 1)
    }
}
alert(factorial(4));
*/

function sum(num1, num2) {
  return num1 + num2;
}
function callSum1 (num1, num2) {
  return sum.apply(this, arguments);
}
function callSum2 (num1, num2) {
  return sum.apply(this, [num1, num2]);
}
function callSum (num1, num2) {
  return sum.call(this, num1, num2);
}
// alert(callSum1(10,20));
// alert(callSum2(10,20));
// alert(callSum(10,20));
// 
// 
/*
window.color = 'red';
var o = {
  color : 'blue'
};
function sayColor() {
  alert(this.color);
}
sayColor();

sayColor.call(this);
sayColor.call(window);
sayColor.call(o);
var objectSayColor = sayColor.bind(o);
objectSayColor();       // blue
*/
/*
var s1 = new String('some text');
var s2 = s1.substring(2);
s1.color = 'red';
alert(s1.color);
alert(typeof s1);
alert(s1 instanceof String);
s1 = null;
*/
/*
var obj = new Object('some text');
alert(obj instanceof String);   //true

alert(typeof Number('25'));          // number
alert(typeof (new Number('25')));     // object
*/
/*
var num1 = 10;
alert(num1.toFixed(2));      // 10.00
var num2 = 10.005;
alert(num2.toFixed(2));     // 10.01
alert(num2.toExponential(1)); //1.0e+1

var num = 99;
alert(num.toPrecision(1));
alert(num.toPrecision(2));
alert(num.toPrecision(3));
*/
/*
var text = "cat,bat,sat,fat";
var pattern1 = /.at/g;
var mat = text.match(pattern1);
alert(mat);
alert(text.search('at'));
alert(text.replace(/at/g,'ttt'));
*/
/*
var person = {};
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'andy'
});
alert(person.name);
Object.defineProperty(person, 'name', {
  configurable: true
})
person.name = 'duxy';
alert(person.name);

*//*
var book = {
  _year: 2004,
  edition: 1
};

book.__defineGetter__('year', function() {
  return this._year;
});
book.__defineSetter__('year', function(newValue) {
  if (newValue > 2004) {
    this._year = newValue;
    this.edition += newValue - 2004;
  }
});
book.year = 2005;
alert(book.edition);
*/
/*
Object.defineProperty(book, 'year', {
  get: function() {
    return this._year;
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});
book.year = 2009;
alert(book.edition);
*/
/*
var notebook = {};
Object.defineProperties(notebook, {
  _year: {
    writable: true,
    value: 2004
  },
  edition: {
    writable: true,
    value: 1
  },
  year: {
    get: function() {
      return this._year;
    }
  }
});
var descriptor = Object.getOwnPropertyDescriptor(notebook, '_year');
alert(descriptor.value);
alert(descriptor.configurable); // false
*/
/*
function createPerson(name, age, job) { //工厂模式
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    alert(this.name);
  };
  return o;
}
var person1 = createPerson('duxy', 22, 'student');
person1.sayName();
*/
/*
function Person(name, age, job) {  // 构造函数模式
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    alert(this.name);
  };
}
// 当做构造函数使用
var person = new Person('duxy', 22, 'student');
person.sayName();
// 作为普通函数调用
Person("duxy", 22, 'student');  // 添加到window
window.sayName();
// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, 'duxy', 22, 'student');
o.sayName();

*/
/*
function Person() {}
Person.prototype.name = 'duxy';
Person.prototype.age = 22;
Person.prototype.job = 'student';
Person.prototype.sayName = function() {
  alert(this.name);
};
var person1 = new Person();
person1.sayName();
var person2 = new Person();
person2.sayName();
alert(person1.sayName == person2.sayName);
*/

