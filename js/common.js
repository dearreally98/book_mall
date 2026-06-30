const bookRank = document.querySelector('#bookRank');

const books = [
  '1위: 변신',
  '2위: 죄와 벌',
  '3위: 데미안',
  '4위: 날개',
  '5위: 모비딕',
  '6위: 폭풍의 언덕',
  '7위: 돈키호테',
  '8위: 홍루몽',
  '9위: 지옥변',
  '10위: 이방인',
  '11위: 오디세우스',
  '12위: 파우스트',
];

let index = 0;

function changeRank() {
  bookRank.textContent = books[index];
  index++;

  if (index >= books.length) {
    index = 0;
  }
}

changeRank();
setInterval(changeRank, 2000);
