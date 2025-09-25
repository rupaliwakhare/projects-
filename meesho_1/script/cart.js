// // let cartItemsContainer = document.getElementById("cart-items");
// // let totalPriceEl = document.getElementById("total-price");

// // let cart = JSON.parse(localStorage.getItem("cart")) || [];
// // let total = 0;
// //  const mobile = localStorage.getItem("userMobile");

// //  if (!mobile) {
// //    // User not logged in, redirect to signup
// //    window.location.href = "signup.html"; // ✅ Replace with your actual signup page
// //  }
// // cart.forEach((item, index) => {
// //   let div = document.createElement("div");
// //   div.className = "cart-item";

// //   let quantity = item.quantity || 1;
// //   let itemTotal = Math.floor(item.price) * quantity;
// //   total += itemTotal;

// //   div.innerHTML = `
// //     <img src="${item.image}" />
// //     <h3>${item.title}</h3>
// //     <p>₹${Math.floor(item.price)} x ${quantity} = ₹${itemTotal}</p>
// //     <button onclick="changeQty(${index}, -1)">➖</button>
// //     <button onclick="changeQty(${index}, 1)">➕</button>
// //     <button onclick="removeItem(${index})">🗑️</button>
// //   `;

// //   cartItemsContainer.append(div);
// // });

// // totalPriceEl.innerText = total;

// // function changeQty(index, delta) {
// //   cart[index].quantity += delta;
// //   if (cart[index].quantity < 1) {
// //     cart.splice(index, 1);
// //   }
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   location.reload();
// // }

// // function removeItem(index) {
// //   cart.splice(index, 1);
// //   localStorage.setItem("cart", JSON.stringify(cart));
// //   location.reload();
// // }


//   // let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   // const mobile = localStorage.getItem("userMobile");
//   // const cartItemsContainer = document.getElementById("cart-items");
//   // const totalPriceEl = document.getElementById("total-price");

//   // if (!mobile) {
//   //   window.location.href = "signup.html";
//   // }

//   // function renderCart() {
//   //   cartItemsContainer.innerHTML = "";
//   //   let total = 0;

//   //   cart.forEach((item, index) => {
//   //     let quantity = item.quantity || 1;
//   //     let itemTotal = Math.floor(item.price) * quantity;
//   //     total += itemTotal;

//   //     let div = document.createElement("div");
//   //     div.className = "cart-item";
//   //     div.innerHTML = `
//   //       <img src="${item.image}" />
//   //       <h3>${item.title}</h3>
//   //       <p>₹${Math.floor(item.price)} x ${quantity} = ₹${itemTotal}</p>
//   //       <button onclick="changeQty(${index}, -1)">➖</button>
//   //       <button onclick="changeQty(${index}, 1)">➕</button>
//   //       <button onclick="removeItem(${index})">🗑️</button>
//   //     `;
//   //     cartItemsContainer.appendChild(div);
//   //   });

//   //   totalPriceEl.innerText = total;
//   //   updateCartCount(); // Optional: update badge
//   // }

//   // function changeQty(index, delta) {
//   //   cart[index].quantity += delta;
//   //   if (cart[index].quantity < 1) {
//   //     cart.splice(index, 1);
//   //   }
//   //   localStorage.setItem("cart", JSON.stringify(cart));
//   //   renderCart(); // 👈 Instant update
//   // }

//   // function removeItem(index) {
//   //   cart.splice(index, 1);
//   //   localStorage.setItem("cart", JSON.stringify(cart));
//   //   renderCart(); // 👈 Instant update
//   // }

//   // function updateCartCount() {
//   //   const countEl = document.getElementById("cart-count");
//   //   if (countEl) {
//   //     let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   //     countEl.textContent = totalItems;
//   //   }
//   // }

//   // document.addEventListener("DOMContentLoaded", renderCart);


//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const mobile = localStorage.getItem("userMobile");
//   const cartItemsContainer = document.getElementById("cart-items");
//   const totalPriceEl = document.getElementById("total-price");

//   if (!mobile) {
//     window.location.href = "signup.html";
//   }

//   function renderCart() {
//     cartItemsContainer.innerHTML = "";
//     let total = 0;

//     cart.forEach((item, index) => {
//       let quantity = item.quantity || 1;
//       let itemTotal = Math.floor(item.price) * quantity;
//       total += itemTotal;

//       let div = document.createElement("div");
//       div.className = "cart-item";
//       div.innerHTML = `
//       <img src="${item.image}" />
//       <h3>${item.title}</h3>
//       <p>₹${Math.floor(item.price)} x ${quantity} = ₹${itemTotal}</p>
//       <button onclick="changeQty(${index}, -1)">➖</button>
//       <button onclick="changeQty(${index}, 1)">➕</button>
//       <button onclick="removeItem(${index})">🗑️</button>
//     `;
//       cartItemsContainer.appendChild(div);
//     });

//     totalPriceEl.innerText = total;
//     updateCartCount(); // ✅ Cart badge update after render
//   }

//   function changeQty(index, delta) {
//     cart[index].quantity += delta;
//     if (cart[index].quantity < 1) {
//       cart.splice(index, 1);
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   }

//   function removeItem(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   }

//   function updateCartCount() {
//     const countEl = document.getElementById("cart-count");
//     if (countEl) {
//       let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//       countEl.textContent = totalItems;
//     }
//   }

//   function addToCart(product) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     let existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       existing.quantity += 1;
//     } else {
//       product.quantity = 1;
//       cart.push(product);
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount(); // ✅ Instant badge update
//   }

//   document.addEventListener("DOMContentLoaded", renderCart);

  


    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    function renderCart() {
      cartItemsContainer.innerHTML = "";
      let total = 0;

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
        totalPriceEl.innerText = "0";
        updateCartCount();
        return;
      }

      cart.forEach((item, index) => {
        let quantity = item.quantity || 1;
        let itemTotal = Math.floor(item.price) * quantity;
        total += itemTotal;

        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
  <div class="cart-item-layout">
    <div class="cart-img-box">
      <img src="${item.image}" class="cart-img" />
      <h3 class="cart-title">${item.title}</h3>
    </div>
    <div class="cart-desc">
      <p>${item.description}</p>
      <p>₹${Math.floor(item.price)} x ${quantity} = ₹${itemTotal}</p>
      <div class="cart-buttons">
        <button onclick="changeQty(${index}, -1)">-</button>
        <button onclick="changeQty(${index}, 1)">+</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    </div>
  </div>
`;


        cartItemsContainer.appendChild(div);
      });

      totalPriceEl.innerText = total;
      updateCartCount();
    }

    function changeQty(index, delta) {
      cart[index].quantity = cart[index].quantity || 1;
      cart[index].quantity += delta;
      if (cart[index].quantity < 1) {
        cart.splice(index, 1);
        updateCartCount();
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }

    function updateCartCount() {
      let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById("cart-count").textContent = totalItems;
    }

    renderCart(); // ✅ Show cart on page load

    document.getElementById("checkout-btn").addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty 🛒");
        return;
      }

      localStorage.setItem("checkoutCart", JSON.stringify(cart));
      window.location.href = "address.html"; // ✅ Redirect to address page
    });
