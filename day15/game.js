// window.onload=function(){
//   const music = new Audio('../image/goldn-116392.mp3');
 
// music.play();
// music.playbackRate = 2;
// }
// document.getElementById('gif').style.visibility="hidden"
document.getElementById('gif').style.dispaly = 'none';
function hand(){
  // var myAudio=document.getElementById('myaudio');
  // myAudio.autoplay=ture;
  // myAudio.play();
  
  const music = new Audio('../image/magic-6976.mp3');
  music.play();
  document.getElementById("btn1").style.visibility="hidden"
  document.getElementById('gif').style.display = 'block';
  // document.getElementById('gif').style.visibility="visible";
  // document.getElementsByTagName('img').style.visibility="visible"

  setTimeout(() => {
    // document.getElementsByTagName('gif').style.visibility="hidden"
  
// const music = new Audio('../image/magic-6976.mp3');
// music.play();
// music.loop =true;
// music.playbackRate = 2;
// document.getElementById('gif').style.visibility="hidden"
document.getElementById('gif').style.dispaly="none";
  document.getElementById("canvas").style.visibility="visible"
  document.getElementById("hh").style.visibility="visible"
  // document.getElementById("btn1").style.visibility="hidden"
  document.getElementById('canvas').style.display = 'block';
  // document.getElementById('btn').style.display = 'none';
  

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const image = document.getElementById("source");

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0,
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}
// Create Animation
function update() {
  clear();

  drawPlayer();

  newPos();

  requestAnimationFrame(update);
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
}, 3000);
}
