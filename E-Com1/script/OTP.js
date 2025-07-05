let main = document.getElementById("main");
// console.log(main);

let input = document.createElement("input");

let btn = document.createElement("button");
btn.addEventListener("click", checkotp);
btn.innerText = "Submit";

let br = document.createElement("br");
let btn2 = document.createElement("button");
btn2.addEventListener("click", getOtp);
btn2.innerText = "Get Otp";
window.location.href = "../html/order_place"

main.append(input, btn, br, btn2);

let check;

function getOtp() {
  let a = Math.floor(Math.random() * 10000);
  check = a;
  alert(a);
}

function checkotp() {
  if (input.value == check) {
    alert("correct");
    window.location.href = "../html/order_place.html";
  } else {
    alert("wrong otp");
  }
}
