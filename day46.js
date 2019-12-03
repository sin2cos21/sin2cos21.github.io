let test = document.getElementById('test');
let charSelect = document.getElementById('charSelect');
let plugins;
let test2 = document.getElementById('test2');
let cookieField = document.getElementById('cookieField');
let cookies;

// 最終更新日 lastModified
test.innerHTML += '最終更新日: ' + document.lastModified + '<br>';

// ドメイン名 domain
test.innerHTML += 'ドメイン名: ' + document.domain + '<br>';


// タイトル　title
test.innerHTML += 'タイトル名: ' + document.title + '<br>';

for (var i = 0; document.plugins.length > i; i++) {
    plugins += document.plugins[i] + ',';
}

test.innerHTML += 'プラグイン数: ' + plugins + '<br>';

// 選択範囲に変化があったときに起こるイベント　onselectionchange
document.onselectionchange = function () {
    // 選択された文字列を調べる　getSelection()
    let select = document.getSelection();
    charSelect.innerHTML += select;
}

test2.addEventListener('click', test3);

function test3() {
    let name = prompt('名前を入力してください。');
    document.cookie = 'name=' + name;
    document.cookie = 'your_type = shy';
    cookieField.innerHTML += 'クッキー: ' + document.cookie + '<br>';
    takeCookie();
    myName2();
}


function takeCookie() {
    if (document.cookie) {
        let cookie = document.cookie.split(';');
        cookie.forEach(function (value) {
            let content = value.split('=');
            cookieField.innerHTML += 'クッキーの値だけ: ' + content[1] + '<br>';
            if (content[0] == 'name') {
                cookieName = content[1];
            }
        })
    }
};
let myName = document.getElementById('myName');

function myName2() {
    if (cookieName) {
        myName.innerHTML = 'Hey, ' + cookieName + 'さん!';
    }
};