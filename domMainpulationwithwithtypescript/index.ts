// var heading1=document.querySelector('h1')!;
// heading1.innerHTML="Pankaj kapoor";
// console.log(heading1);


var heading1=document.querySelector('h1') as HTMLHeadElement;
let anchor=document.querySelector('a') as HTMLAnchorElement;
heading1.innerHTML="DOM Manipulation using TypeScript";
var input1=document.getElementById('num1') as HTMLInputElement;
var input2=document.getElementById('num2') as HTMLInputElement;

// console.log(input1.);
var form=document.querySelector('.myForm') as HTMLFormElement;
form.addEventListener('submit',function(e:Event){
    e.preventDefault();
    let newP=document.createElement('p');
    let result:number=input1.valueAsNumber+ +input2.value;
    
    newP.innerText=<string><unknown>result;
    form.appendChild(newP);

})




































