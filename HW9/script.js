// task_1
function fib(n) {
    if(n < 2) return n;
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(6));

function fib(n) {
    let a = 1,
    b = 1
    for(let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fib(8));

// task_2
const sum = addTo(4)

function addTo(n) {
    if(n === 0) return 0;
    return n + addTo(n - 1)
}
console.log(sum);

const newSum = add(5)

function add(n) {
    let newSum = 0
    for(let i = 1; i <=n; i++) {
        newSum += i
    }
    return newSum
}
console.log(newSum);

// task_3

// Используя setInterval
function printNumbers(from, to) {
    let timerId = setInterval(() => {
        console.log(from);
        if(from === to){
            clearInterval(timerId)
        }
        from++
    }, 1000)
}

printNumbers(1, 5)


// Используя рекурсивный setTimeout
function printNumber(from, to) {
    setTimeout(function go() {
        console.log(from);
        if(from < to) {
            setTimeout(go, 1000)
        }
        from++
    }, 6000);
}

printNumber(6, 10)

// task_4

let i = 0

let id = setInterval (
    function() {
        i++
        console.log("Прошло " + i + " сек.")
        if(i === 5) {
            clearInterval(id)
        }
    },1000
)

// task_5

const li = document.getElementsByClassName('li')

const inp = document.getElementById('inp')

const resSum = document.getElementById('sum')


const resOfSum = []

for (const holderLi of li) {
    if(!isNaN(holderLi.innerHTML)) {
        resOfSum.push(Number(holderLi.innerHTML))
    }
}

resSum.addEventListener('click', () => {
    inp.value = `${resOfSum.join(' + ')} = ${resOfSum.reduce((accum, current) => accum + current)}`
})

// task_6
// крестики-нолики залью отдельной папкой на гит