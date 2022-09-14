// var heading1=document.querySelector('h1')!;
// heading1.innerHTML="Pankaj kapoor";
// console.log(heading1);
var heading1 = document.querySelector('h1');
var anchor = document.querySelector('a');
heading1.innerHTML = "DOM Manipulation using TypeScript";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
// console.log(input1.);
var form = document.querySelector('.myForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var newP = document.createElement('p');
    var result = input1.valueAsNumber + +input2.value;
    newP.innerText = result;
    form.appendChild(newP);
});
