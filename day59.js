let canvas = document.getElementById("canvas"),
  order = 0,
  humanName = [["men1", "men2", "men3"], ["women1", "women2", "women3"]],
  men = humanName[0].length,
  woman = humanName[1].length,
  num = men + woman,
  hairetu = [],
  menOrwoman = ["men", "woman"];

function Human(id, sex, name) {
  this.initialize(id, sex, name);
}

Human.prototype.greet = function() {
  let idDiv = document.getElementById(this.id);
  idDiv.innerHTML =
    "Hello, I'm " +
    this.name +
    "<br>My sex is " +
    this.sex +
    "<br>id is " +
    this.id;
  if (this.sex === "men") {
    idDiv.style.backgroundColor = "blue";
  }
};

function render() {
  hairetu.forEach(function(object) {
    object.greet();
  });
}

Human.prototype.initialize = function(id, sex, name) {
  this.sex = menOrwoman[sex];
  this.id = id;
  this.name = name;
};

function createHuman() {
  let id = order;
  let sex;
  if (men <= 0) {
    sex = 1;
    woman--;
  } else if (woman <= 0) {
    sex = 0;
    men--;
  } else {
    sex = Math.round(Math.random());
    if (sex === 0) men--;
    if (sex === 1) woman--;
  }
  let number;
  if (menOrwoman[sex] === "men") number = Math.floor(Math.random() * men);
  if (menOrwoman[sex] === "woman") number = Math.floor(Math.random() * woman);
  let name = humanName[sex][number];
  humanName[sex].splice(number, 1);
  let human = new Human(id, sex, name);
  hairetu.push(human);
  let div = document.createElement("div");
  div.setAttribute("class", "page");
  div.setAttribute("id", order);
  order++;
  document.body.appendChild(div);
}

for (var i = 0; i < num; i++) {
  createHuman();
}

render();
