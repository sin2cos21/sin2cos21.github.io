var player = document.getElementById("player");
var captureButton = document.getElementById("capture");
let snapshotWrapper = document.getElementById("snapshotWrapper");
let beferCanvas;
randomColor(player);
var handleSuccess = function(stream) {
  player.srcObject = stream;
};

captureButton.addEventListener("click", function() {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("class", "snapshot");

  // 2枚目以降のスナップショット
  if (beferCanvas) {
    beferCanvas = snapshotWrapper.insertBefore(canvas, beferCanvas);
    randomColor(snapshotWrapper.firstChild);
  } //一番最初のスナップショット
  else {
    beferCanvas = snapshotWrapper.appendChild(canvas);
    randomColor(snapshotWrapper.firstChild);
  }

  var context = canvas.getContext("2d");
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
});

navigator.mediaDevices.getUserMedia({ video: true }).then(handleSuccess);

// _______________________________ここから関係ない関数_______________________
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
  element.style.borderColor = "rgba(" + r + ", " + g + "," + b + ", .5)";
}
