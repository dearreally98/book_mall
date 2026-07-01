const basketItems = document.querySelectorAll(".basket-item");
const totalPrice = document.querySelector("#total-price");

// 총 금액 계산
function updateTotalPrice() {
  let total = 0;

  basketItems.forEach(function (item) {
    const price = item.querySelector(".price");
    const quantity = item.querySelector(".quantity");

    const bookPrice = Number(price.dataset.price);
    const count = Number(quantity.textContent);

    total += bookPrice * count;
  });

  totalPrice.textContent = total.toLocaleString();
}

basketItems.forEach(function (item) {
  const minusBtn = item.querySelector(".minus-btn");
  const plusBtn = item.querySelector(".plus-btn");
  const quantity = item.querySelector(".quantity");

  const price = item.querySelector(".price");
  const bookCountPrice = item.querySelector(".book-count-price");

  // 상품 1개의 가격
  const bookPrice = Number(price.dataset.price);

  // 상품 합계 계산
  function updateBookPrice() {
    const count = Number(quantity.textContent);

    const total = bookPrice * count;

    bookCountPrice.textContent = `상품 합계 : ${total.toLocaleString()}원`;
  }

  // 처음 화면 표시
  updateBookPrice();

  // + 버튼
  plusBtn.addEventListener("click", function () {
    let count = Number(quantity.textContent);

    count++;

    quantity.textContent = count;

    updateBookPrice();
    updateTotalPrice();
  });

  // - 버튼
  minusBtn.addEventListener("click", function () {
    let count = Number(quantity.textContent);

    if (count > 1) {
      count--;

      quantity.textContent = count;

      updateBookPrice();
      updateTotalPrice();
    }
  });
});

// 페이지가 처음 열릴 때 총 금액 계산
updateTotalPrice();
