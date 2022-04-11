function criaHoraDosSegundos(segundos){ // Essa função recebe os segundos e cia a data e retorna a data
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',  {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++; // em cada exec ução irá somar 1 segundo a variável
        relogio.innerHTML = criaHoraDosSegundos(segundos); // cada vez que a função executar a cada segundo ele irá formatar no formato de hora
    }, 1000); // aqui vai executar de 1 em 1 segundo
}

iniciar.addEventListener('click', function(event){ //Para capturar a ação de clicar no botão
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', function(event){
    clearInterval(timer); // Para a contagem parar, ele limpa o timer configurado
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
