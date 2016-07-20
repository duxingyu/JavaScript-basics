"use strict";
var aaa = "javascript";
// label语句
/*start: for (var i = 0; i < 10; i++) {
  alert(i);
  if (i == 4) {
    break start;
  }
}*/
function doAdd(num1,num2) {
  arguments[1] = 10;
  alert(num1 + num2);
}
doAdd(1,2);