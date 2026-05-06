let agora = new Date()
let nasc = document.getElementById('txtN')
let dataAtual = agora.getFullYear()
let res = document.getElementById('resultado')
let botao = document.getElementById('botao')
botao.addEventListener('click', verificar)

function verificar(){
    let idade = Number(dataAtual) - Number(nasc)
    res.innerHTML = `Essa pessoa tem ${idade} anos de idade.`
}