//AREA CHART
var ctx1 = document.getElementById('areaChart').getContext('2d');
var areaChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

//BAR CHART
let ctx2 = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70]
        }]
    }
    // options: options
});

//Doughnut Chart
let ctx3 = document.getElementById('doughnutChart').getContext('2d');
let doughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20, 30]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    }

});