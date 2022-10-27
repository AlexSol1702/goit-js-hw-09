import {Notify}  from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


let getEl = selector => document.querySelector(selector)

getEl('button[data-start]').setAttribute('disabled','true');

let targetTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() <= new Date().getTime()) {
       
        Notify.failure('Please choose a date in the future');
        } else {
            getEl('button[data-start]').removeAttribute('disabled','true');
        }
      targetTime = selectedDates[0].getTime();
    },
};

flatpickr(getEl('#datetime-picker'), options);  

getEl('button[data-start]').addEventListener('click', onStartTimer);

function onStartTimer() {
    const intervalId = setInterval(()=>{
        const currentTime = Date.now();
        let deltaTime = targetTime - currentTime;

        if (deltaTime > 0) {
            getTime(convertMs(deltaTime))
        } else {clearInterval(intervalId)}

    }, 1000)        
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
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

  function getTime({ days, hours, minutes, seconds }) {
    getEl('[data-days]').textContent = `${days}`;
    getEl('[data-hours]').textContent = `${hours}`;
    getEl('[data-minutes]').textContent = `${minutes}`;
    getEl('[data-seconds]').textContent = `${seconds}`;
  }
  
 
  



