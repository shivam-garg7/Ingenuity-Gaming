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
    return "hello function";
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

// javascript Scope: visibility of code
// there are 3 type of scope
// 1.block Scope 
// 2. function scope 
// 3.global scope 


// 1.block scope: not available in es5 but in es6 with let and const
// function scope1(){
//     {
//     var a=10;
//     console.log(a);
//     }
//     console.log(a);

// }

// function scope1(){
//     var a=10;
//     console.log(a);
// }
// scope1();
// console.log(a);
function scope1(){
        var a=10;
        console.log(a);
        console.log("inside scope1");
        function Scope2{
            console.log("inside scope2");
            console.log(a);

        }
        Scope2();
     }
scope1();
function checkvar(){
    // a variable that is create inside function without var keyword then it declred ad global variable
    data=20;
    console.log(data);

}
checkvar();
console.log(data);
function add(a,b){
    return a+b;
}
var sum=add;
// it create the reference 
console.log(sum(5,10));
console.log(add(5,10));
// Passing function as argument
function avg(a,b,sum){
    return sum(a,b)/2;
}
function add(a,b){
    return a+b;
}
var sum=add;
var result=avg(5,10,sum);
console.log(result);

// function to create objects
function Person(){
    // Properties
    this.name="pankaj";
    this.age=30;
    // methods
    this.details=function(){
        return "Name = "+this.name+this.age;
    };
}
var obj1=new Person();
console.log(obj1.name);
obj1.name="sachin";
console.log(obj.details());

