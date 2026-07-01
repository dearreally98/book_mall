const userId = document.querySelector("#userId");
const userPw = document.querySelector("#userPw");
const loginBtn = document.querySelector("#loginBtn");
const joinBtn = document.querySelector("#joinBtn");
const findBtn = document.querySelector("#findBtn");

loginBtn.addEventListener("click", function(){
    const id = userId.value.trim();
    const pw = userPw.value.trim();

    if (id === ""){
        alert("아이디를 입력하세요")
        userId.focus();
        return;
    }

    if (pw === ""){
        alert("비밀번호를 입력하세요")
        userPw.focus();
        return;
    }


});

 joinBtn.addEventListener("click",function(){
        location.href="register.html";

    });