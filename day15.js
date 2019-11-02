
let count = 1;
let randomTime = Math.floor(Math.random() * 10);
console.log(randomTime);

setInterval(createDiv, randomTime * 10);

function createDiv() {
    let divVar = document.createElement('div');
    let text = document.createTextNode('1' + count);
    divVar.appendChild(text);
    document.body.appendChild(divVar);
    count += 1;
    randomTime = Math.floor(Math.random() * 10);
    console.log(randomTime);
}
