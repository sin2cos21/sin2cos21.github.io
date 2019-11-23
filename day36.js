document.addEventListener('keydown', logKey);
let keyDown = document.getElementById('keyDown');
let count = 0;

function logKey(e) {
    let myKeyCode = e.keyCode;
    console.log(myKeyCode);
    if (myKeyCode == 190) {
        keyDown.innerHTML += '.<br>';
        count++;
    } else if (myKeyCode == 32) {
        keyDown.innerHTML += ' ';
        count++;
    } else if (myKeyCode == 13) {
        keyDown.innerHTML += '<br>';
        count++;
    } else if (myKeyCode < 65 || myKeyCode > 91) {
        return false;
    } else {
        let myCharCode = String.fromCharCode(myKeyCode);
        let myCharCodeLower = myCharCode.toLowerCase();
        keyDown.innerHTML += myCharCodeLower;
        count++;
    }

    if (count > 25) {
        keyDown.innerHTML += '<br>';
        count = 0;
    }
}