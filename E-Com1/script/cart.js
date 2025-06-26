let cart_arr = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("container");
let total = document.getElementById("total");
let total_value = 0;

if (cart_arr.length === 0) {
  container.innerText = "Your cart is empty.";
  total.innerText = "";
} else {
  display(cart_arr);
}

function display(data) {
  total_value = 0;
  data.map(function (el) {
    total_value += el.price;

    let title = document.createElement("h2");
    title.innerText = el.title;

    let price = document.createElement("h3");
    price.innerText = Math.floor(el.price);

    let image = document.createElement("img");
    image.src = el.image;

    
    let buynow = document.createElement("button");
    buynow.innerText = "Buy Now";
    buynow.addEventListener("click", function (){
      localStorage.setItem("selectedProduct", JSON.stringify(el));

      window.location.href = "../html/payment.html"
    })

    let div = document.createElement("div");
    div.append(image, title, price, buynow);
    container.append(div);
  });

   total.innerText =
     "Total Price of your cart - " + Math.floor(total_value) + ".00";
 }


