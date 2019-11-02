
let count2 = 1;
let randomTime2 = Math.floor(Math.random() * 10);
console.log(randomTime2);

setInterval(createDiv, randomTime2 * 10);

function createDiv() {
    let divVar2 = document.createElement('div');
    let text2 = document.createTextNode('2' + count2);
    divVar2.appendChild(text2);
    document.body.appendChild(divVar2);
    count2 += 1;
    randomTime2 = Math.floor(Math.random() * 10);
    console.log(randomTime2);
}
