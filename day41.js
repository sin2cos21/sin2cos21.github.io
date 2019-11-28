let contents = document.querySelectorAll('.fade-out');
let windowIn = window.innerHeight;
console.log('windowの高さ: ' + windowIn);
let nowPosition;
let myClassName = 'fade-in';


for (var i = 0; contents.length > i; i++) {
    let content = contents[i];
    let contentPosition = content.getBoundingClientRect().top;
    console.log('contentの位置: ' + contentPosition);

    randomColor(content);

    window.addEventListener('scroll', function () {
        nowPosition = window.pageYOffset;
        console.log('現在位置: ' + nowPosition);
        if (content.classList.contains(myClassName) === false) {
            if (windowIn + nowPosition > contentPosition + (windowIn / 4)) {
                content.classList.add(myClassName);
            }
        }
    }, false)
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
    element.style.backgroundColor = 'rgba(' + r + ', ' + g + ',' + b + ', .5)';
}