let cart_arr = JSON.parse(localStorage.getItem("cartData"));
let container = document.getElementById("container");
let total = document.getElementById("total");
let total_value = 0;

display(cart_arr);

function display(data) {
  data.map(function (el) {
    // console.log(el.category)
    total_value = total_value + el.price;
    total.innerText =
      "Total Price of your cart - " + Math.floor(total_value) + ".00";
    let title = document.createElement("h2");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = Math.floor(el.price);
    let image = document.createElement("img");
    image.src = el.image;
    let description = document.createElement("p");
    description.innerText = el.description;
    let buynow = document.createElement("button");
    buynow.innerText = "Buynow";
    
    
    let div = document.createElement("div");
    div.append(image, title, price, buynow);
    container.append(div);
  });
}


