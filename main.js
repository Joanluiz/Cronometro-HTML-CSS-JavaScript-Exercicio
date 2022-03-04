function relogio() {
    function horasESegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = horasESegundos (segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const elementos = e.target;
    
        if(elementos.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio();
        
        }
    
        if(elementos.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer);
        }
    
        if(elementos.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            relogio.classList.remove('pausado')
            segundos = 0;
        }
    });
}

relogio();
