import { previsaoDias } from "./grafico.js";

const botaoBuscar = document.getElementById("buscar");

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {

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

        .then(function(dados) {
            
            const lat = dados.coord.lat;
            
            const lon = dados.coord.lon;
            
            console.log(dados);
            console.log(lat, lon)

            document.getElementById("nomeCidade").textContent =
                dados.name;

            document.getElementById("temperaturaMin").textContent =
                dados.main.temp_min.toFixed(1);

            document.getElementById("temperaturaMax").textContent =
                dados.main.temp_max.toFixed(1);

            document.getElementById("sensacao").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umidade").textContent =
                dados.main.humidity;

            function calcularSunRise(){
                const timezone = dados.timezone
                const sunrise = dados.sys.sunrise

                const timestampLocal = (sunrise + timezone) * 1000;
                const dataLocal = new Date(timestampLocal);

                const hora = dataLocal.getUTCHours().toString().padStart(2, '0');
                const minuto = dataLocal.getUTCMinutes().toString().padStart(2, '0');

                document.getElementById('horaSunRise').textContent = hora
                document.getElementById('minutoSunRise').textContent = minuto
            }

            calcularSunRise()

            function calcularSunSet(){
                const timezone = dados.timezone
                const sunrise = dados.sys.sunset

                const timestampLocal = (sunrise + timezone) * 1000;
                const dataLocal = new Date(timestampLocal);

                const hora = dataLocal.getUTCHours().toString().padStart(2, '0');
                const minuto = dataLocal.getUTCMinutes().toString().padStart(2, '0');

                document.getElementById('horaSunSet').textContent = hora
                document.getElementById('minutoSunSet').textContent = minuto
            }
            calcularSunSet()

            const rajadaKmH = dados.wind.gust *3.6;

            const ventoKmH = dados.wind.speed * 3.6;

            document.getElementById("vento").textContent =
                ventoKmH.toFixed(1);
            
            document.getElementById("rajada").textContent =
                rajadaKmH.toFixed(1);

            previsaoDias(lat, lon, chaveApi)
        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}