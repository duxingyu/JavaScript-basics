var xhr = new XMLHttpRequest();

// xhr.open("GET", "example.txt", true);
// xhr.send();

// if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//   alert("succeed");
// }

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(1);
    } else {
      alert(2);
    }
  }
};

var url = "example.json";
url = addURLParam(url, "name", "duxy");

xhr.open("GET", url, true);
// xhr.overrideMimeType();
xhr.send();
alert(xhr.getAllResponseHeaders());

function addURLParam (url, name, value) {
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}

var data = new FormData();
data.append("name", "duxy");

var data1 = new FormData(document.forms[0]);

xhr.timeout = 1000;
xhr.ontimeout = function () {
  alert("Request did not return in a second");
}