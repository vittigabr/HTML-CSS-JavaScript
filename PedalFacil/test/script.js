// const listaImg = [
//     'https://images.unsplash.com/photo-1673121414328-52eff37bc6d0?w=600&h=400&fit=crop&auto=format',
//     'https://images.unsplash.com/photo-1591047139334-337807f2b3e5?w=600&h=400&fit=crop&auto=format',
//     'https://images.unsplash.com/photo-1620802051782-725fa33db067?w=600&h=400&fit=crop&auto=format',
//     'https://images.unsplash.com/photo-1499115026740-47ec7a0d026e?w=600&h=400&fit=crop&auto=format']

// const cardImg = document.querySelectorAll('.imgBike')

// const botaoBike = document.querySelectorAll('.botaoBike')
// const bikeSelecionada = document.getElementById('bikeSelecionada')

// const listTipo = document.querySelectorAll('.smallCard')
// const listNome = document.querySelectorAll('.h2Card')
// const listPreco = document.querySelectorAll('.precoCard')

// const preco = document.getElementById('precoAluguel')
// const precoAluguel = document.querySelectorAll('.precoAluguel')

// let indexacao 

// cardImg.forEach((card, index) => {
//     card.style.backgroundImage = `url(${listaImg[index]})`
// })

// botaoBike.forEach((botao, index) => {
//     botao.addEventListener('click', () => {
//         if(botao.textContent == 'Indisponível'){
//             alert('Este item está indisponível')
//             document.querySelector('.cardPreco').style.display = 'none'
//         }
//         else{
//             bikeSelecionada.setAttribute('src', `${listaImg[index]}`)

//             document.getElementById('tipoInfo').textContent = listTipo[index].textContent
            
//             document.getElementById('nomeInfo').textContent = listNome[index].textContent

//             const precoInfo = document.getElementById('precoInfo').textContent = listPreco[index].textContent

//             preco.textContent = listPreco[index].textContent

//             precoAluguel.forEach((preco, index) => {
//                 preco.textContent = ''
//             })

//             document.querySelector('.cardPreco').style.display = 'flex'
//         }
//         indexacao = index
//     })
// })



// // Contagem de dias de aluguel
// const dataRetirada = document.getElementById('dataRetirada')
// const dataDevolucao = document.getElementById('dataDevolucao')
// const botaoConfirmar = document.getElementById('botaoConfirmar')

// const mes31 = ['01', '03', '05', '07', '08', '10', '12']
// const mes30 = ['04', '06', '09', '11']

//     //a a a a - m m - d d
//     //0 1 2 3 4 5 6 7 8 9  

// let contadorDias = 0

// botaoConfirmar.addEventListener('click', () => {
//     const diaRetirada = dataRetirada.value[8] + dataRetirada.value[9]
//     const mesRetirada = dataRetirada.value[5] + dataRetirada.value[6]

//     const diaDevolucao = dataDevolucao.value[8] + dataDevolucao.value[9]
//     const mesDevolucao = dataDevolucao.value[5] + dataDevolucao.value[6]

//     if(mesDevolucao != mesRetirada){
//         if(mes31.includes(mesRetirada)){
//             contadorDias = (31 + Number(diaDevolucao)) - Number(diaRetirada)
//         }
//         else if(mes30.includes(mesRetirada)){
//             contadorDias = (30 + Number(diaDevolucao)) - Number(diaRetirada)  
//         }
//         else{
//             contadorDias = (28 + Number(diaDevolucao)) - Number(diaRetirada) 
//         }
//     }
//     else{
//         contadorDias = Number(diaDevolucao) - Number(diaRetirada)
//     }

//     const diasAluguel = document.querySelectorAll('.diasAluguel')

//     diasAluguel.forEach((dia, index) => {
//         dia.textContent = String(contadorDias)
//     })

//     let contadorPreco

//     contadorPreco = contadorDias * Number(listPreco[indexacao].textContent)

//     precoAluguel.forEach((preco, index) => {
//         preco.textContent = contadorPreco.toFixed(2).replace('.', ',')
//     })
// })

const dataRetirada = document.getElementById('dataRetirada');
const dataDevolucao = document.getElementById('dataDevolucao');

const botaoConfirmar = document.getElementById('botaoConfirmar');

const diasAluguel = document.querySelectorAll('.diasAluguel');
const precoAluguel = document.querySelectorAll('.precoAluguel');

const bike = JSON.parse(
    localStorage.getItem('bikeSelecionada')
);


// Mostra a bicicleta selecionada

if (bike) {

    document.getElementById('bikeSelecionada').src =
        bike.imagem;

    document.getElementById('tipoInfo').textContent =
        bike.tipo;

    document.getElementById('nomeInfo').textContent =
        bike.nome;

    document.getElementById('precoInfo').textContent =
        bike.preco;

    document.getElementById('precoAluguel').textContent =
        bike.preco;

    document.querySelector('.cardPreco').style.display =
        'flex';
}


// Calcula o aluguel

botaoConfirmar.addEventListener('click', () => {

    if (!dataRetirada.value || !dataDevolucao.value) {

        alert('Preencha as datas.');
        return;
    }


    const retirada =
        new Date(dataRetirada.value + 'T00:00:00');

    const devolucao =
        new Date(dataDevolucao.value + 'T00:00:00');


    if (devolucao <= retirada) {

        alert(
            'A data de devolução deve ser posterior à retirada.'
        );

        return;
    }


    const diferenca = devolucao - retirada;

    const milissegundosDia =
        1000 * 60 * 60 * 24;

    const contadorDias =
        diferenca / milissegundosDia;


    diasAluguel.forEach((dia) => {

        dia.textContent = contadorDias;

    });


    const precoDia = Number(bike.preco);

    const total =
        contadorDias * precoDia;


    precoAluguel.forEach((preco) => {

        preco.textContent =
            total
                .toFixed(2)
                .replace('.', ',');

    });

});