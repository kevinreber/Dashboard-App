//CHART COLORS
const colorPrimary = 'rgb(116,119,191,.3)';
const colorSecondary = 'rgb(77,76,114,.8)';
const colorTertiary = 'rgb(116,119,191,.8)';

const colorPrimaryHover = 'rgb(116,119,191)';
const colorSecondaryHover = 'rgb(77,76,114)';
const colorTertiaryHover = 'rgb(116,119,191)';

//SELECTORS
const alertBar = document.getElementById('alert-bar');

//CHART DATA
let trafficData = {
    //labels are linked to datasets.data, if no labels are defined datasets.data will not display
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 15000, 1750, 1250, 1850, 2250, 1500, 2500],
        //Stylize
        backgroundColor: colorPrimary,
        borderColor: colorSecondary,
        borderWidth: 1,
        pointHoverBackgroundColor: colorPrimaryHover,
        pointHoverRadius: 5
    }]
}

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    //remove legend
    legend: {
        display: false
    },
    //offset gridlines
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
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
        data: [15, 20, 30, 40, 50, 60, 70]
    }]
}

const dailyOptions = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                //if true, lowest data number is set at start of graph
                beginAtZero: true
            }
        }]
    }
}

const userData = {
    labels: [
        'Phones',
        'Tablets',
        'Desktops'
    ],
    datasets: [{
        backgroundColor: [colorTertiary, colorSecondary, colorPrimary],
        data: [65, 10, 25]
    }]
}

const userOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 25,
            fontSize: 24,
            padding: 25
        }
    },
    animation: {
        animateScale: true
    }
}

function createChart(canvas, type, data,options){
    const chart = new Chart(canvas, {
        type: type,
        data: data,
        options: options
    });
    return chart;
}

//TRAFFIC CHART
let trafficCanvas = document.getElementById('traffic').getContext('2d');
let trafficChart = new Chart(trafficCanvas, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: trafficData,
    // Configuration options go here
    options: trafficOptions
});

//DAILY TRAFFIC CHART
const dailyCanvas = document.getElementById('daily-traffic').getContext('2d');
const dailyChart = createChart(dailyCanvas, 'bar', dailyData, dailyOptions);
// const dailyChart = new Chart(dailyCanvas, {
//     type: 'bar',
//     data: dailyData,
//     options: dailyOptions
// });

//MOBILE USERS CHART
const mobileCanvas = document.getElementById('mobile-users').getContext('2d');
const mobileUser = createChart(mobileCanvas, 'doughnut', userData, userOptions);
// const mobileUsersChart = new Chart(mobileCanvas, {
//     type: 'doughnut',
//     data: userData,
//     options: userOptions
// });

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