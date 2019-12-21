let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  twidth = (canvas.width = 500),
  theight = (canvas.height = 500),
  chars = [],
  count = document.getElementById("count"),
  fontSize = Math.random() * 100,
  countNumber = 0;

function Character(ctx, e) {
  this.ctx = ctx;
  this.x = Math.floor(Math.random() * twidth);
  this.y = Math.floor(Math.random() * theight);
  this.size = fontSize;
  this.char = String.fromCharCode(e.keyCode);
}

Character.prototype.render = function() {
  this.draw();
};

Character.prototype.draw = function() {
  let ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = "rgba(31, 227, 13, .5)";
  ctx.font = this.size + "px Arial";
  ctx.fill();
  ctx.fillText(this.char, this.x, this.y);
  ctx.closePath();
};

//_________keydown_________;
document.addEventListener("keydown", logKey, false);

function logKey(e) {
  if (countNumber >= 50) {
    countNumber = 0;
    chars.length = 0;
    alert("Characters are not eternal.");
  } else if (e.keyCode < 65 || e.keyCode > 91) {
    return false;
  } else {
    let char = new Character(ctx, e);
    chars.push(char);
    countNumber++;
    count.innerHTML = countNumber;
  }
}

function render() {
  fontSize = Math.random() * 100;
  ctx.clearRect(0, 0, twidth, theight);
  for (var i = 0; chars.length > i; i++) {
    let char = chars[i];
    char.render();
  }

  requestAnimationFrame(render);
}

render();
