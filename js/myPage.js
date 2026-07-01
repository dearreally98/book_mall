// 공통 정규 표현식
const nameRegExp = /^[가-힣]{2,5}$/;
const idRegExp = /^[A-Za-z][A-Za-z0-9]{4,7}$/;
const passwordRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegExp = /^010-\d{4}-\d{4}$/;

const editBtn = document.querySelector("#editBtn");
const inputs = document.querySelectorAll(".edit-input");

let isEdit = false;

editBtn.addEventListener("click", function () {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");

  if (!isEdit) {
    inputs.forEach(function (input) {
      input.disabled = false;
    });

    editBtn.textContent = "저장";
    isEdit = true;
  } else {
    inputs.forEach(function (input) {
      input.disabled = true;
    });

    editBtn.textContent = "수정하기";
    isEdit = false;
  }

  if (!nameRegExp.test(name.value)) {
    name.nextElementSibling.textContent = "올바른 형식이 아닙니다.";
    return;
  }
});
