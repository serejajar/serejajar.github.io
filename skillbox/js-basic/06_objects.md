###
Похвалить и отклонить:
- нет файла src/index.js
Не наблюдаю файла index.js в вашем репозитории. Забыли запушить код или нужна моя помощь?



###
Принять, похвалить и посоветовать:

###
Другое
- не работает из-за экспорта
    Это ошибка связанная с экспортом функции, ее можно быстро поправить. Вот так:

    export default filter;
    После этого ошибка с экспортом должна пропасть. Напишите если нужна будет еще моя помощь.





###
Старое

1-е задание:
- фильтруют циклом, а не filter-ом
    По первому заданию все верно. Можете так же посмотреть метод Array.filter(). Он может помочь упростить код.

2-е задание:
- нет структуры
    Вам нужно создать саму функцию в файле main.js, а в другом файле нужно вызвать эту функцию и передать ей массив.

        Не совсем так. В файле index,js нужно создать саму функцию. Вот так:

        function addSelect(arrayObj, values) { /* тут ваш код */}
        В файле main.js вам нужно вызвать эту функцию и передать ей данные:

        const arr = [{value: 1, label: 'Первый элемент'} ... ];

        addSelect(arr)

3-е задание:
Будете делать дополнительное задание или можно принять работу?

- вложенные if/else
    Во втором задании код работает, хотя так и хочется убрать вложенные if/else)))
- не добавляют select на страницу