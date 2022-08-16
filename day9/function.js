// function parts
// function defiinitation
// fuction claiing
// func arg optional
// return value



// function version
// function without argument and without treutrn type


function myfunction1(){
    console.log("this is functon");
    console.log("it will perfrom some task");

}
myfunction1();
 

// 2. function with arg and without return
  
function myfunction2(a,b){
    console.log();
    console.log("result"+(a+b));

}
myfunction2(5,10);


// 3. function with arg and with return
function myfunction3(a,b){
    return a+b;

}
var result=myfunction3(10,20);
console.log(result);
console.log(myfunction3(30,50));
function sayhi(message){
    // if(message) return message;
    // else return;
    if(!message) return
    else return message;
}
console.log(sayhi("helllo"));
console.log(sayhi());
function add(a,b=0){
    // if(b==undefined)
    // b=0

    return a+b;
}
console.log(add(5));
function sum(){
    console.log(arguments.length);
}
sum(1,2,3);
sum(2,3,4,5,6,7,7,5);


// we can create functon using constroctor
var myfunction4 = new Function("a","b","return a+b");
myfunction4(5,7);

// function expression it means storing function defination inside a avariable is called function expression 
// it is also known as anonymous function

var a=function(){
    console.log("this is function expression");
    retrun "hello function";
};
console.log(a());

// self-invoking function
(function(){
    console.log("this is an anonymous function and it called itself");
})();

// function  hoisting
//  sayhelllo(5,10);
//  function sayhello(a,b){
//     console.log("result"+(a+b));
//  }
Add(5,10);
// hoisting of function expression not allowed
var Add=function(){
    return a+b;
}



