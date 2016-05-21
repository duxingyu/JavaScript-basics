# JavaScript基础语法知识总结

标签（空格分隔）： javascript

---

## 0、热身部分

#### **1、希望把某个元素移除你的视线**
  1. `display:none;`	**显示为无**
  2. `visibility:hidden;`	**隐藏**
  3. `width \ height`
  4. `opacity`
  5. `left \ top`
  6. 拿一个白色DIV盖住它
  7. `margin`负值  

#### **2、鼠标事件**
`onclick`，`onmouseover`，`onmouseout`，`onmousedown`，`onmouseup`
`onmousemove` **（就像是鼠标抚摸一样的事件）**  

#### **3、onload**
`window.onload` = 事情。`img.onload`，`body.onload`   

## 1、基础

#### **1、JS的属性操作**
   1.  HTML的属性操作：读、写
    读操作：获取、找到 `元素.属性名`
    写操作：“添加？”、替换、修改 `元素.属性名 = 新的值`  
#### **2、相对路径不能作为判断条件：**
   1. 所有的相对路径地址
	`img src:`	`href:` 
   2. 颜色值：`color: red` 	`#f00` `rgb()` `rgba()`    
#### **3、Float兼容问题**
  1. **IE（styleFloat）** `oDiv.style.styleFloat = 'right';`
  2. **非IE（cssFloat）** `oDiv.style.cssFloat = 'left';`

## 2、for应用

#### **1、获取元素的方法**
    1.  `document.getElementById('oP');` //**静态方法**
    2.  `document.getElementsByTagName('li');` `.length`//**动态方法**
#### **2、性能问题1**
```javascript
var str = ''; 
    for( var i=0; i<6000; i++ ){
    // document.body.innerHTML += '<input type="button" value="按钮" />';
    str += '<input type="button" value="按钮" />';
}
```
#### **3、cssText说明**
```javascript
oDiv.style.cssText = ' width:200px;height:200px; ';
oDiv.style.cssText = 'width:100px;';
//改变行间样式，下面的会将上面的替换为width:100px;height为无。
```
#### **4、按钮禁用** 
//**实际中三种均有使用**
 1. **找按钮麻烦：**//用户体验不好  
        1. `oBtn.disable = true;`  
        2. `oBtn.display = 'none';`
        3. `oBtn.onclick = null;`
 2. **先清空，再生成** //性能不太好
    `oUl.innerHTML = '';`
 3. **判断**
```javascript
var onOff = true;
oBtn.onclick = function (){		
    if( onOff ) {			
	// onOff = false;				ok			
	    for( var i=0; i<arr.length; i++ ){
	        oUl.innerHTML += '<li>' + arr[i]+'</li>';
            }
	// onOff = false;				ok
	}
    onOff = false;
};
```
#### **5、this的使用**
 this: 这个，指的是调用当前方法（函数）的那个对象
```javascript
fn1();			//this => window
oDiv.onclick = fn1;	//this => oDiv
oDiv.onclick = function (){
	fn1(this);		//fn1() 里的this => window
};
<div onclick="fn1();"></div>     
//fn1()里的 this 指的是 window
 alert( this );		// object window
// window 是 JS “老大”
alert(this) === window.alert( this );

//this的应用
var that = null;	// 空
aBtn[0].onclick = function (){
	// this.style.background = 'yellow';		
	that = this;		//this ==>aBtn[0]	
	fn1();
};
function fn1(){that.style.background = 'yellow';}
aBtn[0].onclick = fn2;
fn2(); //this ==>window
function fn2(){this.style.background = 'red';}
```
## 3、索引、自定义属性
#### **1、this、this.index**
想建立“匹配”“对应”关系，就用索引值
```javasciript
for(var i = 0;i < aBtn.length;i ++){
    aBtn[i].index = i;
    aBtn[i].onclick = function(){
        alert(i);   //  aBtn.length
        alert(this.index);   // i
    }
}
```

## 4、数据类型及判断
#### **1、JS的数据类型**
1. ECMAScript：标准、核心
2. JS中的数据类型：`number(NaN)`、`string`、`boolean`、`function`、`object(obj、[arr]、{json}、null)`、`undefined`
3. `typeof` 判断数据类型
4. `undefined` 一般表示写的东西出问题了~

#### **2、JS中的数据类型转换(显式)**
`Namber()`、`parseInt()`、`parseFloat()`
```javascript
var a = '+100';             //+ 为正，- 为负 '-100'
alert( a+100 );		        // '100100'
alert( Number(a) );			// 100  -100
var a1 = '    ';
alert( Number(a1) );		// 0
var a2 = true;
alert( Number(a2) );		// true-1  false-0
var a3 = [ 1 ];             //[],[1,2]
alert( Number(a3) );		// 1,0,NaN
var a4 = null;
alert( Number(a4) );		// 0
{json},fun,undefined,'12aa'  ==> NaN
paresInt('123px') ==> 123
```
#### **3、JS中的数据类型转换(隐式)**
1. `+`			200 + '3'		变成字符串
2. `-`,`*`,`/`, `%`			'200' - 3     变成数字
3. `++`, `--`						变成数字
4. `>`, `<` 			    编码后比较返回boolean值
`'100'>'9' ==>false`
`'100'>9 ==>true`//两端为string，number。转为number后比较
5. `!`	取反	    把右边的数据类型转成boolean值
6. `2 == '2' ==>true`
`2 === '2' ==>false`
#### **4、NaN**
>1.  NaN：not a number 不是个 数字 的 数字类型
2. 一旦写程序中出现NaN: 肯定进行了非法的运算操作 
3. NaN为false 
4. NaN 与自己都不相等！！
#### **5、isNaN()**　
isNaN()判断是否为NaN  //true false
将内容转为用Number()转换后作判断若为NaN则为`true`,为数字则为`false`

## 5、函数传参
> 函数传递参数：参数 = JS的数据类型
**重用代码：**
	1. 尽量保证 HTML 代码结构一致，可以通过父级选取子元素
	2. 把核心主程序实现，用函数包起来
	3. 把每组里不同的值找出来，通过传参实现

## 6、JS作用域
    作用域：
    域：空间、范围、区域……
    作用：读、写
    script		全局变量、全局函数
		自上而下
	函数
		由里到外
    {}
	浏览器：
	“JS解析器”
	1）“找一些东西”	：var  function 参数
    	1.  所有的变量，在正式运行代码之前，都提前赋了一个值：undefined
	    fn1 = function fn1(){ alert(2); }
	    2. 所有的函数，在正式运行代码之前，都是整个函数块
		JS 的预解析
		遇到重名的：只留一个
		变量和函数重名了，就只留下函数
	2）逐行解读代码：
		表达式：= + - * / % ++ -- ! 参数……
		表达式可以修改预解析的值！
## 7、运算符 流程控制
#### **1、真、假问题**
> 真假的问题：数据类型-数字（NaN）、字符串、布尔、函数、对象（elem、[]、{}、null）、未定义
真：非0的数字、非空字符串、true、函数、能找到的元素、[]、{}
假：0、NaN、空字符串''、false、不能找到的元素、null、未定义

## 8、函数返回值等
#### **1、return返回值**
1. 函数名+括号：`fn1()`	==>  `return`后的内容
2. 所有函数默认返回值：未定义；
3. return 后面任何代码都不执行了；
4. 函数包含`return fun()`， `fn()`的返回值为该函数（包含注释）执行`fn()()`;
#### **2、arguments**
```javascript
// 当函数的参数个数无法确定的时候：用 arguments
// 实参的集合 [object Arguments] 含.length属性
alert( sum( 1,2,3 ) );				// 6
alert( sum( 1,2,3,4 ) );			// 10
function sum (){
	var n = 0;
	for( var i=0; i<arguments.length; i++ ){
		n += arguments[i];
	}
	return n;
}
```
```javascript
fn1( 1,2,3 );				// 实参——实际传递的参数
function fn1( a,b,c ){		// 形参——形式上，abc这些名代表123
function fn1(){
	// arguments => [ 1,2,3 ] —— 实参的集合
	alert( arguments );   //[object Arguments]
	alert( arguments.length );  //3
	alert( arguments[arguments.length-1] ); //实参3
}
```
#### **3、获取元素样式**
```javascript
function getStyle( obj, attr ){	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];}
//currentStyle:标准浏览器不兼容
//getComputedStyle:IE6、7不兼容
```
**特点：**
获取到的是计算机（浏览器）计算后的样式
1. `background: url() red ……`		复合样式（不要获取）
2. `backgroundColor`				单一样式（不要用来做判断）
3. 不要有空格
4. 不要获取未设置后的样式：不兼容
## 9、定时器函数封装实例
#### **1、定时器基础**
```javascript
定时器：时间概念
var timer = setInterval( 函数, 毫秒 );  //重复执行（发动机）
clearInterval( timer );					//清除
var timer = setTimeout( 函数, 毫秒 );	//执行一次（炸弹）
clearTimeout( timer );
for(var i=0; i<3; i++){ document.title = i; }   // 瞬间完成，没有时间根据
```
#### **2、qq延时菜单效果**
```javascript
<div id="qq"></div>
<div id="title"></div>

	qq.onmouseover = show;
	qq.onmouseout = hide;
	
	title.onmouseover = show;
	title.onmouseout = hide;
	
	function show(){
		clearInterval( timer );         //
		title.style.display = 'block';
	}
	function hide(){
		timer = setTimeout(function(){
			title.style.display = 'none';
		}, 200);
	}
```
#### **3、doMove函数**
```javascript
function doMove ( obj, attr, dir, target, endFn ) {
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	clearInterval( obj.timer );
	obj.timer = setInterval(function () {
		var speed = parseInt(getStyle( obj, attr )) + dir;	// 步长
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if ( speed == target ) {
			clearInterval( obj.timer );
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
		}
	}, 30);
}
```
#### **4、抖函数**
```javascript
function shake ( obj, attr,pos, endFn ) { 
	if ( obj.onOff ) return; // 1
        obj.onOff = true;
    //在函数结束之前阻止函数再次执行！！！！！
	var pos = parseInt( getStyle(obj, attr) );	
	var arr = [];			
	var num = 0;
	var timer = null;
		var t1 = null;
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn(); 
			obj.onOff = false;      // 2
		}
	}, 50);
}
```
## 10、日期对象
#### **1、系统时间**
```javascript
1. var myTime = new Date();
2. var iYear = myTime.getFullYear();
3. var iMonth = myTime.getMonth()+1;
4. var iDate = myTime.getDate();
5. var iWeek = myTime.getDay();//0~6 ==> 星期日~六
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
iWeek = arr[iWeek];
6. var iHours = myTime.getHours();
7. var iMin = myTime.getMinutes();
8. var iSec = myTime.getSeconds();
9. new Date().getTime();    //时间戳用于检测性能，cookie等
9. toTwo(iHours);
function toTwo ( n ) {return n < 10 ?  '0' + n : '' + n;}
```
#### **2、图片时间**
```javascript
var str = toTwo(iHours)+toTwo(iMin)+toTwo(iSec);
for ( var i=0; i<str.length; i++ ) {
	aImg[i].src = 'img/' + str.charAt(i) + '.JPG';
}
```
#### **3、倒计时**
```javascript
数字形式：new Date(2016,4,12,10,42,0); //4-->5月
字符串形式：var iNew = new Date('May 12,2016 10:42:0');//更合适
//January、February、March、April、May、June、
//July、August、September、October、November、December
var t =  Math.floor((iNew - iNow)/1000 ); //毫秒 ==> 秒
天：Math.floor(t/86400)
时：Math.floor(t%86400/3600)
分：Math.floor(t%86400%3600/60)
秒：t%60
str = Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+'时'+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';
```
##11、字符串方法
#### **1、总结**
```javascript
var str = '字符串';
1. str.length;
2. str.charAt(0); ==>'字'           //默认为0
3. str.charCodeAt(0); ==>23383      //默认为0
0~9  48~57      a~z	97~122      A~Z   65~90
4. String.fromCharCode(23383,31526); //字符（加密）
5. str.indexOf('字') ==>0           //-1 表示未找到
str.indexOf('字符',0)  ==>0
str.lastIndexOf('字')==>2           //从右往左找
6. str.substring(); str.slice();
7. str.toUpperCase();               //转为大写
   str.toLowCase();                 //转为小写
//将str中的字母转为大小写
8. str.split('',1);                 //分割为数组,第二个参数为分割后的个数
```
#### **2、数字检测函数**
```javascript
function detectNum ( str ) {
	var n = 0;
	for ( var i=0; i<str.length; i++ ) {
		n = str.charCodeAt(i);
		if ( n<48 || n>57 )return false;
	}
	return true;
}
```
#### **3、indexOf()**
```javascript
//找出所有str中的s(未找到返回-1)
var s = ' ';
for( ; str.indexOf( s, i ) != -1 ; ){
	alert( str.indexOf( s, i ) );
	i = str.indexOf( s, i ) + s.length;
}
```
#### **4、截取substring slice**
```javascript
var str = 'aabbbb';
str.substring(0,2);             //aa
atr.substring(3);               //bbb
str.substring(2,0);				
// 可以检测两个数，大的往后扔，小的往前扔
str.substring(-3, 2);			// -3 当成0处理
str.substring(2, -3);	
str.slice( 2, 0 );				// 不交换位置
str.slice( -4, -2 );			// 负数从后面倒着往前数~
```
#### **5、分割split()**
`str.split('');` ==>[字,符,串];
`str.split('').join('');` ==>'字符串'
`'/1/2/'.split('/')` ==>`[,1,2,]`;
`'/1/2/'.split('/').join('');`==>'12
## 12、数组方法
#### **1、json数据格式**
```javascript
//json{}无length属性，因此不能用for循环
var json = {'name':'duxy',arr:[1,2,3,4,5]};
json.name = 'duxy';     // === json['name']
json.arr[0] = 1;
//  遍历json中的属性名、属性值
for( var attr in json){                 
    alert(attr);                //attr 属性名:name,arr
    alert(json[attr]);          //json[attr] 属性值:'duxy','[1,2~~~]'
}
```
#### **2、数组细节**
```javascript
var arr = new Array();
['aa','bb','cc'].join();        //string = 'aa,bb,cc'
['aa','bb','cc'].join('');      //string = 'aabbcc'
快速清空数组方法：
1. arr.length = 0；             //对字符串不适用
2. arr =[];                     //效率较高
```
#### **3、数组的添加、删除方法**
```javascript
var arr = [1,2,3];
arr.push('abc'); // = 4     返回值为数组的长度
arr.unshift( 0 ); // = 5    同上(IE6、7返回undefined)
arr.pop();      //删除最后一个  返回值为删除的那个值
arr.shift();    //删除第一个    同上
//tips：
arr.unshift(arr.pop());   //将最后的值放在第一位
arr.push(arr.shift());    //第一个值放在最后一位
```
#### **3、splice()方法**
```javascript
//删除、替换、添加
var arr = [1,2,3,4,5];
arr.splice(0,2);        //从第0个删除2个 ==> [3,4,5]
arr.splice(0,2,'a','b');//删除后添加'a','b' ==> ['a','b',3,4,5]
arr.splice(1,0,'a');    //在第1个前添加'a' ==>[1,'a',2,3,4,5]
//替换、添加不限个数    //返回值为删除的值  ==>1,2
```
#### **4、数组去重方法1**
```javascript
for(var i = 0;i < arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
        if( arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
```
#### **5、sort()排序**
```javascript
//排序说明：若返回值为+，则交换位置。为—,则不交换
arr.sort();         //默认根据unicode编码排序
arr.sort(function(a,b){return a - b;});    //从小到大
arr.sort(function(a,b){return parseInt(b) - parseInt(a);});
arr.sort(function(a,b){return Math.random() - 0.5;});//随机排序
```
#### **6、随机数及公式**
```javascript
//x~y 从x~y的随机数(包含)
Math.round(Math.random()*(y - x) + x);
Math.round(Math.random()*y);            //0 ~ y
Math.ceil(Math.random()*y);             //1 ~ y
```
#### **7、concat reverse方法**
```javascript
var arr = [1,2,3];
var arr2 = [4,5,6];
var arrx = arr.concat(arr2,~~~);    //不改变原数组
var arrx = arr.concat('q','1');     //arrx = [1,2,3,'q','1']
arr.reverse();      //arr = [3,2,1]    改变原数组
//字符串颠倒
var str = 'asdfgh';
str.split('').reverse().join('');   //hgfdsa
```





	
	