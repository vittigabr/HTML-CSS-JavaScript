//let bnt = document.getElementsByTagName('button')[0].addEventListener('click'); function mudarCor() {}

/*function changeColor(){
    console.log("funciona")
    let body = document.getElementById('body-div')
    if(body.classList.contains("light-bg")){
        body.classList.remove('light-bg')
        body.classList.add('dark-bg')
    }else{
        body.classList.remove('dark-bg')
        body.classList.add('light-bg')
    }
    
}*/

var botao = document.querySelector('#bnt')
botao.addEventListener('click', changeColor())

function changeColor(){
    console.log('funciona')
    var back = document.querySelector('.body-div')
    if (back.classList.contains('light-theme')){
        back.classList.remove('light-theme');
        back.classList.add('dark-theme');
    }
    else{
        back.classList.remove('dark-theme');
        back.classList.add('light-theme');
    }
}