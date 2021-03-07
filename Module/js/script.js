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
                const modalPage = document.createElement('div')
                const shortPost = document.createElement('div')
                const postImage = document.createElement('div')
                const postInfo = document.createElement('div')
                const postTitle = document.createElement('h3')
                const postRating = document.createElement('p')
                const postStars = document.createElement('span')
                const postLanguage = document.createElement('p')
                const img = document.createElement('img')
                
    
                img.setAttribute('src', item.show.image.medium) 
                postTitle.innerHTML = item.show.name
                postRating.innerHTML = item.show.rating.average
                postLanguage.innerHTML = item.show.language
    
                modalPage.classList = 'modalPage'
                modalPage.id = 'myModalPage'
                shortPost.classList = 'shortPost'
                postImage.classList = 'postImage'
                postInfo.classList = 'postInfo'
                postRating.classList = 'postRating'
                postLanguage.classList = 'postLanguage'
    
                mainPost.appendChild(modalPage)
                mainPost.appendChild(shortPost)
                shortPost.appendChild(postImage)
                postImage.appendChild(img)
                shortPost.appendChild(postInfo)
                postInfo.prepend(postTitle)
                postInfo.appendChild(postStars)
                postStars.append(postRating)
                postInfo.append(postLanguage)
            }); 
        })
    
            .catch((err) => {
                console.log('Fetch Error', err);
            })
}