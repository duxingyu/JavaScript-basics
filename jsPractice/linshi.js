function f(x,y){
  console.log(x+y);
}

f.call(this,1,1) // 2
f.apply(f,[1,1]) // 2