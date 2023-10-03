// document.querySelector("h1").style.color = "blue";
// let selecth1 = document.querySelector("h1");
// selecth1.addEventListener("mouseenter", function () {
//   selecth1.innerHTML = "I am a Front end Web Developer";
//   selecth1.style.color = "tomato";
//   selecth1.style.backgroundColor = "yellow";
// });
// selecth1.addEventListener("mouseleave",function () {
//     selecth1.innerHTML="My name is Hamza Imran";
//     selecth1.style.color="blue";
//     selecth1.style.backgroundColor="black";
// });
let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    btn.innerHTML = "ON";
    flag=0;
  }
});
