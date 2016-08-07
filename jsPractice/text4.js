var form = document.forms[0];
// var sub = form.elements["submit"];
// sub.addEventListener('click', function (event) {
//   event.preventDefault();
//   alert(1);
// },false);
form.addEventListener('submit', function (event) {
  var sub = event.target.elements["submit"];
  event.preventDefault();
  alert(1);
  sub.disabled = true;
}, false);
var boy = form.elements['sex'][0];
boy.addEventListener('click', function() {
  console.log('boy');
},false);
window.onload = function () {
  var element = form.elements[1];
  if (element.autofocus !== true) {
    element.focus();
  }
};
form.elements[1].addEventListener('focus', function () {this.style.background = "yellow";}, false);
form.elements[1].addEventListener('blur', function () {this.style.background = "";}, false);
form.elements[1].addEventListener('change', function () {console.log('changed')},false);
var oDiv = document.getElementsByTagName('div')[0];
oDiv.tabIndex = -1;
oDiv.focus();
var textarea = document.getElementsByTagName('textarea')[0];
textarea.addEventListener('focus', function () {
  // this.setSelectionRange(0,4);
  // this.select();
},false);
textarea.addEventListener('select', function () {
  setTimeout(function() {
    form.elements[8].value = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    console.log(textarea.selectionEnd - textarea.selectionStart);
  },2000);
}, false);
textarea.addEventListener('contextmenu', function (event) {
  event.preventDefault();
}, false);
textarea.addEventListener('copy', function (event) {
  event.preventDefault();
},false);
textarea.addEventListener('cut', function (event) {
  event.preventDefault();
},false);
var form2 = document.forms[1];
var tel = form2.elements[0];
tel.addEventListener('focus', function () {
  this.value = '';
}, false);
tel.addEventListener('keypress', function () {
  
},false);

var select = document.getElementsByTagName('select')[0];
var new1 = new Option('DDD', 'DDD');
select.appendChild(new1);
var new2 = new Option('EEE');
select.add(new2, undefined);
// select.removeChild(select.options[0]);
// select.remove(0);
// select.options[0] = null;
function clearSelectbox (selectbox) {
  for (var i = 0, len = selectbox.options.length; i < len;i++) {
    selectbox.remove(0);
  }
}
form2.elements[2].onclick = function () {clearSelectbox(select);};

var editer = frames['richedit'];
window.addEventListener('load', function() {
  editer.document.designMode = 'on';
},false);

var hid = document.getElementById('hid');
var move = document.getElementById('move');
move.onclick = function () {
  hid.value = editer.document.body.innerHMTL;
  alert(editer.document.body.innerHMTL);
};