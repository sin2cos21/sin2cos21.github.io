window.onload = function () {

    let width_1000px = document.getElementById('width_1000px');
    let width767px = document.getElementById('width767px');
    let text = ['#ロゴ',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'TV',
        'Music',
        'サポート',
        '#検索',
        '#バッグ'
    ];
    let text2 = ['#メニュ', '#ロゴ', 'バッグ'];


    for (var i = 0; 10 > i; i++) {
        var headerItem = document.createElement('div');
        var headerItemText = document.createTextNode(text[i]);
        console.log(headerItemText);
        headerItem.appendChild(headerItemText);
        headerItem.setAttribute('class', 'headerItem headerItem1');
        width_1000px.appendChild(headerItem);
    }

    for (var i = 0; 3 > i; i++) {
        var headerItem = document.createElement('div');
        var headerItemText = document.createTextNode(text2[i]);
        headerItem.appendChild(headerItemText);
        headerItem.setAttribute('class', 'headerItem headerItem2');
        width767px.appendChild(headerItem);
    }
}