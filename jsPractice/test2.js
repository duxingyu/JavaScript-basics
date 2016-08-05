var aDiv =  document.getElementsByTagName('div');

aDiv[0].addEventListener('click', function () {
  alert(1);
}, false);
aDiv[1].addEventListener('click', function () {
  alert(2);
}, false);
aDiv[2].addEventListener('click', function () {
  alert(3);
}, false);
aDiv[0].addEventListener('click', function () {
  alert(11);
}, true);
aDiv[1].addEventListener('click', function () {
  alert(22);
}, true);
aDiv[2].addEventListener('click', function () {
  alert(33);
}, true);
/*
aDiv[2].addEventListener('click', function () {
  event.stopPropagation();
},false);
aDiv[1].addEventListener('click', function () {
  event.stopImmediatePropagation();
});
aDiv[1].addEventListener('click', function () {
  alert('aa');
});*/
function hello () {
  console.log("hello");
}
/*
aDiv[3].addEventListener('click', hello, false);
var event = new Event('click');
aDiv[3].dispatchEvent(event);
*/
var aInput = document.getElementsByTagName('input');
aInput[0].addEventListener('click', function (event) {
  this.value = event.detail;
});
var oUl = document.getElementById('list');
oUl.addEventListener('mouseover', function (event) {
  event.target.style.background = 'purple';
  setTimeout(function () {
    event.target.style.background = '';
  }, 500);
}, false);
// aDiv[3].attachEvent('onclick', function (event) {
//   alert(event.type);
// });      // 可行

aDiv[4].addEventListener('mouseover', function (event) {
  event.target.style.background = '#f60';
  console.log(event.relatedTarget);
  setTimeout(function () {
    event.target.style.background = '';
  }, 500);
},false);
window.addEventListener('mousewheel', function(event) {
  if (event.wheelDelta > 0) {
    aInput[1].value = '前';
  } else {
    aInput[1].value = '后';
  }
});