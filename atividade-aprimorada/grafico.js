// coleta das informações do gráfico

let lista = []

export function previsaoDias(latitude, longitude, chaveApi) {

    const keyApi = chaveApi
    const lat = Number(latitude)
    const lon = Number(longitude)

    const previsaoUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`;
    
    fetch(previsaoUrl)  

        .then(res => {
            if (!res.ok) {
                throw new Error("Erro ao buscar a previsão de 5 dias.");
            }
            return res.json();
        })

        .then(function(previsao) {
            lista = [];

            if (previsao && previsao.list) {
                
                for (let i = 0; i < 7; i++) {
                    
                    if (previsao.list[i] && previsao.list[i].main) {
                        lista.push(previsao.list[i].main.temp);
                    }
                }
            }
            console.log(lista)
        })
}

// construção do gráfico 

const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: lista,
        borderWidth: 3,
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        pointBorderWidth: 9,
        pointBorderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: false
        }
        },
        
    }
});