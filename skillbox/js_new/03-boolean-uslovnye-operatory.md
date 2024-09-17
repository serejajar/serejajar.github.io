Работа выполнена на отлично и вам плюсик за правильное использование конструкции if/else.
ДЗ принято

Что можно исправить:
- 1 задача. У вас не верное условие и снять деньги можно в случае если только сумма больше чем available_amount

Рекомендации:
- В качестве доп. изучения рекомендую эти статьи и задачи к ней. Хотя вы уже знаете про if/else практика не бывает лишней.

https://learn.javascript.ru/operators
https://learn.javascript.ru/ifelse

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# А зачем praseInt
Вызов prompt возвращает текст, указанный в поле для ввода, или null, если ввод отменён пользователем. А parseInt преобразует строку в число.

Рекомендую изучить эти статьи:
https://learn.javascript.ru/number#parseint-i-parsefloat
https://learn.javascript.ru/alert-prompt-confirm

# 2-я задача
let carPower = prompt ("Введите мощность автомобиля (л. с.)")
let transportTax

if (carPower <= 100) {
   transportTax = carPower * 12
} else if (carPower > 100 && carPower <= 125) {
   transportTax = carPower * 25
} else if (carPower > 125 && carPower <= 150) {
   transportTax = carPower * 35
} else if (carPower > 150 && carPower <= 175) {
   transportTax = carPower * 45
} else if (carPower > 175 && carPower <= 200) {
   transportTax = carPower * 50
} else if (carPower > 200 && carPower <= 225) {
   transportTax = carPower * 65
} else if (carPower > 225 && carPower <= 250) {
   transportTax = carPower * 75
} else {
   transportTax = carPower * 150
}

console.log("Сумма налога:", transportTax);
