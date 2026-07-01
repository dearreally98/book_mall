const nameInput = document.querySelector("#name");
const userId = document.querySelector("#userId");
const userPw = document.querySelector("#userPw");

const joinBtn = document.querySelector("#joinBtn");
const toLogin = document.querySelector("#toLogin");
const backward = document.querySelector("#backward");

joinBtn.addEventListener("click", function () {
    const nameValue = nameInput.value.trim();
    const idValue = userId.value.trim();
    const pwValue = userPw.value.trim();

    const gender = document.querySelector("input[name='gender']:checked");

    if (nameValue === "") {
        alert("이름을 입력하세요.");
        nameInput.focus();
        return;
    }

    if (gender === null) {
        alert("성별을 선택하세요.");
        return;
    }

    if (idValue === "") {
        alert("아이디를 입력하세요.");
        userId.focus();
        return;
    }

    if (pwValue === "") {
        alert("비밀번호를 입력하세요.");
        userPw.focus();
        return;
    }

    if (idValue.length < 4) {
        alert("아이디는 4글자 이상 입력하세요.");
        userId.focus();
        return;
    }

    if (pwValue.length < 6) {
        alert("비밀번호는 6글자 이상 입력하세요.");
        userPw.focus();
        return;
    }

    alert(`${nameValue}님 회원가입이 완료되었습니다!`);

    location.href = "login.html";
});

toLogin.addEventListener("click", function () {
    location.href = "login.html";
});

backward.addEventListener("click", function () {
    history.back();
});