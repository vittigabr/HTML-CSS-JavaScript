// cabeçalho e menu de navegação
const itens = document.querySelectorAll('.item')

itens.forEach((item, index) => {
    item.addEventListener('click', () => {
        const itemSelecionado = document.querySelector('.item.selecionado')
        itemSelecionado.classList.remove('selecionado')
        itens[index].classList.add('selecionado')
    })
})

