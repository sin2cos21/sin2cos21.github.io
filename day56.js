var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 5; //ボールの大きさ
var x = canvas.width / 2; //開始位置 X
var y = canvas.height / 3; //開始位置 Y
var dx = 1;
var dy = -1;
let color = "red";
let count = 0;
let spaceClick = document.getElementById("spaceClick");
document.addEventListener("keydown", space, false);

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.rect(220, 140, 50, 50); //x, y , 幅、高さ

  if (x > 220 && x < 270 && (y > 140 && y < 190)) {
    randomBallSize();
    randomRGB();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  ctx.fillStyle = color;
  ctx.fill(); //実行
  ctx.closePath();
}

function draw() {
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  drawBall();
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

//setInterval(draw, 10);

function space(e) {
  count++;
  spaceClick.innerHTML = count;
  if (e.keyCode == 32) {
    let fugou = Math.sign(dx);
    if (fugou === 1) {
      dx++;
    } else {
      dx--;
    }
    let fugou2 = Math.sign(dy);
    if (fugou2 === 1) {
      dy++;
    } else {
      dy--;
    }
    console.log("fugou: " + fugou);
  }
}

function randomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgba(" + r + ", " + g + "," + b + ", .5)";
  color = rgb;
}

function randomBallSize() {
  let ball = Math.floor(Math.random() * 8);
  ballRadius = ball + 3;
}

draw();
