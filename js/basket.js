const basketItems = document.querySelectorAll(".basket-item");

basketItems.forEach(function (item) {
  const minusBtn = item.querySelector(".minus-btn");
  const plusBtn = item.querySelector(".plus-btn");
  const quantity = item.querySelector(".quantity");

  plusBtn.addEventListener("click", function () {
    let count = Number(quantity.textContent);
    count++;

    quantity.textContent = count;
  });

  minusBtn.addEventListener("click", function () {
    let count = Number(quantity.textContent);
    if (count > 1) {
      count--;
      quantity.textContent = count;
    }
  });
});
