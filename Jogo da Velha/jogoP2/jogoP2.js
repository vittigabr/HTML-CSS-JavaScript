const placarX = document.getElementById('placarX')
const placarO = document.getElementById('placarO')
const casas = document.querySelectorAll('.casa')
const resultado = document.getElementById('resultado')
let current = 0
let contador = 0
let px = 0
let po = 0

placarX.innerText = px++
placarO.innerText = po++

function zerarCasas(){
    setTimeout(() => {
        for(let c = 0; c<=casas.length; c++){
            casas[c].innerText = ''
            resultado.innerText = 'Resultado: '
        }
    }, 1300);
}

casas.forEach((casa, index) => {
    casa.addEventListener('click', () => {
        if(current==0){
            if(casa.innerText===''){
                casa.innerText = 'X'
                current++
                contador++
            }
        }
        else{
            if(casa.innerText===''){
                casa.innerText = 'O'
                current--
                contador++
            }
        }

        if((casas[0].innerText=='X' && casas[1].innerText=='X' && casas[2].innerText=='X') || 
        
        (casas[0].innerText=='X' && casas[4].innerText=='X' && casas[8].innerText=='X') || 
        
        (casas[0].innerText=='X' && casas[3].innerText=='X' && casas[6].innerText=='X') || 
        
        (casas[1].innerText=='X' && casas[4].innerText=='X' && casas[7].innerText=='X') || 
        
        (casas[2].innerText=='X' && casas[5].innerText=='X' && casas[8].innerText=='X') || 
        
        (casas[3].innerText=='X' && casas[4].innerText=='X' && casas[5].innerText=='X') || 
        
        (casas[6].innerText=='X' && casas[7].innerText=='X' && casas[8].innerText=='X') || 
        
        (casas[2].innerText=='X' && casas[4].innerText=='X' && casas[6].innerText=='X')){
            placarX.innerText = px++
            resultado.innerText += ' Ganhador X'
            zerarCasas()
        }
        else if((casas[0].innerText=='O' && casas[1].innerText=='O' && casas[2].innerText=='O') || 
        
        (casas[0].innerText=='O' && casas[4].innerText=='O' && casas[8].innerText=='O') || 
        
        (casas[0].innerText=='O' && casas[3].innerText=='O' && casas[6].innerText=='O') || 
        
        (casas[1].innerText=='O' && casas[4].innerText=='O' && casas[7].innerText=='O') || 
        
        (casas[2].innerText=='O' && casas[5].innerText=='O' && casas[8].innerText=='O') || 
        
        (casas[3].innerText=='O' && casas[4].innerText=='O' && casas[5].innerText=='O') || 
        
        (casas[6].innerText=='O' && casas[7].innerText=='O' && casas[8].innerText=='O') || 
        
        (casas[2].innerText=='O' && casas[4].innerText=='O' && casas[6].innerText=='O')){
            placarO.innerText = po++
            resultado.innerText += ' Ganhador O'
            zerarCasas()
        }
        
        if(contador==9){
            zerarCasas()
        }
    })
})