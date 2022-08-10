// Loops in javaScript
// 1. initialization
// 2.condition to stop the loop
// 3.incremenet| decrement to move the loop next iteration
// 1. while loop
  var i=1;
  while(i<10){
    console.log('this is javascript loop:'i);
    i++;
  }
// 2. Do while loop:iteration over the condition atleast once
var j=1;
{
    console.log("this is javascript with do while");
    j++;

}
while(j<1);
// for loop
for(var k=1;k<=10;k+=2) console.log("Odd: "+k);

var k=1;
for(;;){
    if(k>10)
    break;
    console.log("Odd: "+k);
    k +=2;
}
for(var p=1;p<=10;p++){
    if(p==7)break;
    console.log(p);
}
for(var p=1;p<=10;p++){
    if(p==7)continue;
    console.log(p);
}