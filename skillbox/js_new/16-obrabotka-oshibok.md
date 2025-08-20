Проверил вашу работу. Все задания выполнены на отлично и вам плюсик за правильное использование try/catch!
ДЗ принято.

Что можно исправить:


Рекомендации
- Хотя вы правильно использовали try/catch, я все же рекомендую почитать вот эту статью. Практика никогда не бывает лишней.
https://learn.javascript.ru/try-catch

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# Как вывести ошибку если неполадки с сетью
Очень просто, вот так.

window.addEventListener('offline', (event) => {
    showAlert("Неполадки с сетью.");
});

window.addEventListener('online', () => {
    console.log("Соединение восстановлено");
    /* ваш код для запроса */
});

Проверить медленное соединение можно с помощью Date.now() перед и после запроса и затем вычесть разницу:

const startTime = Date.now(); // Засекаем время до начала загрузки

const response = await fetch("https://sb-film.skillbox.cc/ping", {
  method: "POST",
});

const endTime = Date.now();

const loadTime = (endTime - startTime) / 1000; // Время в секундах

console.log(`Время загрузки: ${loadTime} секунд`);

# 5-я задача
​Вот пример использования AbortController:

const controller = new AbortController(); // Создаётся AbortController – нужен, чтобы при необходимости отменить сетевой запрос.

async function checkNetwork() {
  try {
    const startTime = performance.now(); // Засекаем время начала

    const response = await fetch('https://sb-film.skillbox.cc/ping', {
      method: 'POST',
      signal: controller.signal
    });

    const endTime = performance.now(); // Время окончания
    const duration = endTime - startTime; // Сколько времени заняло

    console.log(duration)

    if (duration > 100 & duration < 500) { // Медленный интернет
      controller.abort() // // прерываем запрос fetch
      statusEl.className = 'network-status warning';
      messageEl.textContent = 'Медленное соединение';
    }

    if(duration > 500) {
        controller.abort() // прерываем запрос fetch
        statusEl.className = 'network-status error';
        messageEl.textContent = 'Неполадки с сетью';
    }
  } catch (error) { // Нет интернета
    statusEl.className = 'network-status error';
    messageEl.textContent = 'Неполадки с сетью';
  }
}

checkNetwork()
