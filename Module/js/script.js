const input = document.getElementById('input');
const btn = document.getElementById('btn');
const btnFilms = document.getElementById('btnFilms');

let url = 'http://api.tvmaze.com/search/shows?q=';
let searchWord = '';

input.addEventListener('change', (e) => {
        searchWord = e.target.value;
});

btn.addEventListener('click', () => {

    if(searchWord === undefined || searchWord === null) {
        return;
    }

    let languageFilter = document.getElementById('languageFilter').value;
    let genresFilter = document.getElementById('genresFilter').value

    clearList();
    getData(searchWord, languageFilter, genresFilter);
});


// dataHandler

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

function getRandomFilms() {
    // const wordArr = ['new', 'blood', 'love', 'comedy', 'wars', 'war'];
    // let rand = getRandomInt(wordArr.length);
    // console.log(wordArr[rand]);
    getData('War', 'English', 'Genres');
}

getRandomFilms();

function clearList () {
    let mainPost= document.getElementById('mainPost')
    mainPost.innerText = ''
}

function createCard(item) {
    const card = new Card(item.show.name,
        item.show.image.medium,
        item.show.rating.average,
        false,
        item.show.language,
        item.show.genres);

    card.setDataToHTML();
}

function getData(searchWord, languageFilter, genresFilter) {
    let query = url + searchWord
    fetch(query)
        .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
        )
    
        .then((data) => {
            data.forEach((item) => {  
                if(item.show.language == languageFilter || languageFilter == 'Select language') {
                    if(item.show.genres.some((item) => item == genresFilter) || genresFilter == 'Select genre'){
                        createCard(item)
                    }
                }
            }); 
        })

        .catch((err) => {
            console.log('Fetch Error', err)
        })
}