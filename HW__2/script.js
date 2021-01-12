// HW1
function getSum(a, b) {
    console.log(a + b);
}

getSum(3, 7)

let sum = (a , b) => a + b;
let result = sum(2, 10)
console.log(result);

// HW2
function hello2 (name = 'Василий') {
    if (name === 'Василий') console.log('Hello, ' + name + '!');
    else console.log('Привет, гость!');
};

hello2();

// HW3
let index = 'Hello, my name is';
let index2 = 'Hello, my name is';
function getIndex (str, targetString) {
    console.log(str.slice(15)); 
    console.log(targetString.indexOf('name'));
}

getIndex(index, index2);

// HW4
function stringValidation (arg) {
    if (typeof arg === 'string' && arg.length > 3) {
        console.log(arg);
    } else if (arg.length <= 3) {
        console.log('Ошибка. Минимальная длина - 3');
    } else {
        console.log('Ошибка. Не тот тип данных');
    }
}

stringValidation('Hello Vlad')

// HW5 form JS Lesson 2
// task_1
let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(arr.toString());

// task_2
let names = "Вася, Петя, Вова, Олег";
let newArr= names.split(', ');
console.log(newArr);

// task_4
const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = fruits.map(fruits => {
    return fruits.toUpperCase()
})
console.log(fruitsInUpperCase);

// task_5
const vall = [1, 2, 3, 4];
const resultVall = vall.map((item, i , arr) => {
    return item + 1;
});
console.log(resultVall);

// task_6
const arr3 = [1, 2, 3, 4];
let sum2 = 0;
arr3.forEach(function (item) {
    sum2 += item;
});
console.log(sum2);

// task_7
const arr2 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = arr2.filter(el => typeof el === 'number')
console.log(numberArray);

// task_8
const arrayTesting = (arr) => {
    return arr.some((item) => item) ? 'Нашли true значение' : 'Ничего нет'
};
const haveTrueValue = arrayTesting([0, false, null, 1]);
console.log(haveTrueValue);

const dontHaveTrueValue = arrayTesting([0, false, null, 0]); 
console.log(dontHaveTrueValue);