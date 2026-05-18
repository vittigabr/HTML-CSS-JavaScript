const botao = document.getElementById('botao')

botao.addEventListener('click', tabuada)
function tabuada(){
    let num = document.getElementById('txt1')
    let sel = document.getElementById('seltab')
    
    if(num.value.length == 0){
        alert('Preencha os dados corretamente')
    }
    else{
        let numero = Number(num.value)
        
        sel.innerHTML = ''
        for(let c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `sel${c}`
            sel.appendChild(item)
        }
    }
}