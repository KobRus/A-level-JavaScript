function displayFavorites() {
    for(let i = 0; i < localStorage.length; i++) {
        
        let tempCard = JSON.parse(localStorage.getItem(localStorage.key(i)))
        
        let card = new Card(
            tempCard.name,
            tempCard.image,
            tempCard.rate,
            true,
            tempCard.language,
            tempCard.genres
            );
            card.setDataToHTML();   
    }
}

displayFavorites();