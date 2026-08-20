import { botaoBuscar } from "./tabela";

botaoBuscar.addEventListener('click', previsaoDias)

function previsaoDias() {
    const cidade = document.getElementById("cidade").value.trim();

    if (cidade === "") {
        alert("Digite o nome de uma cidade.");
        return;
    }

    const chaveApi = "6524a1ef013cd74821010118ec46574f";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt_br`;

        fetch(url)

            .then(function(resposta) {

                if (!resposta.ok) {
                    throw new Error("Cidade não encontrada.");
                }

                return resposta.json();
            })

            .then (function(dados) {
                function latitude(){
                    return dados.coord.lat
                }

                function longitute(){
                    return dados.coord.lon
                }
            })

    const latitude = latitude()

    const longitude = longitude()
    
    const previsaoUrl = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt={7}&appid=${chaveApi}`
    
        fetch(previsaoUrl)  

            .then(function(previsao) {
                for(let i = 0; i<=7; i++){
                    let lista = 
                }
            })
}