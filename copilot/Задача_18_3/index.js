// Функция прогресс-бара с плавной анимацией
const progress = (time, progressBarId, timerId) => {
    return new Promise((resolve) => {
        // Устанавливаю минимальное время 2 секунды
        const duration = Math.max(time, 2) * 1000; // перевожу в миллисекунды
        const startTime = performance.now();
        const progressBar = document.getElementById(progressBarId);
        const timerElement = document.getElementById(timerId);

        // Сбрасываю состояние
        progressBar.style.width = '0%';
        progressBar.style.transition = 'none';
        timerElement.textContent = '0';

        // Функция анимации
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Обновляю прогресс-бар
            progressBar.style.width = `${ progress * 100 }%`;

            // Обновляю таймер (целые секунды)
            const seconds = Math.floor(progress * time);
            timerElement.textContent = seconds;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Завершаю анимацию точно в 100%
                progressBar.style.width = '100%';
                timerElement.textContent = Math.round(time);
                resolve();
            }
        };

        // Небольшая задержка для корректного сброса анимации
        setTimeout(() => {
            progressBar.style.transition = 'width 0.1s linear';
            requestAnimationFrame(animate);
        }, 10);
    });
};

// Мок-функции для загрузки изображений
const loadFirstImageSet = () => {
    const loadTime = 2 + Math.random() * 3; // 2-5 секунд

    return {
        promise: new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    'img/cat1.jpg',
                    'img/cat2.jpg',
                    'img/cat3.jpg'
                ]);
            }, loadTime * 1000);
        }),
        time: loadTime
    };
};

const loadSecondImageSet = () => {
    const loadTime = 2 + Math.random() * 3; // 2-5 секунд

    return {
        promise: new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    'img/dog1.jpg',
                    'img/dog2.jpg',
                    'img/dog3.jpg'
                ]);
            }, loadTime * 1000);
        }),
        time: loadTime
    };
};

// Функция для отображения изображений
const displayImages = (urls, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const row = document.createElement('div');
    row.className = 'image-row';

    urls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Loaded image';
        row.appendChild(img);
    });

    container.appendChild(row);
};

// Основная функция загрузки
const startLoading = async () => {
    try {
        // Загружаю первый набор изображений
        const firstSet = loadFirstImageSet();
        await progress(firstSet.time, 'progress-bar-1', 'timer-1');
        const firstImages = await firstSet.promise;
        displayImages(firstImages, 'images-1');

        // Загружаю второй набор изображений
        const secondSet = loadSecondImageSet();
        await progress(secondSet.time, 'progress-bar-2', 'timer-2');
        const secondImages = await secondSet.promise;
        displayImages(secondImages, 'images-2');
    } catch (error) {
        console.error('Error loading images:', error);
    }
};

// Запускаю процесс при загрузке страницы
window.onload = startLoading;