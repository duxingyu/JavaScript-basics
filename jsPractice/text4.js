var username = document.forms["username"];
var password = document.forms[1];
var submit = document.getElementsByTagName('button');
submit[0].addEventListener('click', function (event) {
  event.preventDefault();
  alert(1);
},false);
