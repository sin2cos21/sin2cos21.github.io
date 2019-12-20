taisyo.addEventListener("mouseover", function() {
  sushi.classList.remove("sushi");
  sushi.classList.add("sushiZanmai");
  setTimeout(function() {
    fukidashi.style.display = "inline-block";
    sushi.classList.remove("sushiZanmai");
    sushi.classList.add("sushi");
  }, 2000);
});
