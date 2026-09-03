const senha = document.getElementById('senhaInput')
const olho = document.getElementById('senhaOlho')

olho.addEventListener('click', () => {
    if(senha.type == 'password'){
        senha.type = 'text'
    }
    else{
        senha.type = 'password'
    }
})