Все выполнено по условиям ДЗ. Вам большой плюс за подробные комментарии к коду вашей задачи и за то  что самостоятельно разобрались с задачей.
Отлично! AmazingCard наследован от Card и вы корректно используете классы в коде вашей игры. Работа выполнена на отлично!
ДЗ принято.

Что можно исправить

Рекомендации:

В качестве доп. материала, можете изучить статьи про классы. В этом учебнике очень подробно описаны классы, наследование и пр.
https://learn.javascript.ru/classes

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать чате в следующем модуле.


# не понимаю как передать в параметр экземпляр, если сама функция и есть параметр этого экземпляра.
В качестве аргумента самой функции flip. Вот пример создания карты c помощью класса AmazingCard:

for (const cardNumber of countArray) {
    cardArray.push(new AmazingCard(container, cardNumber, flip));
}
Тут 3-м аргументом передается функция flip, которая через super далее передается в класс Card (аргумент action). Далее по клику она вызывается с аргументом this что и соответствует экземпляру класса:

class AmazingCard extends Card {
   constructor(container, number, action) {
        /* остальной код */
        super(container, url, number, action);
    }
}

class Card {
    constructor(container, url, number, action) {
        /* остальной код */
        this.card.addEventListener('click', () => {
            if (this.open == false && this.success == false) {
                this.open = true
                action(this)
            }
        })
        container.append(this.card)
    }
}


Т.е. функция flip вызывается с аргументом в котором находится сам класс:

function flip(card) {
  /*  логика сравнения карт */   
}

# пример flip
function flip(card) {
    if (first != null && second != null && first.number != second.number) {
        first.open = false;
        second.open = false;
        first = null;
        second = null;
    }
    if (first == null) {
        first = card;
    } else {
        second = card;
        if (first.number == second.number) {
            first.success = true;
            second.success = true;
            first = null;
            second = null;
        }
    }
}
