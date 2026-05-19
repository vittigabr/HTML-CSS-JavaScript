const botaoadd = document.getElementById('botaoAdd')
const botaofim = document.getElementById('botaoFim')
let res = document.getElementById('resultado')

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         console.log('A tecla Enter foi pressionada!');
//          Chame sua função aqui
//     }
// });

botaoadd.addEventListener('keydown' || 'click', adicionar)
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

function menor(lista){
    let ordem = lista.sort()
    let maior = ordem[0]
    return maior
}

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
    let last = maior(valores)
    let first = menor(valores)
    res.innerHTML = `menor: ${first}<br>`
    res.innerHTML += `maior: ${last}`   
}