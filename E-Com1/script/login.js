let form = document.querySelector("form");
let signupData = JSON.parse(localStorage.getItem("signupData"));

form.addEventListener("submit", loginfun);

function loginfun() {
  event.preventDefault();

  let login_obj = {
    email: form.Email.value,
    password: form.Password.value,
  };

  let flag = false;

  for (let i = 0; i < signupData.length; i++) {
    if (signupData[i].email == login_obj.email) {
      if (signupData[i].password == login_obj.password) {
        localStorage.setItem(
          "loginuser",
          JSON.stringify(signupData[i].fullname)
        );
        flag = true;
      } else {
        flag = "wrong";
      }
    }
  }

  if (flag == true) {
    alert("login");

    window.location.href = "../html/index.html";
  } else if (flag == "wrong") {
    alert("wrong password");
  } else {
    alert("login failed");
  }
}
