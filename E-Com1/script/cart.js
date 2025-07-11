// let cart_arr = JSON.parse(localStorage.getItem("cart")) || [];
// let container = document.getElementById("container");
// let total = document.getElementById("total");


// let total_value = 0;



// if (cart_arr.length === 0) {
//   container.innerText = "Your cart is empty.";
//   total.innerText = "";
// } else {
//   display(cart_arr);
// }

// function display(data) {
//   total_value = 0;
//   data.map(function (el) {
//     total_value += el.price;

//     let title = document.createElement("h2");
//     title.innerText = el.title;

//     let price = document.createElement("h3");
//     price.innerText = Math.floor(el.price);
    
//     let image = document.createElement("img");
//     image.src = el.image;

//     let description = document.createElement("p")
//     description.innerText = el.description;

//     let buynow = document.createElement("button");
//     buynow.innerText = "Buy Now";

    
//     buynow.addEventListener("click", function (){
//       localStorage.setItem("selectedProduct", JSON.stringify(el));

//       window.location.href = "../html/payment.html"
//     })
//     let imgdiv = document.createElement("div")
//     console.log(imgdiv);
    
//     let div = document.createElement("div");
//     div.append(image, title, price, description,buynow);
    
//     container.append(div);
//   });

//    total.innerText =
//      "Total Price of your cart - " + Math.floor(total_value) + ".00";
//  }

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
  container.innerHTML = ""; // Clear container
  total_value = 0;

  data.forEach(function (el, index) {
    let quantity = el.quantity || 1;
    let item_total = el.price * quantity;
    total_value += item_total;

    // Image and title section
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    image.width = 100;

    let title = document.createElement("h2");
    title.innerText = el.title;
    imgDiv.append(image, title);

    // Details section
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
