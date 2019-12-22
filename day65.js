let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  twidth = (canvas.width = window.innerWidth),
  theight = (canvas.height = window.innerHeight),
  chars = [],
  fontSize = Math.random() * 100,
  countNumber = 1,
  flag = true;
chars2 = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "ゆ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "を",
  "ん"
];

function Character(ctx) {
  this.ctx = ctx;
  this.x = Math.floor(Math.random() * twidth);
  this.y = Math.floor(Math.random() * theight);
  this.size = fontSize;
  this.char = chars2[Math.floor(Math.random() * chars2.length)];
  this.v = Math.floor(Math.random() * 5);
}

Character.prototype.render = function() {
  this.draw();
  this.positionChange();
};

Character.prototype.positionChange = function() {
  this.y -= this.v + 1;
  if (this.y < 0) this.y = theight;
  if (this.y > theight) this.y = 0;
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

for (var i = 0; i < 100; i++) {
  fontSize = Math.random() * 15;
  let char = new Character(ctx);
  chars.push(char);
}

function render() {
  ctx.clearRect(0, 0, twidth, theight);
  for (var i = 0; chars.length > i; i++) {
    let char = chars[i];
    char.render();
  }
  requestAnimationFrame(render);
}

render();
