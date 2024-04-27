
const estrelas = document.querySelector('.estrelas');

setTimeout( mostraEstrelas, 4000);
setTimeout( escondeEstrelas, 5000);

setInterval(() => {
    setTimeout( mostraEstrelas, 4000);
    setTimeout( escondeEstrelas, 5000);
}, 10000);

function mostraEstrelas() {
    estrelas.style.opacity = 0.8;
   
}

function escondeEstrelas() {
    estrelas.style.opacity = 0;
}



