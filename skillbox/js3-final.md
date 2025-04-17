Проверил вашу работу.

UI
Вам плюсик за детальную проработку UI в соответствии с условием финальной работы. Отлично!


Код
По коду все выглядит отлично и вам плюсик за использование классов и шаблонных строк для создания элементов в работе.

Что можно улучшить:
- Нет разбивки кода по файлам, но это не критично.
- Нет комментариев к коду, но это не критично.
- Нет разбивки кода по файлам и комментариев к коду, но это не критично.


Думаю исправить эти мелочи не составит для вас труда поэтому я готов принять практическую работу. Напишите, если есть вопросы ко мне или я могу принять вашу работу.


###
Принять
Хотел придраться к чему-то, но все выглядит отлично! Практическая работа принята.

Рекомендации
Хочу вам порекомендовать вот эти ресурсы для доп. изучения:

https://learn.javascript.ru/
 - В нем очень подробно описаны все составляющие части языка Javascript, есть много задач закрепляющих знания на практике.

https://developer.mozilla.org/ru/
 - Хороший источник для получения подробных сведений о функциях языка, методах встроенных объектов и так далее.

http://caniuse.com
 - таблицы с информацией о поддержке по каждой возможности языка. В том числе и поддержки браузеров.

Эти ресурсы помогут вам в изучении JS и в дальнейшей работе.

Удачи в дальнейшей работе и обучении. Вы неплохо пишите код, мне было приятно проверять вашу работу.

PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.


###
Вопросы
# Как сделать фильтрацию по клику
Вам нужно добавить сами функции-обработчики события change для каждого чекбокса, где вы и будете вызывать вашу функцию по фильтрации. Вот пример как это сделать:

// Обработчики для фильтрации по категориям
const categoryCheckboxes = document.querySelectorAll('.custom-checkbox__field:not(#agree)');

categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => { /* ваш код тут */});
});

# как отфилтровать товары
Вам нужно получить все товары и затем отфильтровать массив с товарами, т.е. вам нужно написать функцию которая будет фильтровать товары в зависимости от выбранных чекбоксов. Вот пример как можно выполнить фильтрацию продуктов:

export function filterProducts(products) {
  let filteredProducts = [...products];

  const checkedTypes = [...document.querySelectorAll(".custom-checkbox__field:checked")].map(input => input.value);
  if (checkedTypes.length > 0) {
    filteredProducts = filteredProducts.filter(product => product.type.some(type => checkedTypes.includes(type)));
  }

  const status = document.querySelector("input[name='status']:checked")?.value;

  if (status === "instock") {
    filteredProducts = filteredProducts.filter(product =>
      product.availability && Object.values(product.availability).some(count => count > 0));
  }
  return filteredProducts;


# Как отобразить количества товаров в соответствующей категории рядом с каждым фильтром (чекбоксом) в форме.

Тут вам нужно их вычесть из тех данных товаров которые вы получаете, т.е.:

1) Вам нужно получить данные товаров из ./data/data.json (это у вас готово)

2) Вам нужно посчитать сколько товаров имеет тип соответвующий чекбоксу
фильтрации. Также учитывайте то что у товара может быть несколько типов:
"type": ["pendant", "nightlights"],
https://gitlab.skillbox.ru/aleksandra_rogalskaia/javaScript-new/-/blob/dev/data/data.json#L16
3) После этого отобразить чекбокс и количество товаров

В это случае вы можете пройтись циклом по значениям в types в случае если оно есть то обновить счетчик для каждого фильтра. Тут в этой логике довольно трудно разобраться, поэтому в качестве исключения я пришлю пример кода функции подсчета количества товаров по категориям:

//функция подсчета количества товаров по категориям
export function getCountProductsToCategories() {
  const products = getProducts();

  products.then((result) => {
    const pendant = document.querySelector('.custom-checkbox--pendant');
    const countPendant = pendant.querySelector('.custom-checkbox__count');
    const ceiling = document.querySelector('.custom-checkbox--ceiling');
    const countCelling = ceiling.querySelector('.custom-checkbox__count');
    const overhead = document.querySelector('.custom-checkbox--overhead')
    const countOverhead = overhead.querySelector('.custom-checkbox__count');
    const point = document.querySelector('.custom-checkbox--point')
    const countPoint = point.querySelector('.custom-checkbox__count');
    const nightlights = document.querySelector('.custom-checkbox--nightlights');
    const countNightlights = nightlights.querySelector('.custom-checkbox__count');

    let pendantCount = 0;
    let ceilingCount = 0;
    let overheadCount = 0;
    let pointCount = 0;
    let nightlightsCount = 0;


    result.forEach(element => {
      const type = element.type;

      for (let i = 0; i < type.length; i++) {
        switch (type[i]) {
          case 'pendant':
            pendantCount++;
            break;
          case 'ceiling':
            ceilingCount++;
            break;
          case 'overhead':
            overheadCount++;
            break;
          case 'point':
            pointCount++;
            break;
          case 'nightlights':
            nightlightsCount++;
            break;
          default:
            break;
        }
      }
    });   

    countPendant.textContent = pendantCount;
    countCelling.textContent = ceilingCount;
    countOverhead.textContent = overheadCount;
    countPoint.textContent = pointCount;
    countNightlights.textContent = nightlightsCount;
  })
}
