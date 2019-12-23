let div1 = document.getElementById("one"),
  div2 = document.getElementById("two"),
  displayDiv = [div1, div2],
  div3 = document.getElementById("three"),
  countDiv = document.getElementById("countDiv"),
  mathRange = 9, //問題文の項にはこの数値以下を使う
  mathObject = 2, //項の数
  koArray = [], //項の値を持つオブジェクトの配列
  koSumNumber, //項の合計値===答え
  inputMathArray = [], //入力された数字の値を持つオブジェクトの配列
  inputSumNumber, //入力された数字の合計値
  keyCodeMath = {
    48: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9
  },
  count = 0;

//_________________________________________________________
//数値を持つオブジェクト
function Question(number) {
  this.math = number;
}

Question.prototype.randomSet = function() {
  this.math = Math.ceil(Math.random() * mathRange); //ceil →切り上げ, randam()→ 0~1までの数字をランダムにreturnする/ 1~10が表示される
};

for (var i = 0; i < mathObject; i++) {
  let math = new Question(Math.ceil(Math.random() * mathRange));
  koArray.push(math);
  displayDiv[i].innerHTML = math.math;
}

//_________________________________________________________
document.addEventListener("keydown", logKey);

//入力文字を表示するための関数
function displayThree() {
  div3.innerHTML = "";
  for (var i = 0; i < inputMathArray.length; i++) {
    div3.innerHTML += inputMathArray[i].math;
  }
}

//配列内の合計値を足し合わせるための関数
function sum(array) {
  sum = array.reduce((a, x) => (a += x));
  return sum;
}

//入力値が正解か判定する関数
function checkCorrectAnswer() {
  koSumNumber = 0;
  inputSumNumber = "";
  for (var i = 0; i < koArray.length; i++) {
    koSumNumber += koArray[i].math;
  }
  for (var i = 0; i < inputMathArray.length; i++) {
    inputSumNumber += String(inputMathArray[i].math);
  }
  if (Number(inputSumNumber) === koSumNumber) {
    for (var i = 0; i < mathObject; i++) {
      koArray[i].randomSet();
      displayDiv[i].innerHTML = koArray[i].math;
      document.body.style.backgroundColor = "rgba(250,0,0,.3)";
    }
    div3.innerHTML = "";
    inputMathArray.length = 0;
    count++;
    countDiv.innerHTML = count;
  } else {
    document.body.style.backgroundColor = "rgba(0,0,250,.3)";
  }
}
//入力時の動作
function logKey(e) {
  //消す場合
  if (e.keyCode === 8) {
    if (inputMathArray) {
      inputMathArray.pop(); //入力オブジェクトを一つ消す
      displayThree();
    }
  } else if (e.keyCode >= 48 && e.keyCode <= 57) {
    let answer = new Question(keyCodeMath[e.keyCode]);
    inputMathArray.push(answer); //入力オブジェクトを配列に入れる
    displayThree();
    checkCorrectAnswer();
  }
}
