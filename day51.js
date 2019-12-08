let mouseX = 0;
let mouseY = 0;
let mouseMove = document.getElementById("mouseMove");
let positionDisplay = document.getElementById("positionDisplay");
let rangeWidth = 1;
let rangeHeigt = 1;
let x;
let y;
let flag = false;
mouseMove.addEventListener("mousedown", function() {
  flag = true;
});
mouseMove.addEventListener("mouseup", function() {
  flag = false;
});

mouseMove.addEventListener("mousemove", function(e) {
  drawStatusDisplay();
  if (flag) {
    x = e.pageX;
    y = e.pageY;
    let div = document.createElement("div");
    div.setAttribute("class", "dot");
    div.style.top = y + "px";
    div.style.left = x + "px";
    div.style.width = rangeWidth + "px";
    div.style.height = rangeHeigt + "px";
    mouseMove.appendChild(div);
  }
});

function drawStatusDisplay() {
  if (flag) {
    positionDisplay.innerHTML = "描画中";
  } else {
    positionDisplay.innerHTML = "描画停止中";
  }
}

function positionDisplayMethod(x, y) {
  let coordinate = " (X座標：" + x + " Y座標：" + y + ")";
  positionDisplay.innerHTML = coordinate;
}

function corsorChase() {
  doctor.style.top = y + "px";
  doctor.style.left = x + "px";
  men.style.top = y + 25 + "px";
  men.style.left = x + 30 + "px";
}

// ________________ここからステータスバー_______

let range = document.getElementById("range");
let rangeDisplay = document.getElementById("rangeDisplay");

let dotElements = document.getElementsByClassName("dot");
function rangeChange() {
  rangeDisplay.innerHTML = range.value;
  rangeWidth = range.value;
  rangeHeigt = range.value;
}

range.addEventListener("input", rangeChange);
