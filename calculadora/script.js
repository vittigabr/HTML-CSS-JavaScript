//let bnt = document.getElementsByTagName('button')[0].addEventListener('click'); function mudarCor() {}

function changeColor(){
    console.log("funciona")
    let body = document.getElementById('body-div')
    if(body.classList.contains("light-bg")){
        body.classList.remove('light-bg')
        body.classList.add('dark-bg')
    }else{
        body.classList.remove('dark-bg')
        body.classList.add('light-bg')
    }
    
}