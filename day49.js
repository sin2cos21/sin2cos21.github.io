let mouseMove = document.getElementById("mouseMove");
let x;
let y;
let innerWidth;
let innerHeigt;

innerHeigt = window.innerHeigt;
innerWidth = window.innerWidth;
height10 = innerHeight / 10;
width10 = innerWidth / 10;

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    let div = document.createElement("div");
    div.setAttribute("class", "color");
    div.style.top = height10 * i + "px";
    div.style.left = width10 * j + "px";
    randomColor(div);
    mouseMove.appendChild(div);
  }
}

mouseMove.addEventListener("mousemove", function(e) {
  let getClass = document.getElementsByClassName("color");
  for (var i = 0; getClass.length > i; i++) {
    randomColor(getClass[i]);
  }
});

function randomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = [r, g, b];
  return rgb;
}

function randomColor(element) {
  let rgb = randomRGB();
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];
  element.style.backgroundColor = "rgba(" + r + ", " + g + "," + b + ", .3)";
}
