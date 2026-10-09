const images = [
    '../assets/shukaku.jpeg',
    '../assets/matatabi.jpeg',
    '../assets/isobu.jpeg',
    '../assets/sonGoku.jpeg',
    '../assets/kokuo.jpeg',
    '../assets/saiken.jpeg',
    '../assets/chomei.jpeg',
    '../assets/gyuuki.jpeg',
    '../assets/kurama.jpeg'
]

const img = document.querySelectorAll('.img')

img.forEach((img, index) => {
    img.style.backgroundImage = `url(${images[index]})`
})

const dadosBijuus = [
    {
        id: 1,
        name: 'shukaku',
        datas: 'jinchuurikis: gaara'
    },
    {
        id: 2,
        name: 'matatabi',
        datas: 'jinchuurikis: yugito'
    },
    {
        id: 3,
        name: 'isobu',
        datas: 'jinchuurikis: yagura'
    },
    {
        id: 4,
        name: 'son goku',
        datas: 'jinchuurikis: hoshi'
    },
    {
        id: 5,
        name: 'kokuo',
        datas: 'jinchuurikis: han'
    },
    {
        id: 6,
        name: 'saiken',
        datas: 'jinchuurikis: utakata'
    },
    {
        id: 7,
        name: 'chomei',
        datas: 'jinchuurikis: fuu'
    },
    {
        id: 8,
        name: 'gyuuki',
        datas: 'jinchuurikis: killer bee'
    },
    {
        id: 9,
        name: 'kurama',
        datas: 'jinchuurikis: naruto'
    }
]

const modal = document.querySelector('.modal')
const botao = document.querySelectorAll('.botao')
const imgModal = document.querySelector('.imgModal')

botao.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        modal.innerHTML = `<div class="imgModal">
            <button>X</button>
        </div>
        <h2>${dadosBijuus[index].name}</h2>
        <p>${dadosBijuus[index].datas}</p>`

        imgModal.style.backgroundImage = `url(${images[index]})`

        modal.style.display = 'block'   
    })
})