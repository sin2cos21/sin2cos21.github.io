let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  w = (canvas.width = 600),
  h = (canvas.height = 600),
  machineHeight = 30,
  machineWidth = 50,
  oWidth = 10,
  oHeight = 10,
  enemyWidth = 50,
  enemyHeight = 10,
  enemies = [],
  beams = [],
  id;

//__________________________
function Enemy(ctx) {
  this.ctx = ctx;
  let test = Math.floor(Math.random() * (w - machineWidth / 2));
  if (test < machineWidth / 2) {
    test += machineWidth;
  }
  this.x = test;
  this.y = 0;
  this.v = 5;
  this.color = {
    r: 250,
    g: 0,
    b: 0,
    a: 1
  };
}

Enemy.prototype.render = function() {
  this.draw();
  this.positionChenge();
};

Enemy.prototype.draw = function() {
  let ctx = this.ctx;
  ctx.beginPath();
  ctx.rect(this.x, this.y, enemyWidth, enemyHeight);
  this.y += this.v; //vの速度はステージごとに1上がる、5でかなり速い
  ctx.fillStyle =
    "rgba(" +
    this.color.r +
    ", " +
    this.color.g +
    ", " +
    this.color.b +
    ", " +
    this.color.a +
    ")";
  ctx.fill();
  ctx.closePath();
};

Enemy.prototype.positionChenge = function() {
  this.y--;
};

//___________beam_____________________________

function Beam(ctx, x) {
  this.ctx = ctx;
  this.x = x;
  this.y = h - machineHeight * 2;
}

Beam.prototype.render = function() {
  this.draw();
  this.positionChenge();
};
Beam.prototype.positionChenge = function() {
  this.y--;
};

Beam.prototype.draw = function() {
  let ctx = this.ctx;
  ctx.beginPath();
  ctx.rect(this.x, this.y, oWidth, oHeight);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.closePath();
};
//___マシーン__________________
function Machine(ctx, x) {
  this.ctx = ctx;
  this.x = x;
  this.y = h - machineHeight;
}
let machine = new Machine(ctx, w / 2);

Machine.prototype.render = function() {
  this.draw();
};

Machine.prototype.draw = function() {
  let ctx = this.ctx;
  ctx.beginPath();
  if (this.x > w - machineHeight) this.x -= w - this.x;
  ctx.rect(this.x, this.y, machineWidth, machineHeight);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
};

document.addEventListener("keydown", function key(e) {
  //  37=== 左端, 39===右端
  if (e.keyCode === 37 && machine.x > 0) machine.x -= 10;
  else if (machine.x < w - machineWidth && e.keyCode === 39) machine.x += 10;

  if (e.keyCode == 32) {
    let beam = new Beam(ctx, machine.x + machineWidth / 2 - oWidth / 2);
    beams.push(beam);
  }
});

//________実行_________________

function render() {
  ctx.clearRect(0, 0, w, h);
  enemies.forEach(function(enemy) {
    //ゲームオーバー
    if (enemy.y >= h - machineHeight) {
      clearInterval(enemyCreate);
      enemies.length = 0;
      beams.length = 0;
      alert("GAME OVER!!!");
    }
    enemy.render();
  });
  machine.render();
  if (beams) {
    for (var i = 0; beams.length > i; i++) {
      let oneBeam = beams[i];
      oneBeam.render();
      let hitOrNoHit = hit(oneBeam, enemies);
      if (hitOrNoHit) beams.splice(i, 1);
      if (oneBeam.y + oHeight < 0) beams.splice(i, 1);
      console.log(oneBeam.y);
    }
  }
  id = requestAnimationFrame(render);
}

let enemyCreate = setInterval(function() {
  let enemy = new Enemy(ctx);
  enemies.push(enemy);
}, 1000);

function hit(beam, enemies) {
  for (var i = 0; enemies.length > i; i++) {
    let oneEnemy = enemies[i];
    if (
      (oneEnemy.x < beam.x &&
        oneEnemy.x + enemyWidth > beam.x &&
        oneEnemy.y + enemyHeight > beam.y) ||
      (oneEnemy.x > beam.x && oneEnemy.x < beam.x + oWidth)
    ) {
      enemies.splice(i, 1);
      return true;
    }
  }
}

render();
