"use strict";
let num1 = [];
let t = 0;
let sum = 0;
while (true) {
    let n = prompt(`enter the no(terminate while enter 0)`);
    let no = parseInt(n);
    if (no == 0) {
        alert("you enter 0");
        adder(...num1);
        break;
    }
    else {
        num1.push(no);
    }
}
function adder(...num1) {
    let su = 0;
    for (var i = 0; i < num1.length; i++) {
        let u = num1[i];
        sum = sum + parseInt(u);
    }
    console.log(su);
}
let para1 = document.createElement('p');
para1.innerHTML = `Sum:  ${sum}`;
document.body.appendChild(para1);
document.body.style.backgroundColor = "grey";
document.body.style.color = "white";
document.body.style.fontSize = "40px";
