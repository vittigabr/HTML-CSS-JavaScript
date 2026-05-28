const botao = document.querySelectorAll('.botao')

botao.forEach( indice => {
    indice.addEventListener('click', clicar)
})

function clicar(event){
    let item = event.document.createAttribute('value')
    item = 'X'
}