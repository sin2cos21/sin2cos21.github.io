function countApp() {
  let count = 0;
  return function plusCount() {
    count++;
    return count;
  };
}

function countApp2() {
  let count = 0;
  return function plusCount() {
    count--;
    return count;
  };
}
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let displalyCount = document.getElementById("displalyCount");
let counter1 = countApp();
let displalyCount2 = document.getElementById("displalyCount2");
let counter2 = countApp2();

button.addEventListener("click", function() {
  counter1();
  displalyCount.innerHTML = counter1() + counter2();
});

button2.addEventListener("click", function() {
  counter2();
  displalyCount.innerHTML = counter1() + counter2();
});
