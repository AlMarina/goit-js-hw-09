import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const ref = {
    inputEl: document.querySelector('#datetime-picker'),
    btnEl: document.querySelector('button[data-start]'),
    timerEl: document.querySelector('.timer'),
    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]'),
    divEl: document.querySelectorAll('.field')

}
ref.timerEl.style.display = 'flex';
ref.timerEl.style.gap = '15px';
ref.daysEl.style.display = 'block';
ref.hoursEl.style.display = 'block';
ref.minutesEl.style.display = 'block';
ref.secondsEl.style.display = 'block';

ref.btnEl.disabled = true;
const date =  Date.now();
let dataValue = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: date,
    minuteIncrement: 1,
    onClose(selectedDates) {
        dataValue = selectedDates[0].getTime();
        if (dataValue < date) {
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        }
        ref.btnEl.disabled = false;
    
    },
};


flatpickr(ref.inputEl, options);

ref.btnEl.addEventListener("click", handlerTimerStart);
let idInterval = 0;


function handlerTimerStart() { 
    ref.btnEl.disabled = true; 
    idInterval = setInterval(timer, 1000);
}


function timer () {
  const newDay = new Date();
  const time = dataValue - newDay.getTime();
  if (time <= 0) {
    clearInterval(idInterval);
    return;
  }
  const timeObj = convertMs(time);
  addZero(timeObj);
};


function addZero(value) {
  ref.daysEl.textContent = value.days.toString().padStart(2, '0');
  ref.hoursEl.textContent = value.hours.toString().padStart(2, '0');
  ref.minutesEl.textContent = value.minutes.toString().padStart(2, '0');
  ref.secondsEl.textContent = value.seconds.toString().padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
