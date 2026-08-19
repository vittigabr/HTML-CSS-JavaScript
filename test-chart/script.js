const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        pointBorderWidth: 9,
        pointBorderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      
    }
  });