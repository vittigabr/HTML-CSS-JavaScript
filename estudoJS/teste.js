// Aula 04 - módulo A
window.alert('Primeiro teste') // Cria um alerta na tela
window.confirm('Segundo teste') // Cria uma pergunta de "sim ou não"
window.prompt('Terceiro teste: escreva certo') // Cria um espaço de resposta

// Aula 06 - módulo B
let nome = window.prompt('Digite seu nome: ')
document.writeln('É um prazer te conhecer, '+ nome)

let number1 = window.prompt('Digite um número: ')
let number2 = window.prompt('Digite outro número: ')
let soma = Number.parseInt(number1)+ Number.parseInt(number2) // Transforma em number
window.alert(`O resultado da soma é ${soma}`)

let corpo = document.body
corpo.style.backgroundColor = 'black'