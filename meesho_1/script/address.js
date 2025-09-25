// script.js

const form = document.getElementById("addressForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const pincodeInput = document.getElementById("pincode");
const addressInput = document.getElementById("address");
const message = document.getElementById("message");

// Load saved address on page load
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("userAddress"));
  if (saved) {
    nameInput.value = saved.name;
    phoneInput.value = saved.phone;
    pincodeInput.value = saved.pincode;
    addressInput.value = saved.address;
    message.textContent = "You can edit your saved address.";
  }
};

// Save or update address
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userAddress = {
    name: nameInput.value,
    phone: phoneInput.value,
    pincode: pincodeInput.value,
    address: addressInput.value,
  };

  localStorage.setItem("userAddress", JSON.stringify(userAddress));
  message.textContent = "Address saved successfully!";
window.location.href = "payment.html";

});
