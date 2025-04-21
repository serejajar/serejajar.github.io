function progress(time) {
    if (time < 2) time = 2; // Минимальное время — 2 секунды

    const progressBar = document.getElementById('progress-bar');
    const timerElement = document.getElementById('timer');
    let secondsPassed = 0;

    // Запускаю анимацию
    progressBar.style.transition = `transform ${ time }s linear`;
    progressBar.style.transform = 'scaleX(1)';

    // Обновляю таймер каждую секунду
    const timerInterval = setInterval(() => {
        secondsPassed++;
        timerElement.textContent = secondsPassed;

        // Останавливаю таймер по истечении времени
        if (secondsPassed >= time) {
            clearInterval(timerInterval);
        }
    }, 1000);

    // Сбрасываю анимацию после завершения
    setTimeout(() => {
        progressBar.style.transition = 'none';
        progressBar.style.transform = 'scaleX(0)';
    }, time * 1000);
}

// Запускаем прогресс-бар на 5 секунд (можно изменить)
progress(5);