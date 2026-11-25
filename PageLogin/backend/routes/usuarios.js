const express = require('express')
const router = express.Router()

const conexao = require('../config/database')
const bcrypt = require('bcrypt')

router.post('/cadastro', async (req, res) => {

    try{
        const {email, telefone, nome, senha} = req.body

        // Verifica se foram preenchidos
        if(!email || !telefone || !nome || !senha){
            return res.status(400).json({
                mensagem: 'Preencha os dados obrigatórios'
            })
        }

        // verifica se o email já existe
        const [existente] = await conexao.execute(
            'select id_usuario from usuario where email = ?', [email]
        )

        if(existente.length > 0){
            return res.status(409).json({
                mensagem: 'Este email já foi cadastrado'
            })
        }

        // Gerando hash da senha
        const senhaHash = await bcrypt.hash(senha, 10)

        // Insere o usuário no banco
        await conexao.execute(
            `insert into usuario
            (email, telefone, nome, senha)
            values (?, ?, ?, ?)`,
            [email, telefone, nome, senhaHash]
        )

        // Envia resposta ao Front
        res.status(201).json({
            mensagem: 'Cadastro foi realizado'
        })
    }
    catch(erro){
        console.log(erro)

        res.status(500).json({
            mensagem: 'Erro de cadastro'
        })
    }
})

const jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {

    try{
        const {email, senha} = req.body

        // Procura o usuário pelo email
        const [usuarios] = await conexao.execute(
            'select * from usuario where email = ?',
            [email]
        )

        // verfica se existe o usuário
        if(usuarios.length === 0){
            return res.status(401).json({
                mensagem: 'Email ou senha incorretos'
            })
        }

        const usuario = usuarios[0]

        // Compara a senha digitada com o hash
        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        )

        if(!senhaCorreta){
            return res.status(401).json({
                mensagem: 'Email ou senha incorretos'
            })
        }

        // Cria token de autentificação
        const token = jwt.sign(
            {id: usuario.id},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        )

        res.json({
            mensagem: 'Login realizado com sucesso',
            token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        })
    } 
    catch(erro){
        console.log(erro)

        res.status(500).json({
            mensagem: 'Erro ao realizar login.'
        })
    }
})

module.exports = router