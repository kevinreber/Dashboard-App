//CHART DATA
const trafficData = {
    //labels are linked to datasets.data, if no labels are defined datasets.data will not display
    hourly: {
        labels: ['8am', '9am,', '10am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        data: [2.25, 3.5, 1.5, 2.75, 2.5, 4.25, 1.5, 2, .5, 3.75]
    },

    daily: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        data: [50, 20, 35, 90, 50, 65, 70]
    },

    weekly: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '18-24', '25-31'],
        data: [750, 1250, 1000, 1900, 1050, 1750, 1250, 1850, 2250, 1500, 2500]
    },

    monthly: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        data: [25800, 45200, 34400, 65500, 34590, 128850, 63350, 78443, 63866, 87500, 34250, 22350]

    }

}

//CHART DISPLAY
let displayTrafficData = {
    labels: trafficData.weekly.labels,
    datasets: [{
        data: trafficData.weekly.data,
        backgroundColor: colorPrimary,
        borderColor: colorSecondary,
        borderWidth: 1,
        pointHoverBackgroundColor: colorPrimaryHover,
        pointHoverRadius: 5,
        lineTension: 0
    }]
}

let displayTrafficOptions = {
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
    labels: trafficData.daily.labels,
    datasets: [{
        data: trafficData.daily.data,
        backgroundColor: colorPrimary,
        borderColor: colorSecondary,
        borderWidth: 1,
        hoverBackgroundColor: colorPrimaryHover,
        hoverBorderWidth: 3,
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2
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

const mobileData = {
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

const mobileOptions = {
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

//TRAFFIC CHART
let trafficCanvas = getId('traffic').getContext('2d');
let trafficChart = createChart(trafficCanvas, 'line', displayTrafficData, displayTrafficOptions);

//DAILY TRAFFIC CHART
const dailyCanvas = getId('daily-traffic').getContext('2d');
const dailyChart = createChart(dailyCanvas, 'bar', dailyData, dailyOptions);

//MOBILE USERS CHART
const mobileCanvas = getId('mobile-users').getContext('2d');
const mobileUser = createChart(mobileCanvas, 'doughnut', mobileData, mobileOptions);

//EVENT LISTENERS
//This event listens if one of the traffic-buttons are selected
trafficList.addEventListener('click', (e) => {
    const activeItem = e.target;
    const activeItemText = e.target.textContent.toLowerCase();
    let currentActiveItem = document.querySelector('.active');
    
    updateActive(currentActiveItem, activeItem);
    displayTrafficData.labels = trafficData[activeItemText].labels;
    displayTrafficData.datasets[0].data = trafficData[activeItemText].data;
    trafficChart.update();
});

//FUNCTIONS
//This function updates the style of the current item the user has selected
function updateActive(current, updated){
    current.classList.remove('active');
    updated.classList.add('active');
}

//This function creates a chart
function createChart(canvas, type, data, options) {
    const chart = new Chart(canvas, {
        type: type,
        data: data,
        options: options
    });
    return chart;
}