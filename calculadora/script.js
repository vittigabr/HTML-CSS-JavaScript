let bnt = document.querySelector('bnt');

bnt.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    if(className=='light-theme'){
        this.textContent = 'Dark';
    }
    else{
        this.textContent = 'Light';
    }
});
