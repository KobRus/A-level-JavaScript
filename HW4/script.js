// task_1
const obj = {
    a: 2,
    b: 4
}

const bindFunc = (callback, context, ...args ) => {
    return callback.bind(context, ...args)
} 

const test = function (val) {
    return val + this.a + this.b
}

const newFunc = bindFunc(test, obj, 3)

console.log(newFunc());

// task_2
const func = function() {
    return Object.values(this).reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)
};

const objectA = {
    a: 1,
    b: 2,
    c: 3,
    d: 0,
    e: -5,
    f: 4
};

console.log(func.call(objectA));

// task_3
function getNewArray() {
    const val = 'values'
    const condition = el => typeof el === 'number' && el > 2 && el < 10 && !(el % 2)
    if (!this[val]) {
        console.log('Не найдено')
        return
    } 
    return this[val].filter(i => condition(i) && i)    
};


const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

console.log(getNewArray.call(valObject0));