let container = document.getElementById('container');
let eventNumber = document.getElementsByClassName('all_card');
let tekitoudesu = [
    '絶好調',
    '危ないかも',
    'うーん、頑張れ',
    'なるほどなぁ・・・',
    'そのままでいい！',
    'その調子だ！'
];

for (var i = 0; i < 8; i++) {
    var divCreate = document.createElement('div');
    var h2Create = document.createElement('h2');
    var number = i;
    var text1 = document.createTextNode(number);
    var text3 = "card" + number;
    var setClass = 'all_card ' + text3;
    divCreate.setAttribute('class', setClass);
    h2Create.appendChild(text1);
    divCreate.appendChild(h2Create);
    container.appendChild(divCreate);
}

for (var i = 0; i < eventNumber.length; i++) {
    eventNumber[i].addEventListener('click', test)
}

function test() {
    let random = tekitoudesu[Math.floor(Math.random() * tekitoudesu.length)];
    alert(`今日のあなたの運勢は"${random}"です！`);
}