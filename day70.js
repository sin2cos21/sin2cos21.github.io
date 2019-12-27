let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  twidth = (canvas.width = window.innerWidth),
  theight = (canvas.height = window.innerHeight),
  chars = [],
  x,
  y;

function Character(ctx, e) {
  this.size = Math.random() * 100 + 10;
  this.ctx = ctx;
  this.x = twidth / 2;
  this.y = theight / 2;
  this.v = Math.ceil(Math.random() * 10);
  this.v2 = Math.ceil(Math.random() * 10);
  this.char = String.fromCharCode(e.keyCode);
  this.direction = Math.ceil(Math.random() * 2);
  this.mode = true;
}

Character.prototype.render = function() {
  this.draw();
  this.syukaku(x, y);
  this.potision();
};

Character.prototype.potision = function() {
  if (this.direction === 1 && this.mode === true) {
    this.x += this.v;
    this.y += this.v2;
  } else if (this.mode === true) {
    this.x -= this.v;
    this.y -= this.v2;
  }
  if (this.x < 0 + this.size) this.v *= -1;
  if (this.x > twidth - this.size) this.v *= -1;
  if (this.y < 0 + this.size) this.v2 *= -1;
  if (this.y > theight - this.size) this.v2 *= -1;
};
Character.prototype.syukaku = function(x, y) {
  if (this.x > twidth - this.size) {
    this.mode = false;
  }
};
Character.prototype.draw = function() {
  let ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = "rgba(20,136,131,1)";
  ctx.font = this.size + "px Arial";
  ctx.fill();
  ctx.fillText(this.char, this.x, this.y);
  ctx.closePath();
};

document.addEventListener("keydown", logKey, false);

function logKey(e) {
  if (e.keyCode < 65 || e.keyCode > 91) {
    return false;
  } else {
    let char = new Character(ctx, e);
    chars.push(char);
  }
}

document.body.addEventListener("mousemove", returnMousePosition);
function returnMousePosition(e) {
  x = e.pageX;
  y = e.pageY;
}

function render() {
  fontSize = Math.random() * 100;
  ctx.clearRect(0, 0, twidth, theight);
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(20, 136, 131, 1)";
  ctx.fill();
  ctx.closePath();
  for (var i = 0; chars.length > i; i++) {
    let char = chars[i];
    char.render();
  }

  requestAnimationFrame(render);
}

render();
