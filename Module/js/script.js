const input = document.getElementById('input')
const btn = document.getElementById('btn')
const btnFilms = document.getElementById('btnFilms')

const url = 'http://api.tvmaze.com/search/shows?q='

input.addEventListener('change', (e) => {
    searchWord = e.target.value
})

btn.addEventListener('click', () => {
    clearList()
    getData(searchWord)
})


function getRandomFilms() {
    getData('new')
}

getRandomFilms()

function clearList () {
    let mainPost= document.getElementById('mainPost')
    mainPost.innerText = ''
}

function getData(searchWord) {
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
                // const modalPage = document.createElement('div')
                const shortPost = document.createElement('div')
                const postImage = document.createElement('div')
                const postTitle = document.createElement('a')
                const postInfo = document.createElement('div')
                const postRating = document.createElement('p')
                const postStars = document.createElement('span')
                const postLanguage = document.createElement('p')
                const postFavorite = document.createElement('span')
                const img = document.createElement('img')
                
                img.setAttribute('src', item.show.image.medium) 
                postTitle.href = '#'
                postTitle.innerHTML = item.show.name
                postRating.innerHTML = item.show.rating.average
                postLanguage.innerHTML = item.show.language
    
                // modalPage.classList = 'modalPage'
                // modalPage.id = 'myModalPage'
                shortPost.classList = 'shortPost'
                postImage.classList = 'postImage'
                postInfo.classList = 'postInfo'
                postStars.classList = 'postStars'
                postRating.classList = 'postRating'
                postTitle.classList = 'postTitle'

                if(item.show.rating.average == null || item.show.rating.average == '') {
                    postRating.innerHTML = 'Rating will be soon'
                }

                postLanguage.classList = 'postLanguage'
                postFavorite.classList = 'postFavorite'
    
                // mainPost.appendChild(modalPage)
                mainPost.appendChild(shortPost)
                shortPost.appendChild(postImage)
                postImage.appendChild(img)
                postImage.append(postTitle)
                shortPost.appendChild(postInfo)
                postInfo.appendChild(postStars)
                postStars.append(postRating)
                postInfo.append(postLanguage)
                postLanguage.append(postFavorite)

                let test
                postFavorite.addEventListener('click', (e) => {
                    test = e.target
                    console.log(test);
                })
            }); 
        })
    
            .catch((err) => {
                console.log('Fetch Error', err);
            })
}