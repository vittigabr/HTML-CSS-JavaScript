const res = document.querySelector('div#resultado')
const botao = document.querySelector('input.botao')
botao.addEventListener('click', () =>{
    var inicio = document.querySelector('input.campo'[0])
    var fim = document.querySelector('input.campo'[1])
    var pulo = document.querySelector('input.campo'[2])

    var inicio = inicio.value
    var fim = fim.value
    var pulo = pulo.value

    res.innerHTML = `${inicio}...`
    inicio += pulo

    while(inicio<=fim){
        res.innerHTML += `${inicio}...`
        inicio += pulo
    }
    res.innerHTML += 'FIM'
})