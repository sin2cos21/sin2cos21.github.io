let pageHeight = document.body.scrollHeight;
let viewportHeight = window.innerHeight;
// スクロールできる量を取得
let scrollHeigt = pageHeight - viewportHeight;

window.addEventListener('scroll', function () {
    // 現在のスクロール量を取得
    let scroll = window.pageYOffset;
    // scrollHeigtとscrollの値が同じになる=スクロール量が正しく求められている
    console.log(scroll);
    // document.body.style.backgroundPosition = (scroll / scrollHeigt) * 100 + "% 0";
    test.style.left = -(scroll / 18) + 'px';
}, false);