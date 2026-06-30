const genres = ['변신', '죄와벌', '데미안', '날개', '모비딕', '폭풍의 언덕'];

const main = document.querySelector('#main');
const searchBar = document.querySelector('#searchBar');

function render(list) {
  main.innerHTML = '';

  list.forEach((genre) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = genre;
    main.appendChild(card);
  });
}

// 👉 처음은 전체 보여줘야 정상 UX
// render(genres);

searchBar.addEventListener('input', function () {
  const keyword = searchBar.value.trim();

  if (keyword === '') {
    main.innerHTML = '';
    return;
  }

  const filtered = genres.filter((genre) => genre.includes(keyword));

  render(filtered);
});
