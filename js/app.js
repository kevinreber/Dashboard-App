//This function selects an element by Id
function getId(id) {
    return document.getElementById(id);
}
//This function set's an item to chosen storage type
function storage(storage, keyName, keyValue) {
    return storage.setItem(keyName, keyValue);
}

const alertBar = getId('alert-bar');
const notify = getId('notify');
const popUp = getId('notification-pop-up');
const ul = getId('notification-list');
const toggleNotification = document.querySelectorAll('.toggle-notification');
const trafficList = getId('traffic-list');
const badge = getId('badge');
const emailSettings = getId('settings-email');
const profSettings = getId('settings-profile');
const timezone = getId('timezone');
const settingsButton = getId('settings-button');
const saveSettings = getId('save');
const clearSettings = getId('cancel');
const messageList = getId('msg-list');
const messageBar = document.querySelector('.msg-header');

//CHART COLORS
const colorPrimary = 'rgb(116,119,191,.3)';
const colorSecondary = 'rgb(77,76,114,.8)';
const colorTertiary = 'rgb(116,119,191,.8)';

const colorPrimaryHover = 'rgb(116,119,191)';
const colorSecondaryHover = 'rgb(77,76,114)';
const colorTertiaryHover = 'rgb(116,119,191)';

//LOCAL STORAGE
settingsButton.addEventListener('click', (e) => {
    const button = e.target;

    if (button.id === 'save') {
        storage(localStorage, 'timezone', timezone.value);
        storage(localStorage, 'email', emailSettings.checked);
        storage(localStorage, 'profile', profSettings.checked);
    } else if (button.id === 'cancel') {
        localStorage.clear();
        location.reload();
    }
});

window.onload = checkStorage();

//This function checks to see if there are any values in Local Storage
function checkStorage() {
    if (localStorage.timezone) {
        timezone.value = localStorage.timezone;
        emailSettings.checked = JSON.parse(localStorage.email);
        profSettings.checked = JSON.parse(localStorage.profile);
    }
}

//HANDLE FOOTER
messageBar.addEventListener('click', (e) => {
    if (messageList.style.display === 'block') {
        messageList.style.display = 'none';
    } else
        messageList.style.display = 'block';
});