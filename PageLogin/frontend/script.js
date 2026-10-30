const botao = document.querySelectorAll('.clique')
const login = document.getElementById('login')
const cadastro = document.getElementById('cadastro')

botao.forEach(botao => {
    botao.addEventListener('click', () => {
        if(login.style.display.includes('flex')){
            login.style.display = 'none'
            cadastro.style.display = 'flex'
        }
        else{
            login.style.display = 'flex'
            cadastro.style.display = 'none'
        }
    })
})