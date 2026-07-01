const genres = ['변신', '죄와벌', '데미안', '날개', '모비딕', '폭풍의 언덕'];

const main = document.querySelector('#main');
const searchBar = document.querySelector('#searchBar');

function render(list) {
  main.innerHTML = '';

  list.forEach((genre) => {
    const card = document.createElement('a');
    card.className = 'card';

    card.textContent = genre;
    card.href = `detail.html?title=${encodeURIComponent(genre)}`;

    main.appendChild(card);
  });
}

searchBar.addEventListener('input', function () {
  const keyword = searchBar.value.trim();

  if (keyword === '') {
    main.innerHTML = '';
    return;
  }

  const filtered = genres.filter((genre) => genre.includes(keyword));

  render(filtered);
});
