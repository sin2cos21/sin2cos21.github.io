let canvas = document.getElementById("canvas"),
  myDelete = document.getElementById("delete"),
  myRelease = document.getElementById("release"),
  ctx = canvas.getContext("2d"),
  twidth = (canvas.width = window.innerWidth),
  theight = (canvas.height = window.innerHeight),
  chars = [],
  mode;

function Circle(ctx, x, y) {
  this.size = 10;
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.r = Math.floor(Math.random() * 256);
  this.g = Math.floor(Math.random() * 256);
  this.b = Math.floor(Math.random() * 256);
  this.a = Math.ceil(Math.random() * 10);
  this.v = Math.ceil(Math.random() * 10);
}

Circle.prototype.potision = function() {
  this.x += this.v;
  this.y += this.v;

  if (this.x < 0 + this.size) this.v *= -1;
  if (this.x > twidth - this.size) this.v *= -1;
  if (this.y < 0 + this.size) this.v2 *= -1;
  if (this.y > theight - this.size) this.v2 *= -1;
};

Circle.prototype.render = function() {
  this.draw();
  if (mode === true) this.potision();
};

Circle.prototype.draw = function() {
  let ctx = this.ctx,
    color = this.r + "," + this.g + "," + this.b + "," + this.a;

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(" + color + ")";
  ctx.fill();
  ctx.closePath();
};

document.body.addEventListener("mousemove", returnMousePosition);
function returnMousePosition(e) {
  let char = new Circle(ctx, e.pageX, e.pageY);
  chars.push(char);
}

function render() {
  ctx.clearRect(0, 0, twidth, theight);
  ctx.fill();
  for (var i = 0; chars.length > i; i++) {
    let char = chars[i];
    char.render();
  }

  requestAnimationFrame(render);
}
myRelease.addEventListener("click", function() {
  mode = true;
});

myDelete.addEventListener("click", function() {
  chars.length = 0;
});

render();
