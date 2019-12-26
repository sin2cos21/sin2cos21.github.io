let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  canvasW = (canvas.width = window.innerWidth),
  canvasH = (canvas.height = window.innerHeight),
  circles = [];

function Circle(ctx, x, y, size) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.size = size;
  this.r = Math.random() * 256;
  this.g = Math.random() * 256;
  this.b = Math.random() * 256;
  this.a = Math.random() * 11;
  this.v = Math.ceil(Math.random() * 3);
}

Circle.prototype.render = function() {
  this.draw();
  this.statusChange();
};
Circle.prototype.draw = function() {
  let color = this.r + "," + this.g + "," + this.b + "," + this.a;
  let ctx = this.ctx;
  let random = Math.ceil(Math.random() * 2);
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  if (random > 1) {
    ctx.strokeStyle = "rgba(" + color + ")";
    ctx.stroke();
  } else {
    ctx.fillStyle = "rgba(" + color + ")";
    ctx.fill();
  }
  ctx.closePath();
};

Circle.prototype.statusChange = function() {
  this.size += 1;
  if (this.size > canvasW / 3 || this.size > canvasH / 3) {
    this.size = 0;
  }
};

document.body.addEventListener("mousemove", createCircleObject);

function createCircleObject(e) {
  let x = e.pageX;
  let y = e.pageY;
  let size = Math.random() * 10;
  let circle = new Circle(ctx, x, y, size);
  circles.push(circle);
}

function render() {
  ctx.clearRect(0, 0, canvasW, canvasH);
  circles.forEach(function(obj) {
    obj.render();
  });

  requestAnimationFrame(render);
}

render();
