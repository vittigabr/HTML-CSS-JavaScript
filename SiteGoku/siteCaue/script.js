const botoes = document.querySelectorAll('.card')
const banner = document.getElementById('banner')
const images = ['../assets/bg-codebreaker.png', '../assets/bg-codepixie.png', '../assets/bg-cyberstorm.png', '../assets/bg-hexblade.png']

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        banner.setAttribute('src', `${images[index]}`)
    })
})