// task_1
let userNum = +prompt('Enter your number');
let result = 0;
for (let i = 1; i <= userNum; i++) {
    result += i ** 2;
}

console.log(result);

// task_2
let arr = [3, 5, 12, 9, 23, 93, 17];

let filteredArr = arr.filter((item) => {
    return item > 2 && item < 20
});

console.log('числа, которые больше 2 и меньше 20: ', filteredArr);

let sum = 0;
filteredArr.forEach((item) => {
    sum += item;
});

console.log('их суммa: ', sum);

// task_3
let newArr = [[1, 6, 3, '6'], [10, 15, 13, '10']].reduce((a,b) => {
    return a.concat(b);
});

let numberNewArr = newArr.filter((item) => {
    return typeof item === 'number' && item % 2 === 0;
});

console.log('являются числами и кратны двум: ', numberNewArr);

let newSum = 0;
numberNewArr.forEach((item) => {
    newSum += item;
});

console.log('сумма элементов: ', newSum);

// task_4
let person = {};
function test(key, value, obj) {
    if(key in obj) {
        console.log("This key already exist")
    }
    obj[key] = value;
}

test('name','Vlad', person);
test('name','Vlad', person);

console.log(person);