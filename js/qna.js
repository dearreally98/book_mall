const chatBox = document.querySelector(".chatBox");
const question = document.querySelector("#question");
const send = document.querySelector("#send");

let messages = [
    {
        type: "bot",
        text: "책에 대한 궁금한 것을 입력하세요.",
    }
];

function render() {
    chatBox.innerHTML = "";

    messages.forEach(function(message) {
        const div = document.createElement("div");
        div.className = message.type;
        div.textContent = message.text;

        chatBox.appendChild(div);

        chatBox.scrollTop = chatBox.scrollHeight;
    });
}

function sendMessage() {
    const text = question.value.trim();

    if (text === "") {
        return;
    }

    messages.push({
        type: "user",
        text: text
    });

    botAnswer(text);

    question.value = "";
    render();


}

function botAnswer(text) {
    let answer = "";

    if (text.includes("배송")) {
        answer = "배송은 주문 후 2~3일의 시간이 소요됩니다.";
    } else if (text.includes("가격")) {
        answer = "책 가격은 상세페이지를 확인해주시길 바랍니다.";
    } else if (text.includes("작가")) {
        answer = "작가 정보는 도서 정보를 확인해주세요.";
    } else {
        answer = "문의 내용을 확인했습니다.";
    }

    messages.push({
        type: "bot",
        text: answer,
    });
}

send.addEventListener("click", function() {
    sendMessage();
});

question.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
})

render();