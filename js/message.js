const user = selectElementById('search-user');
const message = selectElementById('write-message');
const send = selectElementById('send');

send.addEventListener('click', () => {
    if (user.value === '' || message.value === '') {
        alert('Please fill out user & message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out user field before sending');
    } else if (message.value = '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`message successfully sent to ${user.value}!`);
    }
});