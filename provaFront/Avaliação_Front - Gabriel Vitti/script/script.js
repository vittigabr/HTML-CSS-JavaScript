const nome = document.getElementById('nome')
const data = document.getElementById('data')
const turma = document.getElementById('turma')
const horario = document.getElementById('horario')
const botoes = document.querySelectorAll('.botao')
let horarios = []

const respNome = document.getElementById('resp-nome')
const respData = document.getElementById('resp-data')
const respTurma = document.getElementById('resp-turma')
const respHorarioInicio = document.getElementById('horario-inicio')
const respHorarioTermino = document.getElementById('horario-termino')
const respCarrinho = document.getElementById('resp-carrinho')

const card = document.querySelector('.cardConfirmar')

const enviarBotao = document.getElementById('enviarBotao')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        botoes.forEach((b) => {
            b.textContent = 'Reservar'
            b.classList.remove('selecionado')
        })

        botao.textContent = 'Selecionado'
        botoes[index].classList.add('selecionado')

        carrinho = `${index + 1}`
    })
})

enviarBotao.addEventListener('click', () => {
    respNome.innerText = `${nome.value}`
    respData.innerText = `${data.value}`
    respTurma.innerText = `${turma.value}`

    for(let i = 0; i<5; i++){
        horarios.push(horario.value[i])
    }
    respHorarioInicio.textContent = `${horarios.join('')}`
    horarios = []

    for(let i = 6; i<horario.value.length; i++){
        horarios.push(horario.value[i])
    }
    respHorarioTermino.textContent = `${horarios.join('')}`
    respCarrinho.textContent = carrinho

    for(let i = 0; i<horario.value.length; i++){
        horarios.pop(horario.value[i])
    }
    

    card.style.display = 'flex'
})


