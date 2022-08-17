// setTimeout function

setTimeout(callback,3000);


function callback(){
    console.log("Hello World");
}

setTimeout(()=>{
    console.log("helllo world");

},5000);

// setTimeInterval
setInterval(() => {
    console.log("helllo world");
}, 2000);

clearInterval(myInterval);