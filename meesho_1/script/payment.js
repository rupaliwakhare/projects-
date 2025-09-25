function submitPayment() {
  const name = document.getElementById("name").value.trim();
  const card = document.getElementById("card").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  
  if (name && card && expiry && cvv) {
    alert("Payment Successful!");
    // Add real payment logic here
    window.location.href = "order_confirm.html"; 
    
  } else {
    alert("Please fill all fields correctly.");
  }
}
