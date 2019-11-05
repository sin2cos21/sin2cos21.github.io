window.onload = function () {

    let test = document.getElementsByClassName('panel');

    console.log(test);

    function h3Click(event) {
        console.log(event.target);
    }

    for (var i = 0; i < test.length; i++) {
        console.log(test[i]);
        test[i].addEventListener('click', function (e) {
            console.log(1);
            var nowNode = e.target;
            var nextNode = nowNode.nextElementSibling;
            if (nextNode.className == 'closed') {
                nextNode.classList.remove('closed');
                console.log(2);
            } else {
                nextNode.classList.add('closed');
                console.log(3);
            }

        })
    }
}