//クロージャー

function displayText() {
  let text = document.getElementById("text");
  let count = 0;
  return function() {
    count++;
    text.innerHTML += "<br>" + count;
  };
}
let count1 = displayText();
let count2 = displayText();

count1();
count1();
count2();
count2();
count2();
//____________プロトタイプ___________

let button = document.getElementById("button");
let object = document.getElementById("object");
button.addEventListener("click", createMyObject);

function createMyObject() {
  let userName = prompt();
  if (!userName) {
    userName = "nanashi";
  }

  function Human(name) {
    this.name = name;
  }

  Human.prototype.greet = function() {
    object.innerHTML += "<br>greet: Hello!" + this.name;
  };

  Human.prototype.sayName = function() {
    object.innerHTML += "<br>sayName: I' am " + this.name;
  };

  let user = new Human(userName);
  user.greet();
  user.sayName();
}
