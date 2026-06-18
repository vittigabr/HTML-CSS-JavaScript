let visor = document.getElementById('resposta')
const botoes = document.querySelectorAll('.bnt')
const bSoma = document.getElementById('botaoSoma')
const bSubtra = document.getElementById('botaoSubtracao')
const bMulti = document.getElementById('botaoMulti')
const bDivisao = document.getElementById('botaoDivisao')

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