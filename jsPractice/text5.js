var aDiv = document.getElementsByTagName('div');
var aInput = document.getElementsByTagName('input');
aDiv[1].addEventListener('dragover', function (event) {
  event.preventDefault();
  event.dataTransfer.setData('text', 'some text');
  var text = event.dataTransfer.getData('text');
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
},false);
aDiv[1].addEventListener('dragenter', function (event) {
  event.preventDefault();
},false);
aDiv[0].addEventListener('dragover', function (event) {
  event.preventDefault();
},false);
aDiv[0].addEventListener('dragenter', function (event) {
  event.preventDefault();
},false);
