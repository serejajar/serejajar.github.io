Проверил ваши задания. У вас все выполнено в соответствии с условиями заданий и вам плюсик за верное использование prompt. Отлично!
ДЗ принято.

Что можно исправить:
- 1-я задача. NaN вместо возраста:


Рекомендации:
- Рекомендую вам к изучению эту статью про переменные:
https://learn.javascript.ru/variables
Внизу статьи есть задачи, которые вы можете сделать для дополнительной практики.

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


# У меня общая сумма получилась не сложение всех чисел а просто перечисление их в строчку
Тут вам нужно вначале получить сумму оплаты за все товары, т.е. умножить количество товаров на стоимость одного товара и уже после этого суммировать их. Вот пример:

let product1 = prompt("Введите название товара 1") // Название товара 1
let price1 = prompt("Введите стоимость товара 1") // Стоимость товара  1
let count1 = prompt("Введите количество товара 1") // Количество товара 1
let amount1 = price1 * count1 //Сумма покупки 1

console.log(product1, amount1) // Вывод в консоль

let product2 = prompt("Введите название товара 2") // Название товара 2
let price2 = prompt("Введите стоимость товара 2")  // Стоимость товара  2
let count2 = prompt("Введите количество товара 2") // Количество товара 2
let amount2 = price2 * count2 //Сумма покупки 2

console.log(product2, amount2) // Вывод в консоль

let product3 = prompt("Введите название товара 3") // Название товара 3
let price3 = prompt("Введите стоимость товара 3") // Стоимость товара  3
let count3 = prompt("Введите количество товара 3") // Количество товара 3
let amount3 = price3 * count3 //Сумма покупки 3

console.log(product3, amount3) // Вывод в консоль

let totalAmount = amount1 + amount2 + amount3 // Сумма всей покупки

console.log("Сумма всей покупки:", totalAmount); //Вывод в консоль

# не понимаю почему свич сразу к дефолту проскакивает
switch буде сравнивать условие в case c основным аргументом. Т.е. логика сравнения по шагам:

1. выполняется case, условие horsePower < 100 может вернуть  true/false

2. true/false из условия выше сравнивается с основным так как там число, то и переходит к default.

https://learn.javascript.ru/switch

Чтобы сравнение было корректным нужно указать switch (true):

const horsePower = prompt("введите мощность автомобиля:");

switch (true) {
  case (horsePower < 100):
      console.log(horsePower * 12);
      break;
  default:
      console.log("неизвестно");
      break;
}
