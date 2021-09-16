// Оформить красиво, сделать в класе (ООП) и это можно прикладывать в резюме.

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

let refs = {
    mainTimer: document.querySelector('#timer-1'),
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    minutes: document.querySelector('span[data-value="mins"]'),
    seconds: document.querySelector('span[data-value="secs"]')
};
// console.log(refs);

let counter = new Date("September 22, 2021 09:00:00");

class Timer {
    constructor(counter, res) {
        this.counter = counter;
    }

    showCounting() {
        
        let countdownResult = setInterval(() => {
            let currentDate = Date.now();
            let res = counter - currentDate;
            let days = Math.floor(res / 1000 / 60 / 60 / 24);
            // console.log(days);
            let hours = Math.floor(
                (res % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            // console.log(hours);
            let minutes = Math.floor((res % (1000 * 60 * 60)) / (1000 * 60));
            // console.log(minutes);
            let seconds = Math.floor((res % (1000 * 60)) / 1000);
            // console.log(seconds);
                
            refs.days.innerHTML = `${days}`;
            refs.hours.innerHTML = `${hours}`;
            refs.minutes.innerHTML = `${minutes}`;
            refs.seconds.innerHTML = `${seconds}`;


            if(res < 0) {
                clearInterval(countdownResult);
                return;
            }
        }, 1000);
        
    }
};
let finishTime = new Timer(counter, refs.seconds);
finishTime.showCounting();
// console.log(finishTime.showCounting());


























// let resOfCounter = setInterval(() => {
//     let currentDate = Date.now();
//     let res = counter - currentDate;

//     let days = Math.floor(res / 1000 / 60 / 60 / 24);
//     // console.log(days);
//     let hours = Math.floor(
//         (res % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     // console.log(hours);
//     let minutes = Math.floor((res % (1000 * 60 * 60)) / (1000 * 60));
//     // console.log(minutes);
//     let seconds = Math.floor((res % (1000 * 60)) / 1000);
//     // console.log(seconds);

//     refs.days.innerHTML = `${days}`;
//     refs.hours.innerHTML = `${hours}`;
//     refs.minutes.innerHTML = `${minutes}`;
//     refs.seconds.innerHTML = `${seconds}`;

// }, 1000);