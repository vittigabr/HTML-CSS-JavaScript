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
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
let agora = new Date()
let day = 1
let month = agora.getUTCMonth()
let mes = meses[month]
const datas = document.querySelectorAll('.dia')

let d = 0
let m = 1
for(let c = 0; c<=datas.length; c++){
    if(mes=='Jan' || mes=='Mar' || mes=='Mai' || mes=='Jul' || mes=='Ago' || mes=='Out' || mes=='Dez'){
        if(day+d>31){
            d = 0
            mes = meses[month+m]
            m++
        }
        datas[c].setAttribute('value', `${day+d}/${mes}`)
    }
    else if(mes=='Fev'){
        if(day+d>28){
            d = 0
            mes = meses[month+m]
            m++
        }
        datas[c].setAttribute('value', `${day+d}/${mes}`)
    }
    else{
        if(day+d>30){
            d = 0
            mes = meses[month+m]
            m++
        }
        datas[c].setAttribute('value', `${day+d}/${mes}`)
    }
    d++
}