const section = document.createElement('div')
section.id = 'section'
document.body.prepend(section)

section.style.display = 'flex'
section.style.flexWrap = 'wrap'

const promise =  fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')

promise
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
            const imageContainer = document.createElement('div')
            const textContainer = document.createElement('div')
            const img = document.createElement('img')
            img.setAttribute('src', item.image_url) 
            imageContainer.appendChild(img)

            img.style.width = '100px'
            img.style.margin = '20px'

            textContainer.innerHTML = item.description

            section.appendChild(imageContainer)
            section.appendChild(textContainer)

            imageContainer.style.width = '40%'
            imageContainer.style.paddingLeft = '100px'

            textContainer.style.width = '50%'
            textContainer.style.alignItems = 'center'
            textContainer.style.display = 'flex'

            img.addEventListener('click', () => {
                let bearId = JSON.stringify(item.id)
                localStorage.setItem('key', bearId)
            })
        }); 
    })

        .catch((err) => {
            console.log('Fetch Error', err);
        })