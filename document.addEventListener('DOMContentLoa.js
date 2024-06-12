document.addEventListener('DOMContentLoaded', function() {
    const showGraphBtn = document.getElementById('showGraphBtn');
    const graphDisplay = document.getElementById('graphDisplay');

    showGraphBtn.addEventListener('click', function() {
        // Здесь можно добавить логику для отображения графики
        graphDisplay.innerHTML = '<img src="https://example.com/graph_image.jpg" alt="Графика">';
    });
});