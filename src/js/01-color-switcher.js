const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}

refs.start.addEventListener('click',onStartSort)
refs.stop.addEventListener('click', () => { 
    clearInterval(timerId);
    disabled = false})

let timerId = null;
let disabled = false

function onStartSort() {
    if (disabled) {
        return
    };
    disabled = true;
    timerId = setInterval(() => {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
     refs.body.setAttribute('style', `background-color: ${randomColor}`);
  }, 1000); 
}



