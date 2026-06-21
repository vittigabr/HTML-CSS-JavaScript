let visor = document.getElementById('resposta')
const botoes = document.querySelectorAll('.bnt')
const bSoma = document.getElementById('botaoSoma')
const bSubtra = document.getElementById('botaoSubtracao')
const bMulti = document.getElementById('botaoMulti')
const bDivisao = document.getElementById('botaoDivisao')
const bIgual = document.getElementById('equal')
const bCancel = document.getElementById('cancela')
const bApaga = document.getElementById('clear')
const bPorcent = document.getElementById('porcentagem')
const bColor = document.getElementById('color')
const bPonto = document.getElementById('ponto')
let numero1 = 0
let numero2 = 0

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        visor.innerText += botoes[index].innerText
    })
})

bSoma.addEventListener('click', () => {
    visor.innerText += '+'
})

bSubtra.addEventListener('click', () => {
    visor.innerText += '-'
})

bMulti.addEventListener('click', () => {
    visor.innerText += '*'
})

bDivisao.addEventListener('click', () => {
    visor.innerText += '/'
})

bPorcent.addEventListener('click', () => {
    visor.innerText += '/100'
})

bPonto.addEventListener('click', () => {
    visor.innerText += '.'
})

bIgual.addEventListener('click', () => {
    // let txtNumero = visor.innerText
    // if(txtNumero.indexOf('+') != -1){
    //     numero1 = Number(txtNumero.split('+')[0])
    //     numero2 = Number(txtNumero.split('+')[1])
    //     let soma = numero1 + numero2
    //     visor.innerText = soma
    // }
    // else if(txtNumero.indexOf('-') != -1){
    //     numero1 = Number(txtNumero.split('-')[0])
    //     numero2 = Number(txtNumero.split('-')[1])
    //     let subtracao = numero1 - numero2
    //     visor.innerText = subtracao
    // }
    // else if(txtNumero.indexOf('*') != -1){
    //     numero1 = Number(txtNumero.split('*')[0])
    //     numero2 = Number(txtNumero.split('*')[1])
    //     let multiplicacao = numero1 * numero2
    //     visor.innerText = multiplicacao
    // }
    // else if(txtNumero.indexOf('/') != -1){
    //     numero1 = Number(txtNumero.split('/')[0])
    //     numero2 = Number(txtNumero.split('/')[1])
    //     let divisao = numero1 / numero2
    //     visor.innerText = divisao
    // }
    // else if(txtNumero.indexOf('%') != -1){
    //     numero1 = Number(txtNumero.split('%')[0])
    //     let porcentagem = numero1/100
    //     visor.innerText = porcentagem
    // }
    // else{
    //     visor.innerText = 'Error'
    // }
    try{
        visor.innerText = eval(visor.innerText)
    }
    catch{
        visor.innerText = 'Erro'
    }
})

bCancel.addEventListener('click', () => {
    visor.innerText = ''
})

bApaga.addEventListener('click', () => {
    let txtNumero = visor.innerText.split('')
    txtNumero.pop()
    visor.innerText = txtNumero.join('')
})

bColor.addEventListener('click', () => {
    let background = document.body.classList
    const botoesEspeciais = document.querySelectorAll('.botaoEspecial-light')
    if(background.contains('lightTheme')){
        background.remove('lightTheme')
        background.add('darkTheme')
        botoes.forEach((botao, index) => {
            botao.classList.add('bnt-dark')
        })
        botoesEspeciais.forEach((botao) => {
            botao.classList.add('botaoEspecial-dark')
        })
        bColor.innerHTML = '&#127774;'
    }
    else{
        background.remove('darkTheme')
        background.add('lightTheme')
        botoes.forEach((botao, index) => {
            botao.classList.remove('bnt-dark')
        })
        botoesEspeciais.forEach((botao) => {
            botao.classList.remove('botaoEspecial-dark')
        })
        bColor.innerHTML = '&#127769;'
    }
})