//This function selects an element by Id
function getId(id) {
    return document.getElementById(id);
}
//This function set's an item to chosen storage type
function storage(storage, keyName, keyValue) {
    return storage.setItem(keyName, keyValue);
}
//This function changes the opacity of the user's selected nav icon
function navBarChosen(oldSelection, newSelection) {
    oldSelection.classList.remove('nav-chosen');
    newSelection.classList.add('nav-chosen');
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
const onlineList = getId('online-list');
const onlineBar = document.querySelector('.online-header');
const navSlider = document.querySelector('.nav-slider');
const navItems = document.querySelector('.nav-items');

//CHART COLORS
const colorPrimary = '#384352';
const colorSecondary = '#2A323B';
const colorTertiary = '#425166';

const colorPrimaryHover = '#425166';
const colorSecondaryHover = '#4e5f75';
const colorTertiaryHover = '#2D3646';

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

//HANDLE NAV SLIDER
navItems.addEventListener('click', (e) => {
    let unselectedElement = document.querySelector('.nav-chosen');
    let element = e.target;
    let elementAttr = e.target.getAttribute("alt");
    if (elementAttr === 'Dashboard') {
        navSlider.style.top = '22px';
    }
    if (elementAttr === 'Visits') {
        navSlider.style.top = '85px';
    }
    if (elementAttr === 'Members') {
        navSlider.style.top = '150px';
    }
    if (elementAttr === 'Settings') {
        navSlider.style.top = '210px';
    }
    navBarChosen(unselectedElement, element);
});

//HANDLE FOOTER
onlineBar.addEventListener('click', (e) => {
    if (onlineList.style.display === 'block') {
        onlineList.style.display = 'none';
    } else
        onlineList.style.display = 'block';
});