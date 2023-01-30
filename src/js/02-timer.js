import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const dateInput = document.querySelector('#datetime-picker');
const btnStartTimer = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btnStartTimer.addEventListener('click', timerStart);
btnStartTimer.setAttribute('disabled', 'disabled');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future 👻');
    } else console.log(selectedDates[0]); {
        btnStartTimer.removeAttribute('disabled');
    
    }
    },
};

const flatPickr = flatpickr(dateInput, options);

function timerStart() {
    const countdown = setInterval(() => {
    const currentDate = new Date().getTime();
    const selectedDate = new Date(dateInput.value).getTime();
    const deltaTime = selectedDate - currentDate;
    const timeLine = convertMs(selectedDate - currentDate);

    if (deltaTime > 0) {
        days.textContent = timeLine.days;
        hours.textContent = timeLine.hours;
        minutes.textContent = timeLine.minutes;
        seconds.textContent = timeLine.seconds;
    } else {
        clearInterval(countdown);
    }
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}