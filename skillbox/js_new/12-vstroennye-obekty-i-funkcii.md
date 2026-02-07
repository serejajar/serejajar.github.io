Задания выполнены на отлично и вам плюсик за верное использование кук!
ДЗ принято.

​Что можно улучшить
- Форма перезагружает страницу.
Сейчас функционал работает, т.е. клик на кнопку "Применить" добавит куки, но страница будет перезагружена ()хотя промокод и будет применен). В реальной работе лучше не перезагружать страницу и использовать preventDefault:

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

- Сейчас при вводе неверного промокода форма просто сбрасывается т.е. пользователь не будет понимать что произошло. Лучше явно указать что промокод не найден:
message.textContent = "Промокод не найден";

- В getCookie() — потенциальная ошибка, если document.cookie бедер равен "", то:
"".split("; ") // [""]
item.split("=") // [""] → name="", value=undefined

И в объект попадёт:
{ "": undefined }

Тут лучше добавить проверку с if:
function getCookie() {
  if (!document.cookie) return {};

  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    if (name) acc[name] = value;
    return acc;
  }, {});
}
- Куки могут содержать несколько значений поэтому лучше использовать исполльзовать точку с запятой ";" для разделения данных вида "ключ=значение". Но это больше на будущее, сейчас это не критично и на вашу работу не влияет.

Рекомендации
Рекомендую вам, в качестве дополнительного материала к изучению, вот эту статью про куки:
https://learn.javascript.ru/cookie
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# что лучше хранить в куках, а что в локал сторедж
Если очень коротко, то куки — для сервера и короткого срока хранения, localStorage — для клиента и долгой  срока хранения:

Куки автоматически отправляются на сервер с каждым запросом.

localStorage это хранилище только для браузера, сервер о нём ничего не знает.

# как поменять объект на массив c промокодами
Вот пример как вы можете получить промокод из массива.

function findPromo(promo, arr) {
  let value;

  arr.forEach((item, i) => {
    if (item.promocode != promo) return false;
    value = item.promocode;
  });

  return value;
}


​Далее вы можете использовать эту функцию для проверки промокода, например:

btnSubmit.addEventListener('click', (e) => {
  const userPromocode = findPromo(document.querySelector('.form__input').value, promocodeArr)
  /* остальной ваш код */
})


# где взять картинки для первой задаче
В этом задании не требуется вёрстка pixel perfect поэтому вы можете не добавлять изображение или добавить свое.

# Выдает undefined так как их нет.
Тут вам нужно также их установить если промокод успешно применился. Вот пример как  установить cookie:

document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('.form');
    const promoEl = document.querySelector('.promo');

    checkPromo(promoEl);

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const promo = getPromo(promoEl.value);
        if (promo.length > 0) {
            document.cookie = `promo=${promo[0]}`;
        } else {
            document.cookie = `promo=0`;
        }
        checkPromo(promoEl);
    });
});

# почему в режиме Live Server куки записываются, а когда просто открываю html в браузере они не записываются?

Куки работают только для HTTP(S).
