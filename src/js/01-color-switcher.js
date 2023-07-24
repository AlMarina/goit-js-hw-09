
const ref = {
    btnStartEl: document.querySelector('button[data-start]'),
    btnStopEl: document.querySelector('button[data-stop]')
}

ref.btnStartEl.addEventListener('click', handlerClickStart);
ref.btnStopEl.addEventListener('click', handlerClickStop);
let id = 0;
let dis = true;

function handlerClickStart() { 
    id = setInterval(change, 1000);
}

function handlerClickStop() { 
    clearInterval(id);
    ref.btnStartEl.disabled = !dis;
}


function change() { 
    document.body.style.backgroundColor = getRandomHexColor();
    ref.btnStartEl.disabled = dis;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}