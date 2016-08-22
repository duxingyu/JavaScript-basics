// function f(x,y){
//   console.log(x+y);
// }

// f.call(this,1,1) // 2
// f.apply(f,[1,1]) // 2
var oDiv1 = document.getElementById('div1');
var oDiv2 = document.getElementById('div2');
console.log(oDiv1.ownerDocument);
console.log(oDiv1.nextSibling);
console.log(oDiv1.previousSibling);
console.log(oDiv1.parentNode);
console.log(typeof oDiv1.parentElement);
console.log(oDiv1.textContent);
oDiv2.textContent = '<p>I Love You！</p>';
console.log(document.querySelector('#div1').childNodes);
console.log(oDiv1.parentNode === oDiv1.parentElement);
document.body.contains(oDiv1.parentNode);
var oDiv3 = document.getElementById('div3');
var aInp = document.getElementsByTagName('input');
aInp[1].onclick = function () {
  oDiv3.innerHTML = aInp[0].value;
};