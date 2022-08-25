var canvas=document.getElementById('canvas');
const ctx=canvas.getContent('2d');
// Animation
var circle={
    x:200,
    y:200,
    size:30,
    dx:5,
    dy:5
};



// Draw Circle
function drawCircle(){
   ctx.clearRect(0,0,canvas.clientWidth.canvas.height)
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle="pruple";
    ctx.fill();

}
function update(){
    drawCircle();
    circle.x+=circle.dx;
    circle.y+=circle.dy;
    // detect wall
    if(circle.x+circle.size>canvas.width|| circle.x-circle.size<0)circle.dx*=-1;
    if(circle.y+circle.size>canvas.width|| circle.y-circle.size<0)circle.dy*=-1;
    requestAnimationFrame(update);
    console.log(123);
}
update();