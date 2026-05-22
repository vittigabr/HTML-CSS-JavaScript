const escolha = document.querySelectorAll(".choosed");

// forEach é para selecionar o elemento específico dentro da lista criada pelo querySelectorAll
escolha.forEach(item => {
    item.addEventListener('click', clicar)
})

function clicar(event){
    event.target.innerText = 'X'
}