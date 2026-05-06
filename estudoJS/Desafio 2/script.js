let botao = document.getElementById('botao')
botao.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtN')
    var res = document.querySelector('div#resultados')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        /* var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'foto-bebe.png') */
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'

        }
        else{
            genero = 'Mulher'
        }
        res.innerHTML = `Foi identificado um(a) ${genero} com ${idade} anos de idade.`
    }    
}