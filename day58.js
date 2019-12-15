//全体で使う変数宣言（カンマ区切りで変数宣言が可能！！）
let canvas = document.getElementById("canvas"),
  button = document.getElementById("button"),
  create = document.getElementById("create"),
  canvasContext = canvas.getContext("2d"),
  radius = 10,
  hairetu = [], //obj格納用の配列
  width = window.innerWidth,
  height = window.innerHeight,
  number = 2,
  flag = true;

//_____画面サイズ変更に対応するための処理___________
canvas.width = width;
canvas.height = height;

window.addEventListener("resize", function resize() {
  Width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//檻をつける or つけないに対応するための処理
button.addEventListener("click", function() {
  if (flag) {
    flag = false;
    button.value = "檻をつける";
  } else {
    flag = true;
    button.value = "檻を外す";
  }
});

//Animalを増やす処理
create.addEventListener("click", createAnimal);

//_______________初期化__________________________
function Animal(canvasContext, positionX, positionY) {
  this.canvasContext = canvasContext;
  this.initialize(positionX, positionY);
}

Animal.prototype.initialize = function(positionX, positionY) {
  this.positionX = positionX;
  this.positionY = positionY;
  this.velocity = {
    x: Math.random() * 8,
    y: Math.random() * 8
  };
  this.color = {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
    a: 1
  };
};
//_________________各種メソッド_____________________
function render() {
  canvasContext.clearRect(0, 0, width, height);
  canvasContext.globalCompositeOperation = "lighter";
  hairetu.forEach(function(obj) {
    obj.render();
  });
  requestAnimationFrame(render); //自動でアニメーションしてくれる関数
}

Animal.prototype.render = function() {
  this.draw();
  this.updatePosition();
  if (flag) {
    this.limitPosition();
  } else {
    this.connectPosition();
  }
};

Animal.prototype.draw = function() {
  ctx = this.canvasContext;
  ctx.beginPath();
  ctx.arc(this.positionX, this.positionY, radius, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
};

Animal.prototype.updatePosition = function() {
  this.positionX += this.velocity.x;
  this.positionY += this.velocity.y;
};

Animal.prototype.limitPosition = function() {
  if (this.positionX > width - radius || 0 >= this.positionX - radius)
    this.velocity.x = -this.velocity.x;
  if (this.positionY > height - radius || 0 >= this.positionY - radius)
    this.velocity.y = -this.velocity.y;
};

Animal.prototype.connectPosition = function() {
  if (this.positionX < 0) this.positionX = width;
  if (this.positionX > width) this.positionX = 0;
  if (this.positionY < 0) this.positionY = height;
  if (this.positionY > height) this.positionY = 0;
};

//______________実行__________________________
function createAnimal() {
  var startPositionX = Math.random() * width,
    startPositionY = Math.random() * height;
  if (0 > startPositionX - radius) startPositionX += radius;
  if (startPositionX >= width - radius) startPositionX -= radius;
  if (0 > startPositionY - radius) startPositionY += radius;
  if (startPositionY >= height - radius) startPositionY -= radius;
  obj = new Animal(canvasContext, startPositionX, startPositionY);
  hairetu.push(obj);
}

for (var i = 0; i < number; i++) {
  createAnimal();
}

render();
