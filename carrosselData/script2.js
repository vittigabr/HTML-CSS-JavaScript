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
let dia = agora.getDate()
let day = 1
let month = agora.getUTCMonth()
let mes = meses[month]
const datas = document.querySelectorAll('.dia')

// Botão selecionado
datas.forEach((botao, index) => {
    botao.addEventListener('click', function(){
        const diaSelecionado = document.querySelector('.dia.selecionado')
        console.log('amendoim')
        diaSelecionado.classList.remove('selecionado')
        botao.classList.add('selecionado')
    })
})

let d = 0
let m = 1
let i = 0
for(let c = 0; c<=datas.length; c++){
    // datas[c].setAttribute('value', `${dia+d}/${mes}`)
    if(month%2==0 || mes=='Ago' && dia+d<32){
        datas[c].setAttribute('value', `${dia+d}/${mes}`)
    }
    else if(month%2==1 && dia+d<31){
        datas[c].setAttribute('value', `${dia+d}/${mes}`)
    }
    else{
        if((month+m)%2==0 || mes=='Ago' && dia+d<32){
            datas[c].setAttribute('value', `${day}/${meses[month+m]}`)
            day++
            if(day==32){
                day = 1
                m++
            }
        }
        else{
            datas[c].setAttribute('value', `${day}/${meses[month+m]}`)
            day++
            if(day==32){
                day = 0
                m++
            }
        }
    }
    
    // else{
    //     if(month%2==0 && dia+d<32){
    //         d = 0
    //         mes = meses[month+m]
    //         m++
    //         datas[c].setAttribute('value', `${day}/${mes}`)
    //     }
    //     else if(mes=='Fev' && day+d>28){
    //         d = 0
    //         mes = meses[month+m]
    //         m++
    //         datas[c].setAttribute('value', `${day+d}/${mes}`)
    //     }
    //     else{
    //         if(day+d>30){
    //             d = 0
    //             mes = meses[month+m]
    //             m++
    //         }
    //         datas[c].setAttribute('value', `${day+d}/${mes}`)
    //     }
    // }
    d++
}

// Botão Selecionado

// Primeira ideia = deu errado
// datas.forEach((botao, indice) => {
//     botao.addEventListener('click', () => {
//         const diaSelecionado = document.querySelector('.dia.selecionado')
//         diaSelecionado.classList.remove('selecionado')
//         datas[indice].classList.add('selecionado')
//     })
// })


// Segunda ideia = deu errado
// datas.forEach((data, indice) =>{
//     data.addEventListener('click', () => {
//         const dataSelecionada = document.querySelector('.dia.selecionado');
//         dataSelecionada.classList.remove('selecionado')
//         data.classList.add('selecionado')
//     })
// })


// Terceira ideia = deu errado
// for(let indice = 0; indice<=limite; indice++){
//     datas[indice].addEventListener('click', () => {
//         const diaSelecionado = document.querySelector('.dia.selecionado')
//         diaSelecionado.classList.remove('selecionado')
//         datas[indice].classList.add('selecionado')
//     })
// }


// Quarta ideia = deu errado
// for(let indice = 0; indice<=limite; indice++){
//     datas[indice].addEventListener('click', selecionando)
// }

// function selecionando(){
//     const diaSelecionado = document.querySelector('.dia.selecionado')
//     diaSelecionado.classList.remove('selecionado')
//     datas[indice].classList.add('selecionado')
// }


// Quinta ideia
// datas.forEach((data, indice) => {
//     data.addEventListener('click', () => {
//         const diaSelecionado = document.querySelector('.dia.selecionado')
//         diaSelecionado.classList.remove('selecionado')
//         datas[indice].classList.add('selecionado')
//     })
// })

// Sexta ideia