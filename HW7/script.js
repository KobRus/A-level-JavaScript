// task_1
// const newArr = ['Vasya', 'Petya', 'Alexey']

// delete newArr[1]

// const arr = newArr.filter(item => item)
// console.log(arr);

function removeUSer(arr, value) {
    // let index = arr.indexOf(value)
    // if(index > -1) {
    //     arr.splice(index, 1)
    // }
    // return arr
    return arr.filter(el => el !== value)
}

const array = ['Vasya', 'Petya', 'Alexey']

console.log(removeUSer(array, 'Petya'));


// ===========================================
// task_2

const div = document.createElement('div')
div.id = 'all_square'
document.body.append(div)

// first_square
const firstDiv = document.createElement('div')
firstDiv.id = 'first_square'
div.appendChild(firstDiv)

const firstSquare = document.getElementById('first_square')

firstSquare.style.background = '#FF8888'
firstSquare.style.width = '100px'
firstSquare.style.height = '100px'

// second_square
const secondDiv = document.createElement('div')
secondDiv.id = 'second_square'
div.appendChild(secondDiv)

const secondSquare = document.getElementById('second_square')

secondSquare.style.background = '#7E8AEB'
secondSquare.style.width = '100px'
secondSquare.style.height = '100px'
secondSquare.style.position = 'relative'
secondSquare.style.bottom = '40px'
secondSquare.style.left = '50px'
secondSquare.style.zIndex = '1'


// last_square
const lastdDiv = document.createElement('div')
lastdDiv.id = 'last_square'
div.appendChild(lastdDiv)

const lastSquare = document.getElementById('last_square')

lastSquare.style.background = '#4DEF99'
lastSquare.style.width = '100px'
lastSquare.style.height = '100px'
lastSquare.style.position = 'relative'
lastSquare.style.bottom = '60px'
lastSquare.style.left = '100px'

// ====================================================
// task_3

// holder
const divTask3 = document.createElement('div')
divTask3.className = 'holder'
document.body.append(divTask3)

const holder = document.getElementsByClassName('holder')
for (const holderItem of holder) {
    holderItem.style.margin = '0 auto'
    holderItem.style.marginTop = '100px'
    holderItem.style.width = '50%'
    holderItem.style.border = 'solid #000'
    holderItem.style.borderRadius = '30px 30px 0 0'
    holderItem.style.display = 'flex'
    holderItem.style.overflow = 'hidden'
    holderItem.style.flexWrap = 'wrap'
    holderItem.style.textAlign = 'center'
    holderItem.style.flexShrink = '0'
    holderItem.style.height = '300px'
}

// first_item
const divItem = document.createElement('div')
divItem.className = 'item'
divTask3.appendChild(divItem)

const firstItem = document.querySelector('div.holder div:nth-child(1)')
firstItem.textContent = '1'
firstItem.style.minWidth = '50%'
firstItem.style.order = '-3'
firstItem.style.background = '#FD644D'
firstItem.style.display = 'flex'
firstItem.style.justifyContent = 'center'
firstItem.style.alignItems = 'center' 

// second_item
const divSecondItem = document.createElement('div')
divSecondItem.className = 'item'
divTask3.appendChild(divSecondItem)

const secondItem = document.querySelector('div.holder div:nth-child(2)')
secondItem.innerHTML = '2'
secondItem.style.width = '33.4%'
secondItem.style.background = '#4983B2'
secondItem.style.flexGrow = '1'
secondItem.style.display = 'flex'
secondItem.style.justifyContent = 'center'
secondItem.style.alignItems = 'center' 

// third_item
const divThirdItem = document.createElement('div')
divThirdItem.className = 'item'
divTask3.appendChild(divThirdItem)

const thirdItem = document.querySelector('div.holder div:nth-child(3)')
thirdItem.innerHTML = '3'
thirdItem.style.width = '33.4%'
thirdItem.style.order = '-1'
thirdItem.style.background = '#663797'
thirdItem.style.flexGrow = '1'
thirdItem.style.display = 'flex'
thirdItem.style.justifyContent = 'center'
thirdItem.style.alignItems = 'center' 


// fourth_item
const divFourthItem = document.createElement('div')
divFourthItem.className = 'item'
divTask3.appendChild(divFourthItem)

const fourtItem = document.querySelector('div.holder div:nth-child(4)')
fourtItem.innerHTML = '4'
fourtItem.style.width ='33.2%'
fourtItem.style.background = '#0E7F12'
fourtItem.style.flexGrow = '1'
fourtItem.style.display = 'flex'
fourtItem.style.justifyContent = 'center'
fourtItem.style.alignItems = 'center'


// five_item
const divFiveItem = document.createElement('div')
divFiveItem.className = 'item'
divTask3.appendChild(divFiveItem)

const fiveItem = document.querySelector('div.holder div:nth-child(5)')
fiveItem.innerHTML = '5'
fiveItem.style.minWidth = '50%'
fiveItem.style.order = '-2'
fiveItem.style.background ='#FDA429'
fiveItem.style.display = 'flex'
fiveItem.style.justifyContent = 'center'
fiveItem.style.alignItems = 'center'

// =================================================================
// task_4



function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}

function modificator (fn) {
    fn('test', 'sample')
}

const testFunc = () => modificator(sampleFunc)

testFunc();


// ====================================================================
const group = [
    { name: "Ivan", lastName: "Petrov", age: 18, notebook: false},
    { name: "Oleg", lastName: "Petrov", age: 20, notebook: true}
];

function getStudentsList ( arrayOfStudents ) {
    arrayOfStudents.forEach(element => {
        const arr = Object.entries(element)
        let result = ''
        arr.forEach(item => result += ` ${item[0]} - ${item[1]},`)
        console.log(result);
    });
}

getStudentsList(group)