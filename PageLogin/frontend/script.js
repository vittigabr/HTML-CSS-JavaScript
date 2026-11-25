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

// Parte do cadastro
cadastro.addEventListener('submit', async (evento) => {
    
    // Impede o carregamento automático da página
    evento.preventDefault()

    // Captura os valores de campo
    const emailCadastro = document.getElementById('emailCadastro').value
    const telefone = document.getElementById('telefone').value
    const nome = document.getElementById('nome').value
    const senhaCadastro = document.getElementById('senhaCadastro').value

    try{

        // Envia os dados ao Back
        const resposta = await fetch(
            'http://localhost:3000/usuarios/cadastro',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    email: emailCadastro,
                    telefone,
                    senha: senhaCadastro
                })
            }
        )

        // Transforma a resposta json em objeto js
        const dados = await resposta.json()

        // Verifica se o servidor respondeu erro
        if(!resposta.ok){
            throw new Error(dados.mensagem)
        }

        alert(dados.mensagem)

        evento.target.reset()
    }
    catch(erro){
        
        alert(erro.message)
    }
})

// Parte do login
login.addEventListener('submit', async (evento) => {
    
    // Impede o carregamento automático da página
    evento.preventDefault()

    // Captura os valores do campo
    const emailLogin = document.getElementById('emailLogin').value
    const senhaLogin = document.getElementById('senhaLogin').value

    try{

        // Envia os dados ao Back
        const resposta = await fetch(
            'http://localhost:3000/usuarios/login',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailLogin,
                    senha: senhaLogin
                })
            }
        )

        // Transforma a resposta json em objeto js
        const dados = await resposta.json()

        // Verifica se o servidor respondeu erro
        if(!resposta.ok){
            throw new Error(dados.mensagem)
        }

        // Guarda o token durante a sessão da aba
        sessionStorage.setItem('token', dados.token)

        // Guarda os dados básicos do usuário
        sessionStorage.setItem(
            'usuario',
            JSON.stringify(dados.usuario)
        )

        alert(dados.mensagem)

        evento.target.reset()
    }
    catch(erro){

        alert(erro.message)
    }
})