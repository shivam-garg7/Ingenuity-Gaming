// ES5 varibles
var a=10;    global scope as well local scope
// es6 variables:
// block scope

// {
//     b=20;
//     console.log(b);

// }
// console.log(b);


// here c is a block variable:its accessibility is only ionside the block


{
    let c=100;
    console.log(c);
}
// console.log(c);

const sessions=120;
console.log(sessions)