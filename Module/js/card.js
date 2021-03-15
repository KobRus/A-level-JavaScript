class Card {
    constructor(name, image, rate, favorite, language, genres) {
        this.name = name;
        this.image = image;
        this.rate = rate;
        this.favorite = favorite;
        this.language = language;
        this.genres = genres;
    }

    setDataToHTML() {
        const popup = document.querySelector('.popup')
        const popupClose = document.querySelector('.popup__close')

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

        postFavorite.addEventListener('click', () => {
            this.setFavorite(postFavorite);
        });

        // test popUp
        postImage.addEventListener('click', () => {
            this.popUpOpen(postImage)
        })

        popupClose.addEventListener('click', () => {
            this.popUpClose(popupClose)
        })

        this.popUpOpen(postImage)
        this.popUpClose(popupClose)

        // test ////////////////////////////////////////////////

        this.setDefaultRate(postRating);
        this.setGenre(postGenres)
        this.setDefaultFavorite(this.favorite, postFavorite);  
        this.checkLike(postFavorite)
    }

    // test popUp
    popUpOpen() {
        popup.classList.add('open')
    }

    popUpClose() {
        popup.classList.remove('open')
    }
    // test ////////////////////////////////////////////////////

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