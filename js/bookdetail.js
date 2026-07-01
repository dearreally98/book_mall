//배송 예정일
const orderDate= document.getElementById("orderDate");
const radios= document.querySelectorAll("input[name='delivery']");
const deliveryResult= document.getElementById("deliveryResult");

function deliveryDate(){
    if(orderDate.value === ""){
        alert("주문 날짜를 선택해 주세요.");
        return;
    }

    const date= new Date(orderDate.value);

    let plusDay= 1;

    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            plusDay= Number(radios[i].value);
        }
    }

    date.setDate(date.getDate()+plusDay);

    deliveryResult.textContent=
        "도착 예정일 : " +
        date.getFullYear() + "년 " +
        (date.getMonth() + 1) + "월 " +
        date.getDate() + "일";
}

orderDate.addEventListener("change", deliveryDate);

for(let i=0; i<radios.length; i++){
    radios[i].addEventListener("change", deliveryDate);
}

//버튼들 알림(장바구니, 주문, 대여)
const basket= document.getElementById("basket");
const order= document.getElementById("order");
const rentalOrder= document.getElementById("rentalOrder");

basket.addEventListener("click", function(){
    alert("선택된 책이 장바구니에 추가되었습니다.");
});
order.addEventListener("click", function(){
    alert("주문 완료되었습니다.");
});
rentalOrder.addEventListener("click", function(){
    alert("대여 완료되었습니다.");
})