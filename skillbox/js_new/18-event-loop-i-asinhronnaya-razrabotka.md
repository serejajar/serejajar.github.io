Все работает по условиям задач и вам большой плюс что вы корректно использовали Promise. ДЗ принято.

Что можно исправить:

Рекомендации
Рекомендую также изучить эти статьи и решить задачи к ним.
https://learn.javascript.ru/async
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# 2-я задача. Используют делэй и для setTimeout
У вас верный подход, и единственно нужно изменить значение delay для setTimeout

function progress() {
  const bar = document.querySelector('.progress-bar');
  bar.style.transform = 'scaleX(0)'
  bar.style.transformOrigin = 'left'

  const delay = Math.round(Math.random() * 5 + 2) * 1000;

  setTimeout(() => {
    bar.style.transition = `transform ${delay}ms linear`;
    bar.style.transform = 'scaleX(1)';
  }, 10)
}
Тут setTimeout нужен, что бы стили применились через какое-то время, пусть даже и небольшое, иначе они будут применены сразу и вы не увидите анимацию.


# 2-я задача. У меня бар растёт из середины в обе стороны
Используйте transform-origin: left; для класса .progress-bar.

# 2-я задача. Не могу сделать прогресс
код:

function animateProgressBar(timer, name) {
    const barEl = document.querySelector(`.progress-bar.container__${name}`).firstElementChild;
    barEl.style.transition = `width ${timer / 1000}s linear`;

    requestAnimationFrame(() => barEl.style.width = '100%')
}

стили:

.progress-bar {
    height: 20px;
    max-width: 500px;
    width: 100%;
    background-color: #24aadb;
    width: 0;
    transform-origin: left;
    border-radius: 8px;
    border: 1px #9c9999 solid;
}

# 2-я задача. Как сделать таймер для прогресса
нужно использовать setInterval, для того чтобы отобразить секунды. Вот пример как это сделать:

const time = setInterval(() => {
        if (currentTime <= timer) {
            stopwatchEl.textContent = `${currentTime}s`;
            currentTime++;
        } else {
            clearInterval(time);
        }
}, 1000)

# 3-я задача. Запускается 2 прогрсбара сразу
Не забывайте что loadImages(dogsImgArr) это вызов функции, т.е. когда скприт дойдет до строчки кода с вызовом первого loadImages(catsImgArr), код также и запустит loadImages(dogsImgArr) и соответсвенно добавится 2я линия прогресса. Вот так вы это можете исправить, чтобы все работало:

loadImages(catsImgArr).finally(() => loadImages(dogsImgArr))
