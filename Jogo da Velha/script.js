const placarX = document.getElementById('placarX')
const placarO = document.getElementById('placarO')
const casas = document.querySelectorAll('.casa')
let current = 0
let px = 0
let po = 0

placarX.innerText = px++
placarO.innerText = po++

function zerarCasas(){
    setTimeout(() => {
        for(let c = 0; c<=casas.length; c++){
            casas[c].innerText = ''
        }
    }, 1000);
}

casas.forEach((casa, index) => {
    casa.addEventListener('click', () => {
        if(current==0){
            casa.innerText = 'X'
            current++
        }
        else{
            casa.innerText = 'O'
            current--
        }

        // vence somente o X para teste - deu certo
        if(casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X' || casas[0]){
            placarX.innerText = px++
            zerarCasas()
        }
        else if(casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X'){
            placarX.innerText = px++
            zerarCasas()
        }
        else if(casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X'){
            placarX.innerText = px++
            zerarCasas()
        }
        else if(casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X'){
            placarX.innerText = px++
            zerarCasas()
        }
        else if(casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X'){
            placarX.innerText = px++
            zerarCasas()
        }
        else if(casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X'){
            placarX.innerText = px++
            zerarCasas()
        }

    })
})

