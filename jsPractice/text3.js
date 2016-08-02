"use strict";
/*var age = 10;
window.color = 'red';
delete window.color;
alert(color);
*/
// alert(window.agee);

// confirm('You know nothing!') ? alert('囧') : alert('No!');

function showMessage() {
  alert('show time!');
}
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
/*
btn1.onclick = function () {
  this.value = 'DOM0级事件处理程序';
};
btn1.addEventListener('click', function(){
  alert('DOM2级事件处理程序');
}, false);
btn1.addEventListener('click', function(){
  alert('DOM2级事件处理程序');
}, true);

btn2.attachEvent('onclick', function () {
  alert(this === window);
});
*/

function addEvents (element, event, fun) {
  if (element.addEventListener) {
    element.addEventListener(event, fun, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, fun);
  }
}
function removeEvents (element, event, fun) {
  if (element.removeEventListener) {
    element.removeEventListener(event, fun, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + event, fun);
  }
}
addEvents(btn1, 'click', success);
function success () {
  alert('success');
}

/*
var isSupported2 = document.implementation.hasFeature('HTMLEvents', '2.0');
var isSupported3 = document.implementation.hasFeature('UIEvent', '3.0');
alert(isSupported2);
alert(isSupported3);
*/
// alert(document.implementation.hasFeature('FocusEvent', '3.0'));

var btn = document.getElementsByTagName('input')[5];
btn.onmousemove = function (event) {
  var event = event || window.event;
  btn.value = event.clientX + ',' + event.clientY + '===' + event.screenX + ',' + event.screenY;
};

btn2.onclick = function (event) {
  var event = event || window.event;
  if (event.ctrlKey) {
    this.style.background = 'red';
  }
};