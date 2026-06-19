let visor = document.getElementById('resposta')
const botoes = document.querySelectorAll('.bnt')
const bSoma = document.getElementById('botaoSoma')
const bSubtra = document.getElementById('botaoSubtracao')
const bMulti = document.getElementById('botaoMulti')
const bDivisao = document.getElementById('botaoDivisao')
const bIgual = document.getElementById('equal')
const bCancel = document.getElementById('cancela')
const bApaga = document.getElementById('clear')
let numero1 = 0
let numero2 = 0

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        visor.innerText += botoes[index].getHTML()
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

bIgual.addEventListener('click', () => {
    let txtNumero = visor.innerText
    if(txtNumero.indexOf('+') != -1){
        numero1 = Number(txtNumero.split('+')[0])
        numero2 = Number(txtNumero.split('+')[1])
        let soma = numero1 + numero2
        visor.innerText = soma
    }
    else if(txtNumero.indexOf('-') != -1){
        numero1 = Number(txtNumero.split('-')[0])
        numero2 = Number(txtNumero.split('-')[1])
        let subtracao = numero1 - numero2
        visor.innerText = subtracao
    }
    else if(txtNumero.indexOf('*') != -1){
        numero1 = Number(txtNumero.split('*')[0])
        numero2 = Number(txtNumero.split('*')[1])
        let multiplicacao = numero1 * numero2
        visor.innerText = multiplicacao
    }
    else if(txtNumero.indexOf('/') != -1){
        numero1 = Number(txtNumero.split('/')[0])
        numero2 = Number(txtNumero.split('/')[1])
        let divisao = numero1 / numero2
        visor.innerText = divisao
    }
    else{
        visor.innerText = 'Error'
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