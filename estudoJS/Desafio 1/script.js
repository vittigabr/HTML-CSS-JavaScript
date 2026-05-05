let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()

let hora_minuto = document.getElementById('horas')
hora_minuto.innerHTML = `<p>Agora são ${hora}h${minuto}.</p>`