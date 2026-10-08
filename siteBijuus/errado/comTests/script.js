let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()

}, 5000)

function proximaImg(){
    // if(cont==1){
    //     cont++
    // }
    // else if(cont==2){
    //     cont++
    // }
    // else{
    //     cont = 1
    // }
    cont++
    if(cont>3){
        cont =1
    }

    document.getElementById('radio' + cont).checked = true
}