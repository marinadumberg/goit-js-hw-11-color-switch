const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]')
}

const DELAY = 1000;
let interval = undefined
refs.buttonStart.addEventListener('click', onStartButtonClick);
refs.buttonStop.addEventListener('click',onStopButtonClick)
 refs.buttonStop.classList.add('deactive')
function onStartButtonClick() {

  changeColors()
  
}

function onStopButtonClick() {
    clearInterval(interval)
  refs.buttonStart.removeAttribute('disabled', '');
  refs.buttonStop.classList.add('deactive')
  refs.buttonStart.classList.remove('deactive')
}

function changeColors() {
  refs.buttonStop.classList.toggle('deactive')
  refs.buttonStart.setAttribute('disabled', '');
  refs.buttonStart.classList.toggle('deactive');
  
    interval = setInterval(() => { 
      document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
},DELAY)
}
