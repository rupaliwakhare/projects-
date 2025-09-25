const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll('input[type="text"]');
  const [name, price, stock, image] = [...inputs].map((input) => input.value);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>₹${price}</td>
    <td>${stock}</td>
    <td>
      <button class="action-btn edit-btn">Edit</button>
      <button class="action-btn delete-btn">Delete</button>
    </td>
  `;
  tableBody.appendChild(newRow);

  form.reset(); // Clear form
});
