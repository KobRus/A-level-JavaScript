const input = document.getElementById('input');
const btn = document.getElementById('btn');
const btnFilms = document.getElementById('btnFilms');

const url = 'http://api.tvmaze.com/search/shows?q=';
let searchWord = '';

getRandomFilms();



input.addEventListener('change', (e) => {
    searchWord = e.target.value;
});

btn.addEventListener('click', () => {

    if(searchWord === undefined || searchWord === '') {
        console.log("empty");
        return;
    }

    let languageFilter = document.getElementById('firstSelect').value;

    clearList();
    getData(searchWord, languageFilter);
});