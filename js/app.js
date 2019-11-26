//This function selects an element by Id
function getId(id) {
    return document.getElementById(id);
}

const alertBar = getId('alert-bar');
const bell = getId('bell');
const popUp = getId('notification-pop-up');
const ul = getId('notification-list');
const trafficList = getId('traffic-list');
const badge = getId('badge');
const form = getId('form');
const timezone = getId('timezone');
const saveSettings = getId('save');
const clearSettings = getId('cancel');
const messageList = getId('msg-list');
const messageBar = document.querySelector('.msg-header');
let timezoneStorage = localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('storage')) : [];


//CHART COLORS
const colorPrimary = 'rgb(116,119,191,.3)';
const colorSecondary = 'rgb(77,76,114,.8)';
const colorTertiary = 'rgb(116,119,191,.8)';

const colorPrimaryHover = 'rgb(116,119,191)';
const colorSecondaryHover = 'rgb(77,76,114)';
const colorTertiaryHover = 'rgb(116,119,191)';

//LOCAL STORAGE
form.addEventListener('submit', (e) => {
    timezoneStorage.push(timezone.value);
    localStorage.setItem('timezoneSettings', JSON.stringify(timezoneStorage));
});

form.addEventListener('reset', (e) => {
    localStorage.clear();
});

//HANDLE FOOTER
messageBar.addEventListener('click', (e) => {
    if (messageList.style.display === 'block') {
        messageList.style.display = 'none';  
    } else
        messageList.style.display = 'block';
});