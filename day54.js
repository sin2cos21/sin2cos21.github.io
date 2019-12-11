let janken = {
  0: "rock",
  1: "paper",
  2: "scissors"
};

let img = {
  rock: "day54/rock.png",
  scissors: "day54/scissors.png",
  paper: "day54/paper.png"
};

let jankenImage = document.getElementById("jankenImage");
let MyjankenImage = document.getElementById("MyjankenImage");
let jankenWord = document.getElementById("jankenWord");
let jankenButton = document.getElementsByClassName("jankenButton");

for (var i = 0; i < jankenButton.length; i++) {
  let jankenChoice = jankenButton[i];
  jankenChoice.addEventListener("click", function() {
    let random = Math.floor(Math.random() * 3);
    jankenImage.style.backgroundImage = "url(" + img[janken[random]] + ")";
    MyjankenImage.style.backgroundImage = "url(" + img[jankenChoice.id] + ")";
    judge(random, jankenChoice.id);
  });
}
//引数はtekidaは乱数、meは選択した要素のid
function judge(tekida, me) {
  let teki = janken[tekida];
  if (teki === me) {
    jankenWord.innerHTML = "ヒキワケ";
    jankenWord.style.backgroundColor = "rgba(255,250,50, .5)";
  } else if (
    (me === "rock" && teki === "scissors") ||
    (teki === "rock" && me === "scissors")
  ) {
    jankenWord.innerHTML = "カチ";
    jankenWord.style.backgroundColor = "rgba(255,50,50, .5)";
  } else if (me.length > teki.length) {
    jankenWord.innerHTML = "カチ";
    jankenWord.style.backgroundColor = "rgba(255,50,50, .5)";
  } else {
    jankenWord.innerHTML = "マケ";
    jankenWord.style.backgroundColor = "rgba(55,50,250, .5)";
  }
}
