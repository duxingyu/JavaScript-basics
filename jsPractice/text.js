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
