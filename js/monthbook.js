document.addEventListener("DOMContentLoaded", () => {

    const books = [
        {
        title: "카네기의 인간관계론",
        image: "../img/development_book.jpg",
        text: `인간관계는 친구를 만들고 적을 만들지 않는 것에서 시작된다.
        세계적인 투자자 워런 버핏의 인생을 바꾼 책이자, 누구나 꼭 읽어야 하는 필독서.`
        },
        {
        title: "눈물을 마시는 새",
        image: "../img/fantasy_book.jpg",
        text: `드래곤 라자로 한국 판타지 소설계의 정상에 선 이영도의 소설.
        작가가 창조한 신비롭고 독창적인 세계에서 네 명의 주인공들과 함께 판타지 세상을 모험해 보세요.`
        },
        {
        title: "의천도룡기",
        image: "../img/materialArts_book.jpg",
        text: `원명 교체기라는 혼란한 시대에 격량 많은 운명을 타고난 장무기가 절대 무공 비법을 통해
        강호 최고의 고수가 되기까지의 파란만장한 모험기`
        },
        {
        title: "그리고 아무도 없었다",
        image: "../img/reasoning_book.jpg",
        text: `<가디언>에서 선정한 애거서 크리스티의 최고 작품!
        전세계에서 가장 많이 팔리고 있는 미스터리 소설인 그리고 아무도 없었다를 만나 보세요.`
        },
        {
        title: "오만과 편견",
        image: "../img/romance_book.jpg",
        text: `세상에서 가장 사랑받는 제인 오스틴의 대표작.
        19세기 영국의 결혼관 및 사회상을 풍자와 유머, 아이러니를 통해 그려내고 인간의 보편적인 심리를 섬세하게 탐구한 소설입니다.`
        },
        {
        title: "멋진 신세계",
        image: "../img/sf_book.jpg",
        text: `인간이 계급에 따라 공장에서 제품처럼 생산되는 세계.
        20세기를 대표하는 영국 작가이자 문학비평가 올더스 헉슬리의 최고 작품이자 문제작을 지금 만나 보세요.`
        }
    ];

    const bookImg1 = document.getElementById("bookImg1");
    const bookTitle1 = document.getElementById("bookTitle1");
    const bookText1 = document.getElementById("bookText1");
    const bookImg2 = document.getElementById("bookImg2");
    const bookTitle2 = document.getElementById("bookTitle2");
    const bookText2 = document.getElementById("bookText2");
    const randomBtn = document.getElementById("randomBtn");

    randomBtn.addEventListener("click", () => {
        let i1= Math.floor(Math.random() * books.length);
        let i2;

        do{
            i2= Math.floor(Math.random() * books.length);
        } while (i1 === i2);

        bookImg1.src = books[i1].image;
        bookTitle1.textContent = books[i1].title;
        bookText1.textContent = books[i1].text;

        bookImg2.src = books[i2].image;
        bookTitle2.textContent = books[i2].title;
        bookText2.textContent = books[i2].text;
    });

});