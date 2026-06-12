const caixa = document.querySelector('.caixa')
const botao = document.getElementById('bnt')

botao.addEventListener('click', () => {
    botao.classList.add('bnt')
    caixa.classList.add('caixaPos2')
    
    if(botao.innerText=='voltar'){
        caixa.classList.remove('caixaPos2')
        caixa.classList.add('caixaVazia')
    }

    botao.innerText = 'voltar'
})