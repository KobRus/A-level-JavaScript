// task_1

const text = document.createElement('p')
const image = document.createElement('img')
text.innerHTML = 'Click me'
image.src = 'https://i.pinimg.com/originals/5b/94/46/5b944664a9953b11692d19372a1b74df.jpg'
image.style.width = '100px'
image.style.display = 'none'

document.body.append(text)
document.body.append(image)

text.addEventListener('click', () => {
    image.style.display = 'block'
})

image.addEventListener('click', () => {
    image.style.width = '100px'
    image.style.display = 'none'
})

image.addEventListener('mouseover', () => {
    image.style.width = '200px'
    image.style.transition = '2s'
    image.style.marginBottom = '50px'
})

// task_2

const arr = [1, 2, 3, 0, 4, 5, 6]

let newArr = 0

let result = arr.reduceRight(function(sum, elem) {
    if(elem === 0) {
        newArr = sum
    } else {
        return sum + elem
    }
})
if(newArr === undefined) {
    newArr = result
}
console.log(newArr);

// task_3

const arrTask3 = [1, 2, 3, 0, 4, 5, 6]

let newArrTask3 = 1;

let res = arrTask3.reduce(function(sum, elem) {
    if(sum > 10) {
        console.log(newArrTask3);
        return
    }else {
        newArrTask3++
        return sum + elem
    }
})

// task_4

const input = document.createElement('input')
input.setAttribute('type', 'text')

const button = document.createElement('button')
button.setAttribute('type', 'button')
button.setAttribute('value', 'button')


document.body.append(input)
document.body.append(button)
button.innerHTML = 'Click me'

const func = function(event) {
    console.log(event.target.value);
}

let data

input.addEventListener('change', (e) => {
    data = e.target.value
})

button.addEventListener('click', () => {
    console.log(data)
})

// task_5

const elem = document.getElementsByTagName('a')
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('mouseover', fn)
}

function fn() {
    this.innerHTML = this.innerHTML + '(' + this.href + ')'
    this.removeEventListener('mouseover', fn)
}

// task_6

const div = document.createElement('div')

const btn = document.createElement('button')
btn.setAttribute('type', 'button')

const p = document.createElement('p')

document.body.append(div)
div.appendChild(btn)
div.appendChild(p)

div.style.marginTop = '50px'
btn.innerHTML = 'Нажмите, чтобы спрятать текс'
p.innerHTML = 'TEXT'

btn.addEventListener('click', () => {
    p.style.display = 'none'
})


// task_7

const lastInput = document.createElement('input')
lastInput.setAttribute('placeholder', 'px')
lastInput.setAttribute('type', 'text')

document.body.append(lastInput)
lastInput.style.marginTop = '30px'

const lastButton = document.createElement('button')


document.body.append(lastButton)
lastButton.innerHTML = 'START'
lastButton.style.marginLeft = '5px'
lastButton.style.borderRadius = '10px'
lastButton.style.background = 'orange'

const circle = document.createElement('div')
document.body.append(circle)
circle.style.width = '100px'
circle.style.height = '100px'
circle.style.background = 'red'
circle.style.marginTop = '30px'
circle.style.borderRadius = '50%'

let value = ''

lastInput.addEventListener('change', (e) => {
        const val = Number(e.target.value)
        if(val >= 0  && val < 600) {
            value = val;
        } else {
            lastInput.value = 'Error'
        }
})

lastButton.addEventListener('click', () => {
    circle.style.transform = `translateX(${value}px)`
    circle.style.transition = '1s'
})