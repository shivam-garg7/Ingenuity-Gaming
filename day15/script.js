var canvas=document.getElementById('canvas');
const ctx=canvas.getContent('2d');

// canvas.width=200;
// canvas.width=window.innerWidth;
// filled rectangle
// ctx.fillStyle='red';
// ctx.fillRect(50,50,150,100);
// // stroke rectangle
// ctx.lineWidth=5;
// ctx.strokeStyle='blue';
// ctx.strokeRect(250,50,150,100);
// // round rectangle
// ctx.fillStyle='orange';
// ctx.roundRect(450,50,100,100,[10]);
// ctx.fill();
// // clear canvas
// ctx.clearRect(40,40,140,90);
// function clear(){
// ctx.clearRect(0,0,canvas.width,canvas.height);
// }


// ctx.font="30px arial";
// ctx.fillStyle="green";
// ctx.fillText('helloworld',200,200);
  

// ctx.lineWidth=1;
// ctx.strokeStyle='purpule';
// ctx.strokeText("hello world",200,300);
//  ctx.clearRect(0,0,canvas.width,canvas.height)
// //    draw rectangle 
// // path
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50)
// ctx.lineTo(100,200);
// // ctx.lineTo(50,50);
// ctx.closePath();
// ctx.fillStyle="coral"
// // ctx.stroke();
// ctx.fill();


// // stroke triangle
// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200)
// ctx.closePath();
// ctx.stroke();
// // fill rectangle
// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle="blue";

// ctx.fill();

// draw arc
ctx.beginPath()
ctx.fillStyle='teal';
ctx.arc(300,300,100,0, Math.PI*2);
// ctx.stroke();
ctx.fill();
// radian=(Math.PI)*2------> full circle
// radian=(Math.PI)-------->half circle
