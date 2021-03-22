const input = document.getElementById('input')
const btn = document.getElementById('btn')
const btnFilms = document.getElementById('btnFilms')


let url = 'http://api.tvmaze.com/search/shows?q=';
let searchWord = '';

input.addEventListener('change', (e) => {
        searchWord = e.target.value;
})


btn.addEventListener('click', () => {

    if(searchWord == undefined || searchWord == null || searchWord == '') {
        return
    }

    let languageFilter = document.getElementById('languageFilter').value;
    let genresFilter = document.getElementById('genresFilter').value;

    clearList()
    getData(searchWord, languageFilter, genresFilter)
})



// dataHandler

function getRandomFilms() {
    getData('New', 'Select language', 'Select genre')
}

getRandomFilms()

function clearList () {
    let mainPost= document.getElementById('mainPost')
    mainPost.innerText = '';
}

function createCard(item) {
    const card = new Card(item.show.name,
        item.show.image.original,
        item.show.rating.average,
        false,
        item.show.language,
        item.show.genres,
        item.show.summary,
        item.show.premiered)

    card.setDataToHTML()
}


function getData(searchWord, languageFilter, genresFilter) {
    let query = url + searchWord;
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
                        createCard(item);
                    }
                }
            }); 
        })
        .catch((err) => {
            console.log('Fetch Error', err);
        })
}