//CHART COLORS
const primary = 'rgb(116,119,191,.3)';
const secondary = 'rgb(77,76,114,.8)';
const tertiary = 'rgb(116,119,191,.8)';

const primaryHover = 'rgb(116,119,191)';
const secondaryHover = 'rgb(77,76,114)';
const tertiaryHover = 'rgb(116,119,191)';

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
            backgroundColor: primary,
            borderColor: secondary,
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
});

//Doughnut Chart
let ctx3 = document.getElementById('doughnutChart').getContext('2d');
let doughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [
            'Phones',
            'Tablets',
            'Desktops'
        ],
        datasets: [{
            backgroundColor: [tertiary, secondary, primary],
            // hoverBackgroundColor: [tertiaryHover],
            data: [65, 10, 25]
        }]
    },
    options: {
        animation: {
            animateScale: true
        }
    }


});