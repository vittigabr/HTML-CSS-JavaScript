const botao = document.getElementById('botao')

botao.addEventListener('click', verificar)
function verificar(){
    console.log('funciona')
    var inicio = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var pulo = document.getElementById('txt3')
    let res = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        alert('Preencha os dados corretamente.')
    }
    else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)
        if(p <= 0){
            alert('Pulo inválido, considerando 1')
            p = 1
        }
        
        if(i<f){
            //Contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c}...`
            }
        }else{
            //Contagem regressiva
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c}...`
            }
        }
        res.innerHTML += ' FIM' 
    }
}