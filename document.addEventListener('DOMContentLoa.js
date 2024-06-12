document.addEventListener('DOMContentLoaded', function() {
    const showMessageBtn = document.getElementById('showMessageBtn');
    const messageDisplay = document.getElementById('messageDisplay');

    showMessageBtn.addEventListener('click', function() {
        messageDisplay.textContent = 'Привет! Это пример Telegram Mini App.';
    });
});