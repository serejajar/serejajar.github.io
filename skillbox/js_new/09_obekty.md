Проверил вашу работу. Все задания выполнены на отлично и вам плюсик за правильное использование объектов! ДЗ принято.

Что можно исправить:


Рекомендации
- Рекомендую вам, в качестве дополнительного материала к изучению, вот эту статью и задачи к ней:
https://learn.javascript.ru/object
https://learn.javascript.ru/object#tasks
- Можете также почитать эту статью про доступ через квадратные скобки
https://learn.javascript.ru/object#kvadratnye-skobki
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

#
const cars = {
  Hyundai: {
    name: 'Hyundai',
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 126
  },

  Toyota: {
    name: 'Toyota',
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 238
  },

  Kia: {
    name: 'Kia',
    wheels: 4,
    doors: 3,
    isStarted: false,
    hp: 126
  }
}

function getCar(carName) {
  if (cars[carName]) {
    console.log(`Марка-автомобиля: ${carName}`, cars[carName])
  } else {
    console.log('Автомобиль не найден')
  }
}

getCar('Kia')
