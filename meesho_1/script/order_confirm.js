// script.js

// Generate random order ID
const orderId = "ORD" + Math.floor(Math.random() * 1000000);
document.getElementById("orderId").textContent = orderId;

// Estimate delivery date (5 days from now)
const today = new Date();
const deliveryDate = new Date(today.setDate(today.getDate() + 5));
document.getElementById("deliveryDate").textContent =
  deliveryDate.toDateString();

// Redirect function

  function goHome() {
    window.location.href = "index.html"; 
  }

