//変数宣言__________________________________________
let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  canvasW = (canvas.width = window.innerWidth),
  canvasH = (canvas.height = window.innerHeight),
  stars = [],
  aliens = [],
  N = 100, //星の数
  eN = 10, //エイリアンの数
  myURL = "day73_1.png";

//星obj__________________________________________
function Star(ctx) {
  this.ctx = ctx;
  this.initialize();
}

Star.prototype.initialize = function() {
  this.x = Math.random() * canvasW;
  this.y = Math.random() * canvasH;
  this.size = Math.random() * 1;
  this.r = 255;
  this.g = 255;
  this.b = 0;
  this.a = Math.ceil(Math.random() * 10);
};

Star.prototype.render = function() {
  this.draw();
  this.statusChange();
};

Star.prototype.draw = function() {
  let color = this.r + "," + this.g + "," + this.b + "," + this.a;
  let ctx = this.ctx;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(" + color + ")";
  ctx.fill();
  ctx.closePath();
};

Star.prototype.statusChange = function() {
  if (this.x < 0 || this.x > canvasW || this.y < 0 || this.y > canvasH)
    this.initialize();
  this.size += 0.01;
  this.a += 0.1;
  if (this.a <= 1) this.a = 0.1;
  if (this.size >= 0.5) this.size = 0;
};

//エイリアンobj______________________________________

function Alien(ctx, imgObj) {
  this.ctx = ctx;
  this.img = imgObj;
  this.size = 1;
  this.x = Math.random() * canvasW;
  this.y = Math.random() * canvasH;
}

Alien.prototype.render = function() {
  this.draw();
  this.statusChange();
};

Alien.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};

Alien.prototype.statusChange = function() {
  if (this.size <= 60) this.size += 0.2;
  else {
    this.x += 5;
    this.y += 5;
  }
};

//実行____________________________________________

function render() {
  ctx.clearRect(0, 0, canvasW, canvasH);
  for (var i = 0; i < stars.length; i++) {
    stars[i].render();
  }
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].render();
    if (aliens[i].x > canvasW || aliens[i].y > canvasH) aliens.splice(i, 1);
  }
  requestAnimationFrame(render);
}

for (var i = 0; i < N; i++) {
  let star = new Star(ctx);
  stars.push(star);
}

function comeOnAliens() {
  for (var i = 0; i < eN; i++) {
    let moto = new Image();
    moto.src = myURL;
    let one = new Alien(ctx, moto);
    aliens.push(one);
  }
}

setTimeout(comeOnAliens, 3000);

render();
