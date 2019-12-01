// イベント 右クリック　oncontextmenu

let contextMenu = document.getElementById('contextMenu');
let contextMenu2 = document.getElementById('contextMenu2');
contextMenu.oncontextmenu = function () {
    contextMenu.innerHTML = '右クリック不可エリア（不可ではない）';
    return false;
}
contextMenu2.oncontextmenu = function () {
    contextMenu2.innerHTML = ('alertの表示！');
    alert('右クリックをしたな？');
}

// __________________________________________

// イベント　サイズ変更 onresize
let resize = document.getElementById('resize');
window.onresize = function () {
    resize.innerHTML += window.innerWidth + ',';
}
// _________________________________________


// イベント 画像読み込み失敗　onerror
let onerror = document.getElementById('onerror');
let onerrorImage = document.getElementById('onerrorImage');
onerrorImage.onerror = function () {
    onerrorImage.removeAttribute("src");
    onerrorImage.setAttribute('src', 'day31_image/5.jpg');
}

// イベント　マウスが乗る/離れる onmouseover/onmouseout
let onmouseover = document.getElementsByClassName('onmouseover');
console.log(onmouseover[3]);

for (var i = 0; onmouseover.length > i; i++) {
    onmouseover[i].onmouseover = function (e) {
        e.target.style.borderWidth = '.5em';

    }
    onmouseover[i].onmouseout = function (e) {
        e.target.style.borderWidth = '1px';
        console.log('test');
    }
}