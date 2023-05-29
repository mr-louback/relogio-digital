const horas = document.getElementById('horas'); 
const minutos = document.getElementById('minutos'); 
const segundos = document.getElementById('segundos');   

const relogio = setInterval(function time() {
    let dataDeHoje = new Date();
    let hr = dataDeHoje.getHours();
    let min = dataDeHoje.getMinutes();
    let seconds = dataDeHoje.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seconds < 10) seconds = '0' + seconds;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seconds;

})