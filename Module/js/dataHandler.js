function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFilms() {
    const wordArr = ['new', 'blood', 'love', 'comedy', 'wars', 'war'];
    let rand = getRandomInt(wordArr.length);
    // console.log(wordArr[rand]);
    getData(wordArr[rand], 'English');
}

function clearList () {
    let mainPost= document.getElementById('mainPost')
    mainPost.innerText = ''
}
function createCard(item) {
    let card = new Card(item.show.name,
        item.show.image.medium,
        item.show.rating.average,
        false,
        item.show.language);

    card.setDataToHTML();
}
function getData(searchWord, language) {
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
                // console.log(language);             
                if(item.show.language == language)
                {
                    createCard(item);
                }
            }); 
        })

        .catch((err) => {
            console.log('Fetch Error', err);
        })
}