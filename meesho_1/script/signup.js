// const continueBtn = document.querySelector(".signup-btn");
// const phoneInput = document.getElementById("phone");
// const otpBox = document.getElementById("otpbox");

// continueBtn.addEventListener("click", () => {
//   const phone = phoneInput.value.trim();

//   if (phone.length === 10 && /^[0-9]+$/.test(phone)) {
//     otpBox.style.display = "block";
//   } else {
//     alert("Please enter a valid 10-digit mobile number");
//   }
// });

// document.getElementById("verifybtn").addEventListener("click", () => {
//   const otp = document.getElementById("otp").value.trim();
//   if (otp.length === 6) {
//     alert("OTP Verified! Redirecting to profile...");
//     window.location.href = "profile.html"; 
//   } else {
//     alert("Invalid OTP");
//   }
// });

// const continueBtn = document.querySelector('button[type="submit"]');
// const phoneInput = document.getElementById("phone");
// const otpBox = document.getElementById("otpbox");
// const verifyBtn = document.getElementById("verifybtn");

// continueBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const phone = phoneInput.value.trim();

//   if (phone.length === 10 && /^[0-9]+$/.test(phone)) {
//     otpBox.style.display = "block";
//   } else {
//     alert("Please enter a valid 10-digit mobile number");
//   }
// });

// verifyBtn.addEventListener("click", () => {
//   const otp = document.getElementById("otp").value.trim();
//   if (otp.length === 6 && /^[0-9]+$/.test(otp)) {
//     alert("OTP Verified! ✅");
//     // Redirect or show profile section
//   } else {
//     alert("Invalid OTP. Please try again.");
//   }
// });

let continueBtn = document.querySelector('button[type="submit"]');
let phoneInput = document.getElementById("phone");
let otpBox = document.getElementById("otpbox");
let verifyBtn = document.getElementById("verifybtn");

let generatedOTP = "";

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let phone = phoneInput.value.trim();

  if (phone.length === 10 && /^[0-9]+$/.test(phone)) {
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    otpBox.style.display = "block";
    alert(`Your OTP is: ${generatedOTP}`);
  } else {
    alert("Please enter a valid 10-digit mobile number");
  }
});

verifyBtn.addEventListener("click", () => {
  const enteredOTP = document.getElementById("otp").value.trim();

  if (enteredOTP === generatedOTP) {
    const phone = phoneInput.value.trim();
    localStorage.setItem("userMobile", phone); // ✅ Save as plain string
    alert("OTP Verified! ✅");
    window.location.href = "../html/index.html"; // ✅ Redirect to home
  } else {
    alert("Invalid OTP. Please try again.");
  }
});