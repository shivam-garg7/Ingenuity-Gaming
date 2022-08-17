// ES5 based function
var add=function(a,b){
    return a+b;
    
};
console.log(add(5,10));


// ES6 Fat Arrow Function(short syntax)
// VARIATION 3 WITH NO RETURN
var add=(a,b)=> a+b;

console.log(add(5,15));
// variation 1
var sayHello=()=> console.log("This is Arrow Function of variatin 1");
var sayHello=()=> {
    console.log("This is Arrow Function of variatin 1");
    console.log("This is Arrow Function of variatin 1");
};
sayHello();


// variation 2
var sqr=(a)=> console.log("Result"+ a*a);
sqr(5);

var myArr=[1,2,3,4,4];
myArr.forEach((a)=>console.log(a*10));