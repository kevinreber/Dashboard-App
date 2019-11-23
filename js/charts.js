//This function creates a constant chart
function createChart(canvas, type, data, options) {
    const chart = new Chart(canvas, {
        type: type,
        data: data,
        options: options
    });
    return chart;
}

const trafficData = {
    hourly: {
        labels: ['8am', '9am,', '10am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        data: [2, 0, 1, 0, 2, 4, 1, 2, 0, 3]
    },

    daily: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        data: [15, 20, 30, 40, 50, 60, 70]
    },

    weekly: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '18-24', '25-31'],
        data: [750, 1250, 1000, 2000, 15000, 1750, 1250, 1850, 2250, 1500, 2500]
    },

    monthly: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        data: [25800, 45200, 34400, 65500, 34590, 128850, 63350, 78443, 63866, 87500, 34250, 22350]

    }

}

//CHART DATA
let displayTrafficData = {
    //labels are linked to datasets.data, if no labels are defined datasets.data will not display
    labels: trafficData.weekly.labels,
    datasets: [{
        data: trafficData.weekly.data,
        //Stylize
        backgroundColor: colorPrimary,
        borderColor: colorSecondary,
        borderWidth: 1,
        pointHoverBackgroundColor: colorPrimaryHover,
        pointHoverRadius: 5
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
        //Bars are measured in units of 10 
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
let trafficCanvas = selectElementById('traffic').getContext('2d');
let trafficChart = new Chart(trafficCanvas, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: displayTrafficData,
    // Configuration options go here
    options: displayTrafficOptions
});

//DAILY TRAFFIC CHART
const dailyCanvas = selectElementById('daily-traffic').getContext('2d');
const dailyChart = createChart(dailyCanvas, 'bar', dailyData, dailyOptions);

//MOBILE USERS CHART
const mobileCanvas = selectElementById('mobile-users').getContext('2d');
const mobileUser = createChart(mobileCanvas, 'doughnut', mobileData, mobileOptions);

//This event listens to if one of the traffic-buttons are selected
trafficList.addEventListener('click', (e) => {
    //select li item user clicks
    const activeItem = e.target;
    //use text.content.tolowercase() to take text
    const activeItemText = e.target.textContent.toLowerCase();
    //select current current active li item
    let currentActiveItem = document.querySelector('.active');
    //remove .active
    currentActiveItem.classList.remove('active');
    //add .active to new active-button
    activeItem.classList.add('active');
    //use activeItemText to choose which datasets.data information to get
    //trafficData.datasets[0].data = trafficData.activeItemText.data;

    console.log(displayTrafficData.datasets[0].data);
    console.log(activeItemText);

    console.log(trafficData.activeItemText.labels);
    console.log(trafficData.hourly.labels);
});