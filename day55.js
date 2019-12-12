let me = document.getElementById("me");
let wrapper = document.getElementById("wrapper");
document.addEventListener("keydown", logKey);
let kyori = 220;
let idou = 5;

function logKey(e) {
  let myKeyCode = e.keyCode;

  // ← キー
  if (myKeyCode === 37) {
    // 左端
    if (kyori < 5) {
      me.style.backgroundColor = "blue";
    } else {
      me.style.backgroundColor = "red";
      me.style.left = (kyori -= idou) + "px";
      kyori -= 5;
    }
    // → キー
  } else if (myKeyCode === 39) {
    //右端
    if (kyori > 445) {
      me.style.backgroundColor = "blue";
    } else {
      me.style.backgroundColor = "red";
      me.style.left = (kyori += idou) + "px";
      kyori += 5;
    }
  }

  if (myKeyCode === 32) {
    let div = document.createElement("div");
    div.setAttribute("class", "beem");
    div.style.left = kyori + 25 + "px";
    wrapper.appendChild(div);
  }
}
