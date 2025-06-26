let form = document.getElementById("paymentForm");
let message = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "../html/OTP.html";
   
 
  let card = document.getElementById("card").value;

  if (card.length !== 16 || isNaN(card)) {
    alert(" Card number must be 16 digits.");
    
  } else {
    message.style.display = "block";

    setTimeout(function () {
      message.style.display = "none";
      form.reset();
    }, 3000);
  }
});
