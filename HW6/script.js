// task_1
function Animal(name, age, colour) {
    if (!new.target) {
        return new Animal(name, age, colour)
    }
    this.name = name,
    this.age = age,
    this.colour = colour
}

const rabbit = new Animal('Bugs', '2', 'white')
console.log(rabbit);
const lion = Animal('Simba', '5', 'mustard')
console.log(lion);

// task_2
function Calculator() {
    this.read = function() {        
        let firstVal = +prompt('Enter first number');
        while(firstVal === null || isNaN(firstVal) || firstVal === '') {
            firstVal = +prompt('Enter first number');
        }

        this.a = firstVal

        let secondVal = +prompt('Enter second number');
        while(secondVal === null || isNaN(secondVal) || secondVal === '') {
            secondVal = +prompt('Enter second number');
        }

        this.b = secondVal;
    };

    this.setAction = function() {
        let preAction = prompt('Enter action')

        while(!(preAction === '+' || preAction === '-' || preAction === '*' || preAction === '/')) {
            preAction = prompt ('Enter CORRECT action')
        }

        this.action = preAction;
    }

    this.doAction = function() {
        this.setAction();
        switch(this.action) {
            case '+':
                this.res = this.sum()
                break;
            case '-':
                this.res = this.min()
                break;
            case '*':
                this.res = this.mul()
                break;
            case '/':
                this.res = this.divide()
                break;
            default:
                alert('Incorrect sign!');
                break
        }
        return this.res
    }

    this.sum = function() {
        return this.a + this.b;
    };

    this.min = function() {
        return this.a - this.b;
    };
    
    this.mul = function() {
        return this.a * this.b;
    };

    this.divide = function() {
        return this.a / this.b;
    }
}

let calculator = new Calculator()
calculator.read()

const result = calculator.doAction()
console.log('result: ', result);


// task_3
function Nums(...args) {
    this.args = args
    
    this.getSum = function() {
        let sum = 0;
        for(let i = 0; i < args.length; i++) {
            if(Number.isInteger(args[i])) {
                sum += args[i];
            }
        }
        return sum;
    }

    this.myFilterReverse = function() {
        let arr = []
        for(let i = 0; i < args.length; i++) {
            if(!(Number.isInteger(args[i]))) {
                args.splice(i, 1);
            }
                arr.unshift(args[i])
        }
        return arr;
    }
}

const test = new Nums(1, 1.1, 2, 3, 3.2, 4, 5)
console.log(test.getSum());
console.log(test.myFilterReverse());

// task_4
function GetUniqueClass() {

    this.getUnique = function(arr) {

        let tempArr = [];

        for (let newEl of arr) {
            if (!tempArr.includes(newEl)) {
                tempArr.push(newEl);
            }
        }
        
            return tempArr;
    }
}

let myGetUniqueClass = new GetUniqueClass();

let myArr = [1,1,2,2,3,3,4,5];

console.log(myGetUniqueClass.getUnique(myArr));

// task_5
let obj = {
    a : 1,
    b : 2,
    c : 3,
    d : false,
    e : 0,
}

function Helper() {

    this.getKeySum = function() {

        let res = 0;

        for (let key in obj) {
            if(obj[key] !== false) {
                res += obj[key];
            };
        }
        return res;
    }

    this.reversKey = function() {
        let resKey = {}
            Object.keys(obj).forEach(function(value) {
                key = obj[value]
                resKey[key] = value
            })
            return resKey;
    }
}

let myObj = new Helper();

console.log(myObj.getKeySum());
console.log(myObj.reversKey());