const escolha = document.querySelectorAll(".choosed");

// forEach é para selecionar o elemento específico dentro da lista criada pelo querySelectorAll
escolha.forEach(item => {
    item.addEventListener('click', clicar)
})

function clicar(event){
    event.target.innerText = 'X'
}

// funcionou a troca de tema do fundo **só precisa adicionar mais config para mudar todos os elementos do site
const botao = document.getElementById('bnt')
const back = document.body.classList

botao.addEventListener('click', changeColor)

function changeColor(){
    console.log('funciona')
    if(back.contains('darkBody')){
        back.remove('darkBody')
    }
    else{
        back.add('darkBody')
    }
}