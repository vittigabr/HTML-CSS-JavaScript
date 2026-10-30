const listaCarrinho = document.getElementById('carrinhoBijuus')

const carrinho = JSON.parse(localStorage.getItem('carrinho'))

carrinho.forEach(item => {
    listaCarrinho.innerHTML += `
    <div>
        <img src="${item.url}" alt="">
        <h2>${item.name}</h2>
        <p>${item.datas}</p>
    </div>
    `
})