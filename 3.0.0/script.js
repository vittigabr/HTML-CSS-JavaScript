const dadosBijuus = [
    {
        id: 1,
        name: 'shukaku',
        datas: 'jinchuurikis: gaara',
        url: '../assets/shukaku.jpeg'
    },
    {
        id: 2,
        name: 'matatabi',
        datas: 'jinchuurikis: yugito',
        url: '../assets/matatabi.jpeg'
    },
    {
        id: 3,
        name: 'isobu',
        datas: 'jinchuurikis: yagura',
        url: '../assets/isobu.jpeg'
    },
    {
        id: 4,
        name: 'son goku',
        datas: 'jinchuurikis: hoshi',
        url: '../assets/sonGoku.jpeg'
    },
    {
        id: 5,
        name: 'kokuo',
        datas: 'jinchuurikis: han',
        url: '../assets/kokuo.jpeg'
    },
    {
        id: 6,
        name: 'saiken',
        datas: 'jinchuurikis: utakata',
        url: '../assets/saiken.jpeg'
    },
    {
        id: 7,
        name: 'chomei',
        datas: 'jinchuurikis: fuu',
        url: '../assets/chomei.jpeg'
    },
    {
        id: 8,
        name: 'gyuuki',
        datas: 'jinchuurikis: killer bee',
        url: '../assets/gyuuki.jpeg'
    },
    {
        id: 9,
        name: 'kurama',
        datas: 'jinchuurikis: naruto',
        url: '../assets/kurama.jpeg'
    }
]

const img = document.querySelectorAll('.img')

img.forEach((img, index) => {
    img.style.backgroundImage = `url(${dadosBijuus[index].url})`
})

const modal = document.querySelector('.modal')
const botao = document.querySelectorAll('.botao')

botao.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        modal.innerHTML = `<div class="imgModal">
        <button id="botaoFechar">X</button>
        </div>
        <h2>${dadosBijuus[index].name}</h2>
        <p>${dadosBijuus[index].datas}</p>`
        
        const imgModal = document.querySelector('.imgModal')

        imgModal.style.backgroundImage = `url(${dadosBijuus[index].url})`
        
        modal.style.display = 'block'
        
        const botaoFechar = document.getElementById('botaoFechar')

        botaoFechar.addEventListener('click', () => {
            modal.style.display = 'none'
        })
    })
})