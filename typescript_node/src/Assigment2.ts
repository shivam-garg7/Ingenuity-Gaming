let num1:number[]=[];
let t:number=0;
let sum:number=0;
while(true){
    let n:any=prompt(`enter the no(terminate while enter 0)`);
    let no=parseInt(n);
    if(no==0){
        alert("you enter 0");
        adder(...num1);
        break;
    }
    else{
        num1.push(no);
    }
}
function adder(...num1:number[]){
    let su:number=0;
    for (var i=0;i<num1.length;i++) {
         let u:any=num1[i];

         sum=sum+ parseInt(u);
    }
    console.log(su);
    
}
let para1=document.createElement('p');
    para1.innerHTML=`Sum:  ${sum}`;
document.body.appendChild(para1);
    
document.body.style.backgroundColor="grey";
document.body.style.color="white";
document.body.style.fontSize="40px";

