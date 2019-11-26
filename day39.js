// jQuery(function ($) {
//     var pos1 = $('#box1').offset();
//     var pos2 = $('#box2').offset();
//     var pos3 = $('#box3').offset();

//     $(window).scroll(function () {
//         var dy = $(this).scrollTop();

//         $('#box1').css('top', pos1.top + dy / 2);
//         //   $('#box1').css('left', pos1.left + dy / 3);

//         $('#box2').css('top', pos2.top + dy / 5);
//         //   $('#box2').css('left', pos2.left + dy / 8);

//         $('#box3').css('top', pos3.top + dy / 7);
//         //   $('#box3').css('left', pos3.left + dy / 4);
//     });
// });


// 要素を取得
let box1 = document.getElementById('box1');
let data1 = document.getElementById('data1');
let box1Top = document.getElementById('box1-top');
let box2Top = document.getElementById('box2-top');
let box2Left = document.getElementById('box2-left');
let box3Top = document.getElementById('box3-top');

// box1のY軸の最初の位置
let box1TopPosition = box1.offsetTop;

// box2のX軸Y軸の最初の位置
let box2TopPosition = box2.offsetTop;
let box2LeftPosition = box2.offsetLeft;

// box3のY軸の最初の位置
let box3TopPosition = box3.offsetTop;


window.addEventListener('scroll', function () {
    // スクロール量
    let scroll = window.pageYOffset;

    // スクロールに合わせてbox1を移動させる
    let b1Top = box1TopPosition + (scroll / 2) + 'px';
    box1.style.top = b1Top;
    // box1のY軸の現在の位置
    let box1TopPositionNow = box1.offsetTop;
    // htmlにbox1の現在の位置を描画
    data1.innerHTML = scroll;
    box1Top.innerHTML = box1TopPositionNow;


    // box2の現在の位置
    let box2TopPositionNow = box2.offsetTop;
    let box2LeftPositionNow = box2.offsetLeft;
    // スクロールに合わせてbox2を移動させる
    let b2Top = box2TopPosition + (scroll / 3) + 'px';
    let b2Left = box2LeftPosition + (scroll / 4) + 'px';
    box2.style.top = b2Top;
    box2.style.left = b2Left;

    // htmlに値を描画
    box2Top.innerHTML = box2TopPositionNow;
    box2Left.innerHTML = box2LeftPositionNow;

    // box3のY軸の現在の位置
    let box3TopPositionNow = box3.offsetTop;
    // スクロールに合わせてbox3を移動させる
    let b3Top = box3TopPosition + (scroll / 4) + 'px';
    box3.style.top = b3Top;
    // htmlに値を描画
    box3Top.innerHTML = box3TopPositionNow;
})