const botaoadd = document.getElementById('botaoAdd')
const botaofim = document.getElementById('botaoFim')
let res = document.getElementById('resultado')

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
    
}