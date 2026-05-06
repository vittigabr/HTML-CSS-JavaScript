let agora = new Date()
var hora = agora.getHours()
let minuto = agora.getMinutes()

let hora_minuto = document.getElementById('horas')
hora_minuto.innerHTML = `<p>Agora são ${hora}h${minuto}.</p>`

let img = document.getElementById('imgs')

if(hora >= 7 && hora < 12){
    img.src = 'assets/manha.jpg'
    document.body.style.background = '#ec6b01'
}
else if(hora >= 12 && hora < 18){
    img.src = 'assets/tarde.jpg'
    document.body.style.background = '#f0da12'
}
else{
    img.src = 'assets/noite.jpg'
    document.body.style.background = '#000'
}