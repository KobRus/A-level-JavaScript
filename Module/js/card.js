class Card {
    constructor(name, image, rate, favorite, language, genres, summary, premiered) {
        this.name = name;
        this.image = image;
        this.rate = rate;
        this.favorite = favorite;
        this.language = language;
        this.genres = genres;
        this.summary = summary;
        this.premiered = premiered
    }

    setDataToHTML() {
        const shortPost = document.createElement('div')
        const postImage = document.createElement('div')
        const postTitle = document.createElement('a')
        const postInfo = document.createElement('div')
        const postRating = document.createElement('p')
        const postStars = document.createElement('span')
        const postLanguage = document.createElement('p')
        const postFavorite = document.createElement('span')
        const img = document.createElement('img')
        const postGenres = document.createElement('p')

        img.setAttribute('src', this.image)
        postTitle.href = '#'
        postTitle.innerHTML = this.name;
        postRating.innerHTML = this.rate;
        postLanguage.innerHTML = this.language;
        postGenres.innerText = this.genres.join(', ');

        shortPost.classList = 'shortPost'
        postImage.classList = 'postImage'
        postInfo.classList = 'postInfo'
        postStars.classList = 'postStars'
        postRating.classList = 'postRating'
        postTitle.classList = 'postTitle'
        postGenres.classList = 'postGenres'
        postLanguage.classList = 'postLanguage'
        postFavorite.classList = 'postFavorite'

        mainPost.appendChild(shortPost)
        shortPost.appendChild(postImage)
        postImage.appendChild(img)
        postImage.append(postTitle)
        postTitle.append(postGenres)
        shortPost.appendChild(postInfo)
        postInfo.appendChild(postStars)
        postStars.append(postRating)
        postInfo.append(postLanguage)
        postLanguage.append(postFavorite)


        // addEventListener
        postFavorite.addEventListener('click', () => {
            this.setFavorite(postFavorite);
        });

        postImage.addEventListener('click', () => {
            this.popUpOpen(postImage)
        })


        // this.popUpOpen()
        this.setDefaultRate(postRating);
        this.setGenre(postGenres)
        this.setDefaultFavorite(this.favorite, postFavorite);  
        this.checkLike(postFavorite)
    }

    popUpOpen() {
        const popUp = document.createElement('div')
        const popUpBody = document.createElement('div')
        // const popUpContent = document.createElement('div')
        // const popUpArea = document.createElement('div')

        let summary= ''
        if (this.summary?.length > 150) {
            summary = this.summary.slice(0, 150)
        }
        
        popUpBody.innerHTML += `
            <div><img class="popUp__img" src=${this.image}></div>
            <div class="popUp__info">
                <span id="popUp__close">&times;</span>
                <p class="popUp__filmName">${this.name}</p>
                <p class="popUp__filmPremiered">${this.premiered}</p>
                <p class="popUp__filmGenre">${this.genres.join(', ')}</p>
                <p class="popUp__filmSummary">${summary} ...</p>
                <p class="popUp__filmLang">${this.language}</p>
            </div>
        `

        popUp.setAttribute('class', 'pop__up')
        popUpBody.setAttribute('class', 'popUp__body')
        // popUpContent.setAttribute('class', 'popUp__content')

        document.body.append(popUp)
        popUp.appendChild(popUpBody)
        // popUpBody.appendChild(popUpContent)

        popUp.classList.add('open')

        
        // popUpClose

        const popUpClose = document.getElementById('popUp__close') 
        popUpClose.addEventListener('click', () => {
            // popUp.classList.remove('open')
            popUp.remove()
            // setTimeout(() => {
            //     popUp.remove()
            // }, 200)
        })
    }

    setDefaultFavorite(favorite, postFavorite) {
        if(favorite) {
            postFavorite.style.backgroundImage = 'url(../image/heart2.png)';
        }
        else {
            postFavorite.style.backgroundImage = 'url(../image/heart1.png)';
        }
    }

    setFavorite(postFavorite) {
        if(!this.favorite) {
            postFavorite.style.backgroundImage = 'url(../image/heart2.png)';
            this.favorite = true;
            localStorage.setItem(this.name, JSON.stringify(this));
        }
        else {
            postFavorite.style.backgroundImage = 'url(../image/heart1.png)';
            this.favorite = false;
            localStorage.removeItem(this.name);
        }     
    }

    checkLike(postFavorite){
        if(localStorage.getItem(this.name)) {
            postFavorite.style.backgroundImage = 'url(../image/heart2.png)';
        }
    }

    setDefaultRate(postRating) {
        if(this.rate == null || this.rate == '') {
            postRating.innerHTML = 'Rating will be soon';
        }
    }

    setGenre(postGenres) {
        if(this.genres == null || this.genres == '') {
            postGenres.innerHTML = 'Genres will be soon'
        }
    }
}