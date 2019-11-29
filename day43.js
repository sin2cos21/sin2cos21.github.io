window.onload = function () {
    setInterval(draw, 10);
}

let canvas = document.getElementById('canvas');
let cvs = canvas.getContext('2d');
var x = 0;
let test = 0;
let test2 = 3;
let aa = 0.1;

function draw() {
    cvs.beginPath();
    cvs.arc(x, canvas.height / 2, 10, 0, Math.PI * test / 2, false);
    cvs.fillStyle = 'rgba(0,0,255,.1)';
    cvs.fill();
    cvs.closePath();

    cvs.beginPath();
    cvs.arc(x, canvas.height / 4, 10, 0, Math.PI * test2 / 2, true);
    cvs.fillStyle = 'rgba(255,0,0,.1)';
    cvs.fill();
    cvs.closePath();

    if (4 <= test) {
        test = 0;
        x += 10;
    }

    test += aa;
    test2 -= aa;

}
