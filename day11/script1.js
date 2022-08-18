// DOM reference
let counter=0;
var h1=document.querySelector('h1');
var startermole=document.querySelector('#mole');
var starterdirt=document.querySelector('#mud');
var startbtn=document.querySelector('#start');
var p=document.querySelectorAll(".points");
var d=document.querySelectorAll(".dirt");
var m=document.querySelectorAll(".mole");
function start(){
    h1.style.visibility="hidden"
    startermole.style.visibility="hidden"
    starterdirt.style.visibility="hidden"
    startbtn.style.visibility="hidden"
    for(let i=0;i<2;i++){
        p[i].style.visibility="visible";
    }
    for(let i=0;i<6;i++){
        d[i].style.visibility="visible";
    }  
    setInterval(() => {
        var ran=Math.floor(Math.random()* 6) ;
        m[ran].style.visibility="visible";
        setTimeout(() => {
            m[ran].style.visibility="hidden";
        },1000 );

    }, 2000);
}
function count1(){
    counter++;
    document.getElementById('currentPoint').innerHTML=counter;
    
}
// m.addEventListener("click",task1);
// function task1(){
//     document.getElementById("#currentPoint").innerHTML=1;
//    }
