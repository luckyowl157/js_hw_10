// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.


const colors = [
    'red',
    'green',
    'violet',
    'gray',
    'blue',
    'yellow',
];
console.log(colors);

let refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}
let colorInterval;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


refs.startBtn.addEventListener('click', startChanging);
refs.stopBtn.addEventListener('click', stopChanging);


function startChanging() {
    colorInterval = setInterval(() => {
        let index = randomIntegerFromInterval(0, 5);
        refs.body.style.background = colors[index];
        refs.body.style.transition = 'all 0.5s ease-in-out';
    }, 1000)
    
    refs.startBtn.setAttribute('disabled', true);
    console.log('start');
};
startChanging();

function stopChanging() {
    clearInterval(colorInterval);
    refs.startBtn.removeAttribute('disabled');
};
stopChanging();

// export default task_1;