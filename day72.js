let bodyWidth = window.innerWidth,
  bodyHeight = window.innerHeight,
  oneBlockWidth = bodyWidth / 10,
  oneBlockHeight = bodyHeight / 10,
  oneBlockList = [];

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    let div = document.createElement("div");
    div.classList.add("oneBlock");
    div.style.width = oneBlockWidth - 1 + "px";
    div.style.height = oneBlockHeight - 1 + "px";
    div.style.top = oneBlockHeight * i + "px";
    div.style.left = oneBlockWidth * j + "px";
    let number = i * 10 + (j + 1);
    div.setAttribute("id", number);
    div.innerHTML = number;
    oneBlockList.push(div);
    document.body.appendChild(div);
  }
}

for (var i = 0; i < oneBlockList.length; i++) {
  let oneBlock = oneBlockList[i];
  oneBlock.addEventListener("mouseover", function() {
    oneBlock.style.backgroundColor = "rgba(0,0,0,0)";
    oneBlock.innerHTML = "";
  });
}
