const minus_btn = document.querySelectorAll(".minus-btn");
const plus_btn = document.querySelectorAll(".plus-btn");
const quantity = document.querySelector(".quantity");
const basketItems = document.querySelectorAll(".basket-item");

basketItems.forEach(function (item) {});

minus_btn.addEventListener("click", function () {
  let count = Number(quantity.textContent);

  if (count > 1) {
    count--;
    quantity.textContent = count;
  }
});

plus_btn.addEventListener("click", function () {
  let count = Number(quantity.textContent);

  count++;

  quantity.textContent = count;
});
