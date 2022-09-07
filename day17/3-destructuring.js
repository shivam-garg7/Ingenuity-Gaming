// Destructing
var arr=[1,2,3,4,5,6,7,8,9,10]
let x=a[0];
let y=a[1];
let z=a[9];




let [a,b,c,d,e,f,,,t]=arr;
console.log(a);


// destructuring with object

let person={
    name:"sachin",
    age:30,
    mobile:3456789,
    email:"dfg@gmail.cpom",
    city:"sdfghnm",
};

// destructure
let{mobile,email,city}=person;
console.log(mobile);
console.log(email);
console.log(city);