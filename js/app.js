const alert = document.getElementById('alert-bar');

alert.innerHTML = `
<div class="alert-banner">
    <p><strong>ALERT:</strong> You have <strong>5</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>`;

alert.addEventListener('click', (e) =>{
    if (e.target.classList.contains('alert-banner-close')){
        alert.style.display = 'none';
    }
});