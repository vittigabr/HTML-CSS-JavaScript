const bntP = document.getElementById('bntP')
const bntA = document.getElementById('bntA')
let linkP = document.getElementById('linkP')
let linkA = document.getElementById('linkA')
const semanas = document.querySelectorAll('.semana')
let limite = semanas.length
let contador = 1

bntP.addEventListener('click', proximo)
bntA.addEventListener('click', anterior)

function proximo(){
    if(contador<limite){
        contador++
        linkP.setAttribute('href', `#semana${contador}`)
    }
}

function anterior(){
    if(contador>1){
        contador--
        linkA.setAttribute('href', `#semana${contador}`)
    }
}