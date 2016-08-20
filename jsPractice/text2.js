"use strict";
function abc () {
  alert(1);
}
//alert(abc.name);
var factorial = (function f(num){
  if (num <=1) {
    return 1;
  }else {
    return num * f(num - 1);
  }
});
var anotherFactorial = factorial;
factorial= null;
// alert(anotherFactorial(4));

function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    alert(i);
  }
  alert(i);
}
/*
(function () {
  for (var i = 0; i < 5; i++) {
    alert(i);
  }
})();
*/
// alert(i);

function MyObject () {

  // 私有变量和私有函数
  var privateVariable = 10;

  function privateFunction () {
    return false;
  }
  // 特权方法
  this.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };
}
var person = new MyObject();
person.publicMethod();

(function() {
  // 私有变量和私有函数
  var privateVariable = 10;

  function privateFunction () {
    return false;
  }  

  // 构造函数
  var MyObject = function(){};
  // 公有/特权方法
  MyObject.prototype.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };
})();
var person1 = new MyObject();
person1.publicMethod();

window.onload = function () {
  var script = document.createElement('script');
  script.onload = function () {
    alert('yes');
  };
  script.src = 'text3.js';
  document.body.appendChild(script);
};