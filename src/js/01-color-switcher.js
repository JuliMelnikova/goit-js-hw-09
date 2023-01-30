
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');


let bgColorChange = null;

btnStop.setAttribute('disabled', true);
btnStop.disabled = true;

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled', false);
    
    bgColorChange = setInterval(() => {
        const colorValue = getRandomHexColor();
        document.body.style.backgroundColor = colorValue
    }, 1000);
});


btnStop.addEventListener('click', () => {
    clearInterval(bgColorChange);
    btnStart.disabled = false;
    btnStop.disabled = true;
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled', false);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}