let mouseX = 0;
let mouseY = 0;
let mouseMove = document.getElementById("mouseMove");
let positionDisplay = document.getElementById("positionDisplay");
let box = document.getElementById("box");
let men = document.getElementById("men");
let doctor = document.getElementById("doctor");
let x;
let y;

mouseMove.addEventListener("mousemove", function(e) {
  x = e.pageX;
  y = e.pageY;
  let coordinate = " (X座標：" + x + " Y座標：" + y + ")";
  positionDisplay.innerHTML = coordinate;
  doctor.style.top = y + "px";
  doctor.style.left = x + "px";
  men.style.top = y + 25 + "px";
  men.style.left = x + 30 + "px";
  let div = document.createElement("div");
  div.setAttribute("class", "dot");
  div.style.top = y + "px";
  div.style.left = x + "px";
  mouseMove.appendChild(div);
});
