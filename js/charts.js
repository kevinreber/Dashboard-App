//CHART COLORS
const colorPrimary = 'rgb(116,119,191,.3)';
const colorSecondary = 'rgb(77,76,114,.8)';
const colorTertiary = 'rgb(116,119,191,.8)';

const colorPrimaryHover = 'rgb(116,119,191)';
const colorSecondaryHover = 'rgb(77,76,114)';
const colorTertiaryHover = 'rgb(116,119,191)';

//SELECTORS
const alertBar = document.getElementById('alert-bar');

//AREA CHART
var ctx1 = document.getElementById('areaChart').getContext('2d');
var areaChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        //labels are linked to datasets.data, if no labels are defined datasets.data will not display
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            //Remove default legend
            label: '',
            backgroundColor: colorPrimary,
            borderColor: colorSecondary,
            borderWidth: 1,
            pointHoverBackgroundColor: colorPrimaryHover,
            pointHoverRadius: 5,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    }

    // Configuration options go here
    // options: {}
});

//BAR CHART
let ctx2 = document.getElementById('barChart').getContext('2d');
let barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '',
            backgroundColor: colorPrimary,
            borderColor: colorSecondary,
            borderWidth: 1,
            hoverBackgroundColor: colorPrimaryHover,
            hoverBorderWidth: 3,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            //Bars are measured in units of 10
            //Lowest number automatically updates to reflect changes in data 
            data: [15, 20, 30, 40, 50, 60, 70]
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
            backgroundColor: [colorTertiary, colorSecondary, colorPrimary],
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

// //Add data
// function changeData(chart, newLabels) {
//     console.log('works');
//     console.log(chart.data.labels.value);
    
//     chart.data.labels = [];
//     newLabels.forEach(function (label) {
//         chart.data.labels.push(label);
//     })
//     chart.update();
// }

//data.labels
//data.datasets.data

// alertBar.addEventListener('click', ()=>{
//     changeData(ctx1, ['yes','no']);
// });