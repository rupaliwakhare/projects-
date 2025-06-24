let form = document.querySelector("form");

form.addEventListener("submit", signupfun);

let signup_arr = JSON.parse(localStorage.getItem("signupData")) || [];

function signupfun() {
  event.preventDefault();

  data = {
    fullname: form.fullname.value,
    email: form.email.value,
    password: form.password.value,
  };

  signup_arr.push(data);
  localStorage.setItem("signupData", JSON.stringify(signup_arr));

  alert("Signup Successful");
  window.location.href = "../html/login.html";
}
