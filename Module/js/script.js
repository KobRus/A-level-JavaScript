const input = document.getElementById('input')
const btn = document.getElementById('btn')
const pageNext = document.getElementsByClassName('.page')
const btnNext = document.getElementById("test3");

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

function createCardForSearch(item) {
    const newCard = new Card(item.show.name,
        item.show.image.original,
        item.show.rating.average,
        false,
        item.show.language,
        item.show.genres,
        item.show.summary,
        item.show.premiered)

    newCard.setDataToHTML()
}


const apiUrl = "http://api.tvmaze.com/shows"
const searchApiUrl = " http://api.tvmaze.com/search/shows"
let shows = []
let currentPage = 0
let searchQuery = ""

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const fetchData = async (type) => {
    if (type === 'search') {
        const url = `${searchApiUrl}?q=${searchQuery}`
        const response = await fetch(url)
        const res = await response.json()
        currentPage++
        shows = res.splice(0, 10)
        shows.forEach((item) => {
            let languageFilter = document.getElementById('languageFilter').value;
            let genresFilter = document.getElementById('genresFilter').value;
            if(item.show.language == languageFilter || languageFilter == 'Select language') {
                if(item.show.genres.some((item) => item == genresFilter) || genresFilter == 'Select genre'){
                    createCardForSearch(item);
                }
            }
        })
    }else {
        const url = `${apiUrl}?page=${currentPage + 1}`
        const response = await fetch(url)
        const res = await response.json()
        currentPage++
        shows = res.splice(0, 10).forEach((item) => {createCard(item)})
    }
}

const nextHandler = () => {
    fetchData()
    clearList()
}

input.addEventListener('change', () => {
    searchQuery = input.value
})

btnNext.addEventListener("click", nextHandler)

btn.addEventListener('click', () => {
    fetchData('search')
    searchQuery = ''
    clearList()
})