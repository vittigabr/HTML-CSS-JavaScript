const botao = document.querySelectorAll('.clique')
const login = document.getElementById('login')
const cadastro = document.getElementById('cadastro')

botao.forEach(botao => {
    botao.addEventListener('click', () => {
        if(login.classList.contains('ativo')){
            login.classList.remove('ativo')
            cadastro.classList.add('ativo')
        }
        else{
            cadastro.classList.remove('ativo')
            login.classList.add('ativo')
        }
    })
})