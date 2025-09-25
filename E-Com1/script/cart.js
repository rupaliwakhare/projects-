


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
  container.innerHTML = ""; 
  total_value = 0;

  data.forEach(function (el, index) {
    let quantity = el.quantity || 1;
    let item_total = el.price * quantity;
    total_value += item_total;

    
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    image.width = 100;

    let title = document.createElement("h2");
    title.innerText = el.title;
    imgDiv.append(image, title);

    
    let detailsDiv = document.createElement("div");
    let description = document.createElement("p");
    description.innerText = el.description;

    let price = document.createElement("h3");
    price.innerText = "₹" + Math.floor(item_total);

    let minusBtn = document.createElement("button");
    minusBtn.innerText = "-";

    let qtyText = document.createElement("span");
    qtyText.innerText = ` ${quantity} `;

    let plusBtn = document.createElement("button");
    plusBtn.innerText = "+";

    minusBtn.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        el.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart_arr));
        display(cart_arr);
      }
    });

    plusBtn.addEventListener("click", function () {
      quantity++;
      el.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart_arr));
      display(cart_arr);
    });

    let buynow = document.createElement("button");
    buynow.innerText = "Buy Now";
    buynow.addEventListener("click", function () {
      localStorage.setItem("selectedProduct", JSON.stringify(el));
      window.location.href = "../html/payment.html";
    });

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", function () {
      cart_arr.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart_arr));
      display(cart_arr);
    });

    detailsDiv.append(
      description,
      price,
      minusBtn,
      qtyText,
      plusBtn,
      buynow,
      removeBtn
    );

    let mainDiv = document.createElement("div");
    mainDiv.style.display = "flex";
    mainDiv.style.justifyContent = "space-between";
    mainDiv.style.margin = "10px";
    mainDiv.append(imgDiv, detailsDiv);

    container.append(mainDiv);
  });

  total.innerText = "Total: ₹" + Math.floor(total_value) + ".00";
}












