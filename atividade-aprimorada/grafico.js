function previsaoTempo() {

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
            globalThis.latitude = dados.coord.lat
            globalThis.longitude = dados.coord.lon
        })

        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });

    const previsaoUrl = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${chaveApi}`

    fetch(previsaoUrl)

        .then(function(resposta) {

            if (!resposta.ok) {
                throw new Error("Cidade não encontrada.");
            }

            return resposta.json();
        })

        .then(function(dados) {
            console.log(dados)
        })
}

