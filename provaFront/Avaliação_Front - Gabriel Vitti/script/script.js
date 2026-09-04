import { reservas } from "./reservas.js" // importa o objeto do outro arquivo

const nome = document.getElementById('nome')
const data = document.getElementById('data')
const turma = document.getElementById('turma')
const horario = document.getElementById('horario')
const botoes = document.querySelectorAll('.botao')
let horarios = []
let carrinho = ''

const input = document.querySelectorAll('input')
const select = document.querySelectorAll('select')

const respNome = document.getElementById('resp-nome')
const respData = document.getElementById('resp-data')
const respTurma = document.getElementById('resp-turma')
const respHorarioInicio = document.getElementById('horario-inicio')
const respHorarioTermino = document.getElementById('horario-termino')
const respCarrinho = document.getElementById('resp-carrinho')

const card = document.getElementById('card')

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
    reservas.nomeProf.push(nome.value) // envia informações para a lista do objeto

    respData.innerText = `${data.value}`
    reservas.data.push(data.value) // envia informações para a lista do objeto
    
    respTurma.innerText = `${turma.value}`
    reservas.turma.push(turma.value) // envia informações para a lista do objeto

    for(let i = 0; i<5; i++){
        horarios.push(horario.value[i])
    }
    respHorarioInicio.textContent = `${horarios.join('')}`
    reservas.horario.inicio.push(horarios.join('')) // envia informações para a lista do objeto
    
    horarios = []

    for(let i = 6; i<horario.value.length; i++){
        horarios.push(horario.value[i])
    }
    respHorarioTermino.textContent = `${horarios.join('')}`
    reservas.horario.termino.push(horarios.join('')) // envia informações para a lista do objeto
    
    respCarrinho.textContent = carrinho
    reservas.carrinho.push(carrinho) // envia informações para a lista do objeto

    for(let i = 0; i<horario.value.length; i++){
        horarios.pop(horario.value[i])
    }
    
    botoes.forEach((botao) => {
        botao.classList.remove('selecionado')
        botao.textContent = 'Reservar'
    })

    input.forEach((input) => {
        input.value = ''
    })

    select.forEach((select) => {
        select.value = ''
    })

    card.style.display = 'flex'
    card.scrollIntoView({
        behavior: 'smooth'
    })
    console.log(reservas)
})