let outDays = document.getElementsByClassName('days')[0];
let outHour = document.getElementsByClassName('hour')[0];
let outMin = document.getElementsByClassName('min')[0];
let outSec = document.getElementsByClassName('sec')[0];
let fullYears = document.getElementsByClassName('fullYears')[0];

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function setUserBday(checkValue) {
    if (checkValue) {
        runBdayTimer(checkValue);
    } else { 
        const userDate = prompt('В ведите дату в формате ГГГГ-ММ-ДД', '1970-01-01');
        if (userDate === null || userDate === '') {
            alert('Вы не ввели дату рождения', '');
        } else {
            document.cookie = `userAge=${userDate}`;
            runBdayTimer(userDate);
        }
    }
}

const userBdayCookie = getCookie('userAge');
const userDate = setUserBday(userBdayCookie);

function runBdayTimer(checkValue) {
    const userYears = getfullAge(checkValue);
    const dateToBday = setBdayYear(checkValue);
    fullYears.innerHTML = userYears;
    setInterval(() => getTimeToBday(dateToBday), 1000);

}

function getfullAge(bday) {
    let date = new Date(bday);
    let nowDate = new Date;
    if (bday < '1970-01-01') {
        let years = Math.floor((nowDate.getTime() + Math.abs(date.getTime())) / 1000 / 60 / 60 / 24 / 365.25)
        return `You're ${years} years now`
    }
    if (bday > '1970-01-01') {
        let years = Math.floor((nowDate - date) / 1000 / 60 / 60 / 24 / 365.25);
        return `You're ${years} years now`;
    } else {
        let years = Math.floor((nowDate) / 1000 / 60 / 60 / 24 / 365.25)
        return `You're ${years} years now`
    }
}

function setBdayYear(bday) {
    const nowDate = new Date;
    let bdayArr = bday.split('-');

    if (+bdayArr[1] === (nowDate.getMonth() + 1) && +bdayArr[2] === nowDate.getDay()) {
        bdayArr[0] = nowDate.getFullYear() + 1
    } else if (+bdayArr[1] <= nowDate.getMonth() + 1) {
        bdayArr[0] = nowDate.getFullYear() + 1
    } else {
        bdayArr[0] = nowDate.getFullYear()
    }

    return bdayArr.join('-');
}

function getTimeToBday(endpoint) {
    const date = Date.now();
    const endDate = Date.parse(endpoint);
    outDays.innerHTML = `Days left - ${Math.floor((endDate - date) / 1000 / 3600 / 24)}` ;
    outHour.innerHTML = Math.floor((((endDate - date) / 1000 / 3600) - 2) % 24);
    outMin.innerHTML = Math.floor((endDate - date) / 1000 / 60) % 60;
    outSec.innerHTML = Math.floor((endDate - date) / 1000) % 60;
}


// task_3
const textarea = document.getElementById('textArea');

textarea.addEventListener('change', saveTextArea);
document.addEventListener('DOMContentLoaded', getTextArea);

function saveTextArea() {
    localStorage.setItem('textArea', `${textarea.value}`);
}

function getTextArea() {
    const text = localStorage.getItem('textArea');
    if (text) {
        textarea.value = text
    }
}


// task_4
let arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 'a', 'b',)
arr.splice(6, 0, 'c')
arr.splice(8,0 , 'e')
console.log(arr);

