let letters = [],
  name = [
    "太郎",
    "二郎",
    "三郎",
    "四郎",
    "五郎",
    "六郎",
    "七郎",
    "八郎",
    "九郎",
    "十郎"
  ],
  event = [
    "ラグビー",
    "サッカー",
    "ゲーム",
    "サバイバル",
    "ナルト",
    "ドラゴンボール",
    "宇宙",
    "犬",
    "鳥",
    "ニンジン"
  ],
  numberOfSheet = 10;

function Letter(name) {
  this.name = name;
}

Letter.prototype.head = function() {
  this.head = "拝啓<br>";
};
Letter.prototype.main = function(event) {
  this.main =
    "お久しぶりです。" +
    this.name +
    "です。<br>実は最近" +
    event +
    "をしまして、その結果を報告しようと思った次第でございます。<br>";
};
Letter.prototype.foot = function() {
  this.foot = "敬具";
};

for (var i = 0; i < numberOfSheet; i++) {
  let letter = new Letter(name[i]);
  letters.push(letter);
  let div = document.createElement("div");
  div.classList.add("letter");
  div.setAttribute("id", i);
  let color = randomRGB();
  div.style.backgroundColor = color;
  letter.head();
  letter.main(event[i]);
  letter.foot();
  div.innerHTML = letter.head + letter.main + letter.foot;
  document.body.appendChild(div);
  let eveLis = document.getElementById(i);
  eveLis.addEventListener("click", function() {
    eveLis.classList.add("pageShift");
  });
}

function randomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgba(" + r + ", " + g + "," + b + ", 1)";
  return rgb;
}
