var timer
var div = document.getElementById("myDiv");
var button = document.getElementById("myButton");
var button2 = document.getElementById("myButton2");
button.addEventListener("click", function () {
  
  div.style.animation = "yuan 2s linear infinite";
}, 500);
button2.addEventListener("click", function () {
  div.style.animationPlayState = "paused";
})