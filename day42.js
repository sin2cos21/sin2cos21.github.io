let oneBox = document.getElementsByClassName('one-box');

for (var i = 0; oneBox.length > i; i++) {
    let content = oneBox[i];
    console.log(content);
    randomColor(content);
}

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
    element.style.backgroundColor = 'rgba(' + r + ', ' + g + ',' + b + ', .3)';
}