fetch('./json/dadosBijuus.json')
    .then(response => response.json())
    .then(dadosBijuus => {
        dadosBijuus.forEach(bijuu => {
            const botaoAdicionar = document.querySelectorAll('.botaoAdicionar')

            let carrinho = []

            function adicionarCarrinho(name, datas, url){
                
                // Recupera os usuários existentes
                let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
                
                // Cria o novo item
                const novoItem = {
                    name: name,
                    datas: datas,
                    url: url
                }

                // Adiciona item ao array
                carrinho.push(novoItem)

                // Atualiza o localStorage
                localStorage.setItem('carrinho', JSON.stringify(carrinho))
            }

            botaoAdicionar.forEach((botao, index) => {
                botao.addEventListener('click', () => {
                    alert('esse item foi adicionado')

                    let nome = bijuu[index].name
                    let dados = bijuu[index].datas
                    let url = bijuu[index].url

                    adicionarCarrinho(nome, dados, url)
                })
            })

            // Recupera os dados salvos
            const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'))
        })
    })
    .catch(error => {
        console.error("Erro ao carregar json", error)
    })