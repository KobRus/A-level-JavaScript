// task_1
class ITCompany {
    create(employeeType, name , age) {
        if (employeeType === 'Developer') {
            return new Programmer(name, age)
        }
        if (employeeType === 'Tester') {
            return new Tester(name, age)
        }

        throw new Error('Такого типа не существует');
    }
}

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static getType() {
        console.log('Человек')
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }
}

class Programmer extends Human {
    constructor(name, age) {
        super(name, age)
        this.job = 'Developer'
    }
    
    static getJob(a) {
        console.log(`I am - ${a}`); 
    }
}

class Tester extends Human {
    constructor(name, age) {
        super(name, age)
        this.job = 'Tester'
    }

    static getJob(a) {
        console.log(`I am - ${a}`);
    }
}


const Company = new ITCompany()

const programmer  = Company.create('Developer', 'David', 30)
const tester  = Company.create('Tester', 'Paul', 25)

console.log(programmer);
console.log(tester);

programmer.getName()
tester.getName()

Programmer.getJob(programmer.job)
Tester.getJob(tester.job)

// task_2
const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5'
}

for (let key in obj) {
    if ('aeiou'.includes(key.toLowerCase())) {
        Object.defineProperty(obj, key, {
            'writable': false,
            'configurable': false
        })
    }
}
console.log(Object.getOwnPropertyDescriptors(obj));