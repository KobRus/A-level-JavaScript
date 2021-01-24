// task_1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

for (const [capital, country] of Object.entries(citiesAndCountries)) {
        console.log(`${capital} - это ${country}`);
    }

// task_2
const namesOfDays  = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}
const getNameOfDay = (lang, dateNumber) => {
	const index = dateNumber - 1;
	console.log(`${namesOfDays [lang][index]}`)
	}

getNameOfDay('en', 2);
getNameOfDay('ru', 1);

// task_3
const person = {
    name: 'Vlad'
};

const person1 = {
	age: 1,
};

person1.__proto__ = person

function setProto (currentObj, protoObj) {
	console.log(currentObj);
	console.log(protoObj);
}

setProto(person1, person);

// task_4
const newPerson = {
	setName() {
		this.name = prompt('Your name')
	},
	setAge() {
		this.ageValidation();
		const newAge = +prompt('Your age: ', ''); 
		this.age = newAge 
		if (newAge < 18) {
			this.age = 'Validation Error'
		} 
	},
	ageValidation() {
		this.setAge = this.ageValidation;
	},
	getName() {
		if ('name' in this) {
			console.log(this.name);			
		}
	},
	getAge() {
		if('age' in this){
		console.log(this.age);
		}
	}
};

let newName = {
	name: ' ',
	age: ' ',
	__proto__: newPerson
}

newName.setName()
newName.setAge()
newName.getName()
newName.getAge()
