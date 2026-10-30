fetch('./json/dadosBijuus.json')
    .then(response => response.json())
    .then(dadosBijuus => {

        dadosBijuus.forEach(bijuu => {
            const img = document.querySelectorAll('.img')

            img.forEach((img, index) => {
                img.style.backgroundImage = `url(${bijuu[index].url})`
            })

            const modal = document.querySelector('.modal')
            const botao = document.querySelectorAll('.botao')

            botao.forEach((botao, index) => {
                botao.addEventListener('click', () => {
                    modal.innerHTML = `<div class="imgModal">
                    <button id="botaoFechar">X</button>
                    </div>
                    <h2>${bijuu[index].name}</h2>
                    <p>${bijuu[index].datas}</p>`
                    
                    const imgModal = document.querySelector('.imgModal')

                    imgModal.style.backgroundImage = `url(${bijuu[index].url})`
                    
                    modal.style.display = 'block'
                    
                    const botaoFechar = document.getElementById('botaoFechar')

                    botaoFechar.addEventListener('click', () => {
                        modal.style.display = 'none'
                    })
                })
            })
        })
        
    })
    .catch(error => {
        console.error("Erro ao carregar json", error)
    })