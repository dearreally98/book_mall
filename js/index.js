const genres = [
  {
    genre: "판타지",
    book: [
      {
        title: "전지적 작가 시점",
        author: "싱숑",
        page: "bookdetail1.html"
      },
      {
        title: "눈물을 마시는 새",
        author: "이영도",
        page: "bookdetail1.html"
      },
      {
        title: "해리포터",
        author: "J.K.롤링",
        page: "bookdetail1.html"
      },
      {
        title: "반지의 제왕",
        author: "J.R.R.톨킨",
        page: "bookdetail1.html"
      },
      {
        title: "얼음과 불의 노래",
        author: "조지R.R.마틴",
        page: "bookdetail1.html"
      },
      {
        title: "가재가 노래하는 곳",
        author: "델리아 오언스",
        page: "bookdetail1.html"
      },
    ]
  },
  {
    genre: "무협",
    book: [
      {
        title: "사조영웅전",
        author: "김용",
        page: "bookdetail2.html"
      },
      {
        title: "화산귀환",
        author: "비가",
        page: "bookdetail2.html"
      },
      {
        title: "무당마검",
        author: "한백림",
        page: "bookdetail2.html"
      },
      {
        title: "신조협려",
        author: "김용",
        page: "bookdetail2.html"
      },
      {
        title: "군림천하",
        author: "용대운",
        page: "bookdetail2.html"
      },
      {
        title: "의천도룡기",
        author: "김용",
        page: "bookdetail2.html"
      },
    ]
  },
  {
    genre: "자기계발",
    book: [
      {
        title: "아주 작은 습관의 힘",
        author: "제임스 클리어",
        page: "bookdetail3.html"
      },
      {
        title: "타이탄의 도구들",
        author: "팀 페리스",
        page: "bookdetail3.html"
      },
      {
        title: "역행자",
        author: "자청",
        page: "bookdetail3.html"
      },
      {
        title: "원씽",
        author: "게리 겔러",
        page: "bookdetail3.html"
      },
      {
        title: "그릿",
        author: "앤젤라 더크워스",
        page: "bookdetail3.html"
      },
      {
        title: "인간관계론",
        author: "데일 카네기",
        page: "bookdetail3.html"
      },
    ]
  },
  {
    genre: "로맨스",
    book: [
      {
        title: "오만과 편견",
        author: "제인 오스틴",
        page: "bookdetail4.html"
      },
      {
        title: "미 비포 유",
        author: "조조 모예스",
        page: "bookdetail4.html"
      },
      {
        title: "상수리나무 아래",
        author: "김수지",
        page: "bookdetail4.html"
      },
      {
        title: "사내 맞선",
        author: "해화",
        page: "bookdetail4.html"
      },
      {
        title: "한낮의 유성",
        author: "야마모리 미카",
        page: "bookdetail4.html"
      },
      {
        title: "노르웨이의 숲",
        author: "무라카미 하루키",
        page: "bookdetail4.html"
      },
    ]
  },
  {
    genre: "추리",
    book: [
      {
        title: "그리고 아무도 없었다",
        author: "아가사 크리스티",
        page: "bookdetail5.html"
      },
      {
        title: "용의자 X의 헌신",
        author: "히가시노 게이고",
        page: "bookdetail5.html"
      },
      {
        title: "네가 있는 마을",
        author: "에독스 비장",
        page: "bookdetail5.html"
      },
      {
        title: "십각관의 살인",
        author: "아야츠지 유키토",
        page: "bookdetail5.html"
      },
      {
        title: "셜록홈즈",
        author: "아서 코난 도일",
        page: "bookdetail5.html"
      },
      {
        title: "봉제인형 살인사건",
        author: "다니엘 콜",
        page: "bookdetail5.html"
      },
    ]
  },
  {
    genre: "SF",
    book: [
      {
        title: "삼체",
        author: "류츠신",
        page: "bookdetail6.html"
        
      },
      {
        title: "프로젝트 헤일메리",
        author: "앤디 위어",
        page: "bookdetail6.html"
      },
      {
        title: "콘택트",
        author: "칼 세이건",
        page: "bookdetail6.html"
      },
      {
        title: "멋진 신세계",
        author: "올더스 헌슬리",
        page: "bookdetail6.html"
      },
      {
        title: "다이브",
        author: "남유하",
        page: "bookdetail6.html"
      },
      {
        title: "다이버전트",
        author: "베로니카 로스",
        page: "bookdetail6.html"
      },
    ]
  },
];

const main = document.querySelector('#main');
const searchBar = document.querySelector('#searchBar');

function render(list) {
  main.innerHTML = '';

  list.forEach((book) => {
    const card = document.createElement('a');
    card.className = 'card';

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    `;

    card.href = book.page;

    main.appendChild(card);
    console.log(book.page);
  });
}


searchBar.addEventListener('input', function () {
  const keyword = searchBar.value.trim();

  if (keyword === '') {
    main.innerHTML = '';
    return;
  }


  const books = genres
    .flatMap((item) => item.book)
    .filter((book) => book.title.includes(keyword));


  if (books.length > 0) {
    render(books);
    return;
  }


  const genre = genres.find((item) =>
    item.genre.includes(keyword)
  );


  if (genre) {
    render(genre.book);
  }

});