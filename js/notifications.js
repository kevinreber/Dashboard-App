const notificationArray = [
    'You have 7 new friend requests',
    'You have 18 new comments',
    'Someone mentioned you in a post',
    'You have been tagged in a photo',
    'A friend is going to an event near you!',
    'Your friends have birthdays coming up!',
    'You have been invited to an event',
    'You have video recommendations'
];

alertBar.innerHTML = `
<div class="alert-banner">
    <p><strong>ALERT:</strong> You have <strong>4</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>`;

alertBar.addEventListener('click', (e) => {
    if (e.target.classList.contains('alert-banner-close')) {
        slideUp(alertBar);
    }
});

ul.addEventListener('click', (e) => {
    let item = e.target;
    let itemParent = item.parentNode;
    if (item.classList.contains('toggle-notification')) {
        slideUp(itemParent);
    }
});

notify.addEventListener('click', () => {
    //badge disappears
    badge.style.display = 'none';
    popUp.style.display = 'block';

    if (ul.childNodes.length === 0) {
        const notifications = generateNotifications(notificationArray, 4);

        for (let i = 0; i < notifications.length; i++) {
            generateList(notifications[i]);
        }
    } else {
        toggleNotification.style.display = '';
    }
});

//This function generates a random list of notifications
function generateNotifications(notifications, num) {
    let notifyUser = [];

    for (let i = 0; i < num; i++) {
        let notify = notifications[Math.floor(Math.random() * notifications.length)];
        //Ensures no repeats in notifications
        if (notifyUser.includes(notify)) {
            i--;
        } else {
            notifyUser.push(notify);
        }
    }
    return notifyUser;
}

//This function creates a list item for an array
function generateList(item) {
    let li = document.createElement('li');
    li.innerHTML = `<p>${item}</p> <span class="toggle-notification">x</span>`;
    li.classList.add('notification-card');
    ul.appendChild(li);
}

//This function closes element
function slideUp(el) {
    el.style.transition = "all .5s ease-in-out";
    el.style.height = "0";
    el.style.padding = "0";
    el.style.border = "none";
    el.style.opacity = "0";
}

//This function slides element up when page loads
window.onload = () => {
    alertBar.style.transition = "all 1s ease-in-out";
    alertBar.style.height = "50px";
}