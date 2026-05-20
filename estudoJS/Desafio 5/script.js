const botaoadd = document.getElementById('botaoAdd')
const botaofim = document.getElementById('botaoFim')
let res = document.getElementById('resultado')

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         console.log('A tecla Enter foi pressionada!');
//          Chame sua função aqui
//     }
// });

botaoadd.addEventListener('click', adicionar)
let valores = []

// função que verifica se existe aquele número no array
function inLista(numero){
    if(valores.indexOf(numero) == -1){ //indexOf é uma função do js que retorna -1 caso number não encontrado no array e o indice caso seja encontrado
        return true
    }
    else{
        return false
    }
}

// finção que soma os elementos dentro da lista
function somar(lista){
    let soma = 0
    for(let pos in lista){
        soma += lista[pos]
    }
    return soma
}

// função que faz media dos elementos da lista
function media(lista){
    let soma = 0
    for(let pos in lista){
        soma += lista[pos]
    }
    let media = soma/lista.length
    return media
}

// função que diz qual o menor número da lista
function menor(lista){
    let ordem = lista.sort()
    let maior = ordem[0]
    return maior
}

// função que diz qual o maior número da lista
function maior(lista){
    let ordem = lista.sort()
    let ind = ordem.length - 1
    let menor = ordem[ind]
    return menor
}

function adicionar(){
    let number = document.getElementById('txtn')

    if(number.value.length == 0){
        alert('[ERROR] Preencha os dados!')
    }
    else if(number.value <= 0 || number.value > 100){
        alert('[ERROR] Número não permitido')
    }
    else{
        let sel = document.getElementById('info')
        let num = Number(number.value)
        let item = document.createElement('option')
        let verif = inLista(num)
        if(verif){
            item.text = `Adicionado o ${num}`
            sel.appendChild(item)
            valores.push(num)
        }
        else{
            alert('[ERROR] Esse valor já foi adicionado')
        }   
    }
}

botaofim.addEventListener('click', finalizar)

function finalizar(){
    res.innerHTML = `Ao todo, temos ${valores.length} números; <br>`
    res.innerHTML += `menor: ${menor(valores)}; <br>`
    res.innerHTML += `maior: ${maior(valores)}; <br>`
    res.innerHTML += `A soma dos números é ${somar(valores)}; <br>`
    res.innerHTML += `A média dos números é ${media(valores)}`
}