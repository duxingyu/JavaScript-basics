var oDiv = document.getElementsByTagName('div')[0];
if (oDiv.nodeType == 1) {
  console.log(oDiv.nodeValue);
}
console.log(oDiv.childNodes.item(1).innerHTML);
console.log(oDiv.childNodes[1].nextSibling.innerHTML);

var oOl = document.getElementsByTagName('ol')[0];
var aLi = oOl.getElementsByTagName('li');

oOl.replaceChild(aLi[3],aLi[0]);
oOl.removeChild(aLi[aLi.length-1]);
var oo = oDiv.cloneNode(true);
var oLi = document.createElement('li');
oLi.appendChild(oo);
oOl.insertBefore(oLi,aLi[0]);
console.log(document.nodeName);
// oDiv["data-indec"] = 1;
// console.log(oDiv["data-indec"]);

console.log(oDiv.style);
console.log(oDiv.getAttribute("style"));


var oDiv1 = document.querySelector("#div1");
oDiv1.addEventListener('click', function() {
  console.log(1);
},false);
oDiv1.scrollIntoView(false);
var oDiv2 = oDiv1.querySelector('.cla');
console.log(oDiv2.className);
var aaa = oDiv2.childElementCount;
console.log(aaa);

var oInp = document.getElementsByTagName('input')[0];
oInp.focus();
console.log(document.activeElement);

