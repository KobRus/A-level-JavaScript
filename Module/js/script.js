const input = document.getElementById('input')
const btn = document.getElementById('btn')
const btnFilms = document.getElementById('btnFilms')


// let finderUrl = 'http://api.tvmaze.com/shows?q=';
const mainUrl = 'http://api.tvmaze.com/shows?page=1';
let searchWord = '';

input.addEventListener('change', (e) => {
    searchWord = e.target.value;
})


btn.addEventListener('click', () => {

    if(searchWord == undefined || searchWord == null) {
        return;
    }
    
    // test
    if(searchWord == ''){
        // getData('Select language', 'Select genre')
    }

    let languageFilter = document.getElementById('languageFilter').value;
    let genresFilter = document.getElementById('genresFilter').value;

    clearList()
    getData(searchWord, languageFilter, genresFilter)
})



// dataHandler

function clearList () {
    let mainPost= document.getElementById('mainPost')
    mainPost.innerText = '';
}

function createCard(item) {
    const card = new Card(item.name,
        item.image.original,
        item.rating.average,
        false,
        item.language,
        item.genres,
        item.summary,
        item.premiered)

    card.setDataToHTML()
}


// function getData(searchWord, languageFilter, genresFilter) {
    // let query = url + searchWord;
    fetch(mainUrl)
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
            let sliceData = data.slice(0, 10)
            sliceData.forEach((item) => {  
                createCard(item)
                // if(item.show.language == languageFilter || languageFilter == 'Select language') {
                //     if(item.show.genres.some((item) => item == genresFilter) || genresFilter == 'Select genre'){
                //         createCard(item);
                //     }
                // }
            }); 
        })
        .catch((err) => {
            console.log('Fetch Error', err);
        })
// }
