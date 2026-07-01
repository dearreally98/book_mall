// 공통 정규 표현식
const nameRegExp = /^[가-힣]{2,5}$/;
const idRegExp = /^[A-Za-z][A-Za-z0-9]{4,7}$/;
const passwordRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegExp = /^010-\d{4}-\d{4}$/;

const editBtn = document.querySelector("#editBtn");
const inputs = document.querySelectorAll(".edit-input");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

let isEdit = false;

editBtn.addEventListener("click", function () {
  // 수정 모드
  if (!isEdit) {
    inputs.forEach(function (input) {
      input.disabled = false;
    });

    editBtn.textContent = "저장";
    isEdit = true;

    return;
  }

  // 저장 시 유효성 검사

  let isValid = true;

  if (!nameRegExp.test(nameInput.value)) {
    nameInput.nextElementSibling.textContent =
      "이름 형식이 올바르지 않습니다. (한글 2~5자)";

    isValid = false;
  } else {
    nameInput.nextElementSibling.textContent = "";
  }

  if (!emailRegExp.test(emailInput.value)) {
    emailInput.nextElementSibling.textContent =
      "이메일 형식이 올바르지 않습니다.";

    isValid = false;
  } else {
    emailInput.nextElementSibling.textContent = "";
  }

  if (!phoneRegExp.test(phoneInput.value)) {
    phoneInput.nextElementSibling.textContent =
      "전화번호 형식이 올바르지 않습니다. (010-0000-0000)";

    isValid = false;
  } else {
    phoneInput.nextElementSibling.textContent = "";
  }

  if (!isValid) {
    return;
  }

  // 저장 완료

  inputs.forEach(function (input) {
    input.disabled = true;
  });

  editBtn.textContent = "수정하기";
  isEdit = false;
});
