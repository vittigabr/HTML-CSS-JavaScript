const listaImg = [
    'https://images.unsplash.com/photo-1673121414328-52eff37bc6d0?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1591047139334-337807f2b3e5?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1620802051782-725fa33db067?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1499115026740-47ec7a0d026e?w=600&h=400&fit=crop&auto=format']

const cardImg = document.querySelectorAll('.imgBike')

const botaoBike = document.querySelectorAll('.botaoBike')
const bikeSelecionada = document.getElementById('bikeSelecionada')

const listTipo = document.querySelectorAll('.smallCard')
const listNome = document.querySelectorAll('.h2Card')
const listPreco = document.querySelectorAll('.precoCard')

cardImg.forEach((card, index) => {
    card.style.backgroundImage = `url(${listaImg[index]})`
})

botaoBike.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        if(botao.textContent == 'Indisponível'){
            alert('Este item está indisponível')
        }
        else{
            bikeSelecionada.setAttribute('src', `${listaImg[index]}`)

            document.getElementById('tipoInfo').textContent = listTipo[index].textContent
            
            document.getElementById('nomeInfo').textContent = listNome[index].textContent

            document.getElementById('precoInfo').textContent = listPreco[index].textContent
        }
    })
})