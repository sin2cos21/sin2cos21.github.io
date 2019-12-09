window.onload = function() {
  createCardWrapper(); //wrapperを作る
  createCard(); //cardを作る
};

//_____________________変数宣言___________________________

let divWrapper; //一番大枠のdiv
let countDisplay;
let countDisplaySpan = document.getElementById("countDisplaySpan");
let card = [
  { 0: "" },
  { 1: "" },
  { 2: "" },
  { 3: "" },
  { 4: "" },
  { 5: "" },
  { 6: "" },
  { 7: "" },
  { 8: "" },
  { 9: "" },
  { 10: "" },
  { 11: "" },
  { 12: "" },
  { 13: "" },
  { 14: "" },
  { 15: "" }
]; //それぞれのcardにつけるid
let image = ["1", "2", "3", "4", "5", "6", "7", "8"]; //cardの画像名
let imageNumber = 0;
let beforeCard = ""; //前にクリックしたcard
let id; //クリックしたcardのid(=key)
let countClick = 2; //1回目か2回目かの判断
let goal = 0; //全て当てたかどうかの判断
//____________________関数_________________________

function clicked(e) {
  open(e); //cardクリック時のモーション
  successOrFailure(e);
}

//cardクリック時のモーション
function open(e) {
  id = e.target.id;
  e.target.classList.add("click-none");
  e.target.classList.add("card-rotate");
  delayImageDisplay(1000).then(function() {
    e.target.style.backgroundImage = "url(day52/" + card[id][id] + ".png)";
    e.target.classList.remove("card-rotate");
  });
}
function successOrFailure(e) {
  if (countClick % 2 == 0) {
    //1回目

    countClick++;
    countDisplaySpan.innerHTML =
      countClick -
      2 +
      ", 奇数, 前回のカード" +
      beforeCard +
      ",ポイント: " +
      goal;
    beforeCard = id;
  } else {
    //2回目、かつ成功
    if (card[beforeCard][beforeCard] === card[id][id]) {
      console.log("success");
      countDisplaySpan.innerHTML =
        countClick -
        2 +
        ", 偶数, 前回のカード" +
        beforeCard +
        ",ポイント: " +
        goal;
      beforeCard = id;
      countClick++;
      goal += Number(card[id][id]);
      if (goal === 36) {
        setTimeout(goaal, 2000);
      }
    } else {
      //2回目、かつ失敗
      e.target.classList.add("card-rotate");
      countClick++;
      countDisplaySpan.innerHTML =
        countClick -
        2 +
        ", 偶数, 前回のカード" +
        beforeCard +
        ",ポイント: " +
        goal;
      delayImageDisplay(1000)
        .then(function() {
          e.target.classList.remove("card-rotate");
        })
        .then(function() {
          let before = document.getElementById(beforeCard);
          beforeCard = id;

          setTimeout(function() {
            before.style.backgroundImage = "url(day52/day52_card.png)";
            e.target.style.backgroundImage = "url(day52/day52_card.png)";
            console.log(before);
            console.log(e.target);
            e.target.classList.remove("card-rotate");
            e.target.classList.remove("click-none");
            before.classList.remove("click-none");
          }, 1000);
        });
    }
  }
}

//image配列の順番をシャッフルする
function shuffle() {
  for (var i = image.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let tmp = image[i];
    image[i] = image[random];
    image[random] = tmp;
  }
}

//一番大枠のwrapperを作成する関数
function createCardWrapper() {
  countDisplay = document.createElement("div");
  countDisplaySpan = document.createElement("span");
  countDisplaySpan.setAttribute("id", "countDisplaySpan");
  countDisplay.innerHTML = "クリック回数: ";
  countDisplay.appendChild(countDisplaySpan);
  document.body.appendChild(countDisplay);

  divWrapper = document.createElement("div");
  divWrapper.setAttribute("id", "divWrapper");
  document.body.appendChild(divWrapper);
}
//cardを16枚作る関数
function createCard() {
  shuffle(); //画像をシャッフルする
  for (var i = 0; i < card.length; i++) {
    let div = document.createElement("div");
    let key = Object.keys(card[i]); //a,b..pと順番に入る
    div.setAttribute("id", key);
    card[i][key] = image[imageNumber]; //cardと画像が結びついた（画像は2枚ずつ)
    div.setAttribute("class", "card");
    // div.style.backgroundImage = "url(day52/" + image[imageNumber] + ".png)";
    if (imageNumber >= 7) {
      imageNumber = 0;
      shuffle(); //画像をシャッフルする
    } else {
      imageNumber++;
    }
    divWrapper.appendChild(div);
    div.addEventListener("click", clicked);
  }
  console.log(card);
}

//画像の表示を遅らせるための関数
function delayImageDisplay(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}
function goaal() {
  goalDiv = document.createElement("div");
  goalImg = document.createElement("img");
  goalDiv.innerHTML = "おめでとうございます！";
  goalImg.setAttribute("class", "goalImg");
  goalDiv.setAttribute("class", "goalDiv");
  goalImg.setAttribute("src", "day52/secret.jpg");
  goalDiv.appendChild(goalImg);
  document.body.appendChild(goalDiv);
}
