const user = getId('search-user');
const message = getId('write-message');
const send = getId('send');

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