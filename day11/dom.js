// it can access the whole document
// document.documentElement
// document.head
// document.title
// DOM manipulation

// DOM References
// document.title="New Title";
// var x=document.getElementsById('head1');

 var y=document.getElementsByClassName('para');
//  var z=document.getElementsByTagName("ul");

// var t=document.querySelector("#head2")
// // it will select only first match tag
// var t=document.querySelector(".para")
// // it will will select all match tag
// var o=document.querySelectorAll(".para")
// // it is imn form of array we can access any by using index
// var o=document.querySelectorAll(".para[1]")
// var h2=document.getElementById('head2')


// x.style.backgroundColor="yellow";
// x.innerText='new heading';
// h2.style.display="none";  in this content is not there
// h2.style.visibility="hidden";  in this only content is invisible butavailable there
// allpara[1].style.fontFamily
// allpara[1].style.color
// allpara[1].style.border


// // adding new node
// var newli=document.createElement('li');
// var textContent="new item"

// z.appendChildw(newli)
for(var i=0;i<y.length;i++)
y[i].style.color="blue";
// event handaling mechasim
// 1. inline event handaling
// 2.handle event using it reference
// 3. using AddEventListener
function perfomrTask(){
    console.log("the")
}
var btn=document.querySelector("button")
console.log(btn);


// way-2 using Reference
 btn .onmouseover=function(){
    document.querySelector("p").style.backgroundColor="pink";

 }
 btn .onmouseleave=()=>
    document.querySelector("p").style.backgroundColor="orange";
    // way-3 addEventListener(bind and unbind the event)
btn.addEventListener("click",task1);
btn.removeEventListener("click",task1);

function task1(){
  document.getElementById("head1").style.display="none";
 }

