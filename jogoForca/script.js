const palavras = [
    "javascript",
    "computador",
    "programacao",
    "internet",
    "teclado",
    "desenvolvedor"
];

const palavraElemento = document.querySelector("#palavra");
const letrasUsadasElemento = document.querySelector("#letras-usadas");
const errosElemento = document.querySelector("#erros");
const mensagemElemento = document.querySelector("#mensagem");

const inputLetra = document.querySelector("#letra");

const botaoTentar = document.querySelector("#tentar");
const botaoReiniciar = document.querySelector("#reiniciar");

let palavraSecreta;
let letrasUsadas;
let erros;

const maxErros = 6;


function iniciarJogo() {

    const indice = Math.floor(Math.random() * palavras.length);

    palavraSecreta = palavras[indice];

    letrasUsadas = [];
    erros = 0;

    errosElemento.textContent = erros;
    letrasUsadasElemento.textContent = "";
    mensagemElemento.textContent = "";

    botaoTentar.disabled = false;

    atualizarPalavra();
}


function atualizarPalavra() {

    let palavraExibida = "";

    for (let letra of palavraSecreta) {

        if (letrasUsadas.includes(letra)) {

            palavraExibida += letra + " ";

        } else {

            palavraExibida += "_ ";
        }
    }

    palavraElemento.textContent = palavraExibida;

    verificarResultado();
}


function tentarLetra() {

    const letra = inputLetra.value.toLowerCase();

    inputLetra.value = "";

    if (letra === "") {
        return;
    }

    if (letrasUsadas.includes(letra)) {

        mensagemElemento.textContent =
            "Você já tentou essa letra.";

        return;
    }

    mensagemElemento.textContent = "";

    letrasUsadas.push(letra);

    if (!palavraSecreta.includes(letra)) {

        erros++;

        errosElemento.textContent = erros;
    }

    letrasUsadasElemento.textContent =
        letrasUsadas.join(", ");

    atualizarPalavra();
}


function verificarResultado() {

    const ganhou = palavraSecreta
        .split("")
        .every(letra => letrasUsadas.includes(letra));

    if (ganhou) {

        mensagemElemento.textContent =
            "Você venceu! 🎉";

        botaoTentar.disabled = true;

        return;
    }

    if (erros >= maxErros) {

        mensagemElemento.textContent =
            `Você perdeu! A palavra era: ${palavraSecreta}`;

        botaoTentar.disabled = true;
    }
}


botaoTentar.addEventListener("click", tentarLetra);


inputLetra.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        tentarLetra();
    }
});


botaoReiniciar.addEventListener("click", iniciarJogo);


iniciarJogo();