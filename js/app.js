//SELECTOR FUNCTION
//This function selects an element by Id
function getId(id){
    return document.getElementById(id);
}

const alertBar = getId('alert-bar');
const bell = getId('bell');
const popUp = getId('notification-pop-up');
const ul = getId('notification-list');
const trafficList = getId('traffic-list');
const badge = document.querySelector('.badge');


//CHART COLORS
const colorPrimary = 'rgb(116,119,191,.3)';
const colorSecondary = 'rgb(77,76,114,.8)';
const colorTertiary = 'rgb(116,119,191,.8)';

const colorPrimaryHover = 'rgb(116,119,191)';
const colorSecondaryHover = 'rgb(77,76,114)';
const colorTertiaryHover = 'rgb(116,119,191)';