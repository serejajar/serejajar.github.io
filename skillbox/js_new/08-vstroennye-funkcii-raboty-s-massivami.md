Проверил выполненные задания. Все они выполнены по условиям ДЗ и вам плюсик за правильное использование методов массива sort, map. Отлично!
ДЗ принято.

Рекомендации
В качестве дополнительной тренировки можете повторить материал прочитав статью и выполнить задачи к ней.
https://learn.javascript.ru/array-methods
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.

# 1-я задача
const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return word
        .toLowerCase()
        .split("")
        .filter(letter => vowels.includes(letter))
        .length
};

console.log(countVowels('JavaScript'));

# 2-я задача
const filterAndSortUsers = (array) => {
    return array
        .filter(user => user[1] > 25 && user[2]) // .filter(([ name, age, isDoSport ]) => age > 25 && isDoSport)
        .sort((a, b) => a[1] - b[1])
        .map(user => user[0])
};


const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

console.log(filterAndSortUsers(users));
