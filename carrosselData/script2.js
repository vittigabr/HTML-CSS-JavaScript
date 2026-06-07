// Base do Carrossel
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

// Introdução das datas
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
let agora = new Date()
let dia = agora.getDate()
let month = agora.getUTCMonth()
let mes = meses[month-1]
const datas = document.querySelectorAll('.dia')

for(let c = 0; c<=datas.length; c++){
    datas[c].setAttribute('value', `${dia}/${mes}`)
}



console.log(mes)
console.log(dia)
console.log(dia, mes)