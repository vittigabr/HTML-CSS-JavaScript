const inputs = document.querySelectorAll('input')
const peso = document.getElementById('pesoInput')
const altura = document.getElementById('alturaInput')
const botao = document.getElementById('botaoCalcular')

const resposta = document.getElementById('respostaIMC')
const nivel = document.getElementById('nivelIMC')
const titulo = document.getElementById('tituloIMC')

const quadro = document.querySelector('.quadroResultado')

function imc(peso, altura){
    let resultado = peso/(Math.pow(altura.replace(',', '.'), 2))
    return resultado.toFixed(1) 
}

function verificar(){
    let resultIMC = imc(peso.value, altura.value)
    
    resposta.textContent = resultIMC

    if(resultIMC <= 18.5 && resultIMC > 0.0){
        nivel.textContent = 'Abaixo do Peso'
        quadro.style.backgroundColor = 'var(--azul-imc)'
        nivel.style.color = '#348cff'
        resposta.style.color = '#348cff'
    }
    else if(resultIMC >= 18.5 && resultIMC <= 24.9){
        nivel.textContent = 'Peso Normal'
        quadro.style.backgroundColor = '#74fbb1'
        nivel.style.color = '#0a7138'
        resposta.style.color = '#0a7138'
    }
    else if(resultIMC >= 25 && resultIMC <= 29.9){
        nivel.textContent = 'Sobrepeso'
        quadro.style.backgroundColor = 'var(--amarelo-imc)'
        nivel.style.color = '#d2b253'
        resposta.style.color = '#d2b253'
    }
    else if(resultIMC >= 30 && resultIMC <= 34.9){
        nivel.textContent = 'Obesidade Grau I'
        quadro.style.backgroundColor = 'var(--laranja-imc)'
        nivel.style.color = '#ff9346'
        resposta.style.color = '#ff9346'
    }
    else if(resultIMC >= 35 && resultIMC <= 39.9){
        nivel.textContent = 'Obesidade Grau II'
        quadro.style.backgroundColor = 'var(--rosa-imc)'
        nivel.style.color = '#ff4d6b'
        resposta.style.color = '#ff4d6b'
    }
    else if(resposta.textContent == 'NaN' || resposta.textContent == 'Infinity' || resposta.textContent == '0.0'){
        resposta.textContent = 'Insira os dados'
        nivel.textContent = 'Dados incorretos'
        quadro.style.backgroundColor = '#5C1204'
        nivel.style.color = '#ffff'
        resposta.style.color = '#fff'
        titulo.textContent = ''
    }
    else{
        nivel.textContent = 'Obesidade Grau III'
        quadro.style.backgroundColor = 'var(--vermelho-imc)'
        nivel.style.color = '#fe4949'
        resposta.style.color = '#fe4949'
    }
}

botao.addEventListener('click', () => {
    verificar()
    peso.value = ''
    altura.value = ''
})

inputs.forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
            verificar()
            peso.value = ''
            altura.value = ''
        }
    })
})
