//SELECTOR FUNCTION
function selectElementById(id){
    return document.getElementById(id);
}

const alertBar = selectElementById('alert-bar');
const bell = selectElementById('bell');
const popUp = selectElementById('notification-pop-up');
const ul = selectElementById('notification-list');
const li = document.querySelectorAll('.close-notification');
const badge = document.querySelector('.badge');

//CHART COLORS
const colorPrimary = 'rgb(116,119,191,.3)';
const colorSecondary = 'rgb(77,76,114,.8)';
const colorTertiary = 'rgb(116,119,191,.8)';

const colorPrimaryHover = 'rgb(116,119,191)';
const colorSecondaryHover = 'rgb(77,76,114)';
const colorTertiaryHover = 'rgb(116,119,191)';