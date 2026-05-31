const botaoA = document.getElementById('bntA')
const botaoP = document.getElementById('bntP')
// const semanas = document.querySelectorAll('.semana')
// const semana2 = document.querySelector('.semana2')
// const semana3 = document.querySelector('.semana3')
// const semana4 = document.querySelector('.semana4')
let cont = 1

// Primeira tentativa
// botaoP.addEventListener('click', () => {
//     const semanaSelecionada = document.querySelector('.semana.selecionada')
//     semanaSelecionada.classList.remove('selecionada')
//     semanas.forEach((indice) => {
//         semanas[indice].classList.add('.selecionada')
//     });
// })

// Segunda tentativa
// botaoP.addEventListener('click', () => {
//     const semanaSelecionada = document.querySelector('.semana1.selecionada')
//     if(cont==1){
//         cont++
//         semanaSelecionada.classList.remove('.selecionada')
//         semana2.classList.add('.selecionada')
//     }
//     else if(cont==2){
//         cont++
//         semanaSelecionada.classList.remove('.selecionada')
//         semana3.classList.add('.selecionada')
//     }
//     else if(cont==3){
//         cont++
//         semanaSelecionada.classList.remove('.selecionada')
//         semana4.classList.add('.selecionada')
//     }
//     else{
//         cont = 1
//     }
// })

botaoP.addEventListener('click', () => {
    const semanaSelecionada = document.querySelector('.selecionada')
    if(cont==1){
        cont = 2
        semanaSelecionada.style.marginLeft = '-25.9%'
    }
    else if(cont==2){
        cont = 3
        semanaSelecionada.style.marginLeft = '-107.6%'
    }
    else{
        cont = 4
        semanaSelecionada.style.marginLeft = '-516%'
    }
})

botaoA.addEventListener('click', () => {
    const semanaSelecionada = document.querySelector('.selecionada')
    if(cont==4){
        cont = 3
        semanaSelecionada.style.marginLeft = '-107.6%'
    }
    else if(cont==3){
        cont = 2
        semanaSelecionada.style.marginLeft = '-25.9%'
    }
    else{
        cont = 1
        semanaSelecionada.style.marginLeft = 'auto'
    }
})