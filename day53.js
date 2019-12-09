let dictionary = {
  "65": "A",
  "66": "B",
  "67": "C",
  "68": "D",
  "69": "E",
  "70": "F",
  "71": "G",
  "72": "H",
  "73": "I",
  "74": "J",
  "75": "K",
  "76": "L",
  "77": "M",
  "78": "N",
  "79": "O",
  "80": "P",
  "81": "Q",
  "82": "R",
  "83": "S",
  "84": "T",
  "85": "U",
  "86": "V",
  "87": "W",
  "88": "X",
  "89": "Y",
  "90": "Z"
};
//タイピング練習問題の単語
let moji = [
  "animal",
  "cat",
  "dog",
  "egg",
  "window",
  "javascript",
  "rewrite",
  "game",
  "start",
  "english",
  "zeal",
  "enthusiasm",
  "passion"
];
let array = [];
let count = 0; //現在の正解数
let flag = true; //ゲーム終了の判定
let charOpacity = 0; //どの文字を透明にするかの判定
let wrapper = document.getElementById("wrapper");
let beforeEnter = document.getElementById("beforeEnter");
document.addEventListener("keydown", logKey);

window.onload = function() {
  shuffle();
  console.log(moji);
  charCount();
};

//moji配列の変数を、配列に入れていく
function charCount() {
  for (var i = 0; moji[count].length > i; i++) {
    array.push(moji[count].charAt(i));
    let charspan = document.createElement("span");
    charspan.innerHTML = array[i];
    charspan.setAttribute("id", i);
    wrapper.appendChild(charspan);
  }
}

function logKey(e) {
  if (flag) {
    if (typeof dictionary[e.keyCode] === "string") {
      beforeEnter.innerHTML += dictionary[e.keyCode].toLowerCase() + " ";
    }
    // 単語の1文字目と入力文字が同じか判定する
    if (array[0].toUpperCase() == dictionary[e.keyCode]) {
      let getCharSpan = document.getElementById(charOpacity);
      getCharSpan.style.opacity = 0.5;
      charOpacity++;
      array.shift();
      if (array.length === 0) {
        wrapper.innerHTML = "";
        charOpacity = 0;
        if (count === moji.length - 1) {
          alert("終わり");
          flag = false;
        } else {
          count++;
          charCount();
        }
      }
    }
  }
}

function shuffle() {
  for (var i = moji.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let tmp = moji[i];
    moji[i] = moji[random];
    moji[random] = tmp;
  }
}
