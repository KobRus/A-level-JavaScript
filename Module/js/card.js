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
        // const close = document.getElementById('close') 
        
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

        // postImage.addEventListener('click', () => {
        //     this.getModal(postImage)
        // })

        // close.addEventListener('click', () => {
        //     this.closeModal()
        // })
        
        this.setDefaultRate(postRating);
        this.setGenre(postGenres)
        this.setDefaultFavorite(this.favorite, postFavorite);  
        this.checkLike(postFavorite)
    }

    setDefaultFavorite(favorite, postFavorite) {
        if(favorite) {
            postFavorite.style.backgroundImage = 'url(../image/heart2.png)';
        }
        else {
            postFavorite.style.backgroundImage = 'url(../image/heart1.png)';
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

    // getModal() {
    //     modal.style.display = 'block'
    // }  

    // closeModal() {
    //     modal.style.display = 'none'
    // }
}