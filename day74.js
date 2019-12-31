let gameboard = document.getElementById("gameBoard"),
  N = 8,
  nowPlayer = "white",
  black = "black",
  white = "white",
  divList = [];

for (var y = 0; y < N; y++) {
  let wrapper = document.createElement("div");
  for (var x = 0; x < N; x++) {
    let div = document.createElement("div");
    div.setAttribute("id", String(y) + String(x));
    div.classList.add("oneBlock");
    if (y == N / 2 && x == N / 2) div.classList.add("white");
    if (y == N / 2 - 1 && x == N / 2 - 1) div.classList.add("white");
    if (y == N / 2 && x == N / 2 - 1) div.classList.add("black");
    if (y == N / 2 - 1 && x == N / 2) div.classList.add("black");
    divList.push(div);
    wrapper.appendChild(div);
    gameboard.appendChild(wrapper);
  }
}

function change(player) {
  let p = player == black ? white : black;
  nowPlayer = p;
  return p;
}

for (var i = 0; i < divList.length; i++) {
  divList[i].addEventListener("click", function(e) {
    if (e.target.classList.contains("white")) {
      e.target.classList.remove("white");
      e.target.classList.add("black");
    } else if (e.target.classList.contains("black")) {
      e.target.classList.remove("black");
      e.target.classList.add("white");
    } else {
      change(nowPlayer);
      e.target.classList.add(nowPlayer);
    }
  });
}

for (var i = 0; i < divList.length; i++) {
  divList[i].addEventListener("dblclick", function(e) {
    if (e.target.classList.contains("white"))
      e.target.classList.remove("white");
    if (e.target.classList.contains("black"))
      e.target.classList.remove("black");
  });
}
