Задание выполнено на отлично и вам плюсик за верное использование кук!

ДЗ принято.

Рекомендации
Рекомендую вам, в качестве дополнительного материала к изучению, вот эту статью про куки:
https://learn.javascript.ru/cookie
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

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


#
Выдает undefined так как их нет.
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
