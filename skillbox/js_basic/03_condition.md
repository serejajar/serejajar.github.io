Работа выполнена на отлично и вам плюсик за правильное использование условного оператора. ДЗ принято.
Первая и вторая задачи выполнены на отлично! Вам плюсик за использование тернарных операторов в коде.
В целом у вас подход верный и вас можно похвалить за аккуратный код! Вам плюсик за правильное использование if/else.

Что можно исправить:
- 2-я задача (преобразовывать строку в верхний/нижний регистр). Тут с помощью тернарных операторов и console.log нужно было вывести сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии. Вы же вывели с помощью if/else. Не буду придираться, но рекомендую вам изучить самостоятельно статью про тернарный оператор, так как он часто встречается в реальном коде:

https://learn.javascript.ru/ifelse#uslovnyy-operator


Рекомендации:
- В качестве доп. изучения рекомендую эти статьи и задачи к ней. Хотя вы уже знаете про if/else практика не бывает лишней.

https://learn.javascript.ru/operators
https://learn.javascript.ru/ifelse

- Хотя вы правильно использовали условный оператор, можете еще дополнительно решить задачи из вот этой статьи. Практика никогда не бывает лишней.
https://learn.javascript.ru/ifelse#tasks

- Хочу вам порекомендовать вот эту статью к прочтению:
https://learn.javascript.ru/string

Также обратите внимание на вот этот абзац. Думаю вам это пригодиться в дальнейшей учебе и работе:
https://learn.javascript.ru/string#izmenenie-registra

- Рекомендую почитать дополнительно про оператор ИЛИ:
https://learn.javascript.ru/logical-operators#ili

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


### Вопросы



# я не понимаю задачу с ФИО
Проще говоря вы сейчас воспроизводите довольно частую ситуацию когда пользователь указывает свои ФИО в разном регистре и вам нужно привести его в обычный вид, например, чтобы обращаться к нему на его странице или письме. Т.е. у вас есть userName и userSurname вот такого вида:

const userName = 'ДмИтРиЙ';
const userSurname = 'иВаНов'
Далее вам нужно преобразовать их в читаемое "Дмитрий" и "Иванов" и сравнить с оригинальными значениями и вывести сообщение "Имя осталось без изменений"/"Имя было преобразовано"  с помощью console.log.  

# 2-я задача, пример
let userName = `тЕст`;
let userSurname = `ТеСТ`;

let a = userName.substring(1, 0);
let b = userName.substring (1);

let firstletter = a.toUpperCase (1, 0);
let anotherletters = b.toLowerCase (1);

let name = firstletter + anotherletters;

let a1 = userSurname.substring(1, 0);
let b1 = userSurname.substring (1);

let firstletter1 = a1.toUpperCase (1, 0);
let anotherletters1 = b1.toLowerCase (1);

let surname = firstletter1 + anotherletters1;

let resultName1 = 'Имя было преобразовано'
let resultName2 = 'Имя осталось без изменений'

let resultSurname1 = 'Фамилия была преобразована'
let resultSurname2 = 'Фамилия осталась без изменений'

let resultName = (userName !== name) ? resultName1 : resultName2;
let resultSurname = (userSurname !== surname) ? resultSurname1 : resultSurname2;

console.log(name);
console.log(surname);
console.log(resultName);
console.log(resultSurname);


# 3-я задача, пример
let number = '9'

if (number % 2 === 0)  {
    console.log('Чётное')
} else {
    console.log('Нечётное')
}

---
###
Прочее
1-е задание:
- Неверно условие для пароля
    У вас неверно условие для пароля. Нужно привести код к тому, чтобы проверялся хотя бы один из символов '-' или '_' в пароле и пароль был не меньше 4 символов.

        Вот так правильно:

        if (password.length < 4 && (password.includes('-') || password.includes('_'))


Первое задание можно сделать чуть короче добавив все три условия в один if. Примерно вот так:

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
Но ваше решение тоже подходит.
