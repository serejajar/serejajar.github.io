// Функция 1: возвращает промис с массивом локальных URL изображений
function getFirstImageSet() {
    return new Promise((resolve) => {
        const delay = 2000 + Math.random() * 3000; // 2–5 секунд
        setTimeout(() => {
            const urls = [
                'img/cat1.jpg',
                'img/cat2.jpg',
                'img/cat3.jpg'
            ];
            resolve(urls);
        }, delay);
    });
}

// Функция 2: возвращает другой промис с локальными URL
function getSecondImageSet() {
    return new Promise((resolve) => {
        const delay = 2000 + Math.random() * 3000; // 2–5 секунд
        setTimeout(() => {
            const urls = [
                'img/dog1.jpg',
                'img/dog2.jpg',
                'img/dog3.jpg'
            ];
            resolve(urls);
        }, delay);
    });
}

// Отображает изображения на странице
function displayImages(urls, container) {
    const row = document.createElement('div');
    row.className = 'image-row';

    urls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Local image';
        row.appendChild(img);
    });

    container.appendChild(row);
}

// Загрузка изображений при открытии страницы
window.onload = function () {
    const container = document.getElementById('images-container');

    // Загружаю первый набор изображений
    getFirstImageSet()
        .then(urls => displayImages(urls, container));

    // Загружаю второй набор изображений
    getSecondImageSet()
        .then(urls => displayImages(urls, container));
};