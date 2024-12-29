Вы корректно работаете с классами и наследованием типов. Работа выполнена на отлично!
ДЗ принято.

Рекомендации:
Для повторения материала рекомендую к изучению эту статью про модификаторы доступа в ООП TS:
https://scriptdev-ru.pages.dev/guide/023/
PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


# если surname приватные, то почему я могу изменить его вне класса? Был Смит, стал Иванов
TS компилируется в JS, а он позволяет это сделать. Но как вы видите такое присваивание TS воспринимает как ошибку:


# свойство static не показывается в консоли
Так и должно быть, так как static "переносит" свойство в сам класс. Т.е. экземпляр класса user его не будет содержать, а значение свойства можно будет получить через сам класс: User.userName

# у свойства отсутствует указание какого-либо модификатора доступа = модификатор public?
Все верно, свойства и методы, у которых отсутствует указание какого-либо модификатора доступа, воспринимаются компилятором как public:

class Animal {
  nickname: string; // эквивалентно public nickname: string
}

# Почему нельзя использовать private в классе наследнике
Если же к свойствам и методам применяется модификатор private, то к ним нельзя будет обратиться извне при создании объекта данного класса. Например у вас есть класс User:

class User {
    private surname: string;

    constructor(surname:string) {
        this.surname = surname;
     }
}

Далее мы создаем другой класс и  наследуем его от User:

class Admin extends User {
    constructor(surname: string) {
        super(surname)
        this.surname = surname // тут будет ошибка
    }
}

Если вы попробуете присвоить значение this.surname = surname то вы получите ошибку, так как такого свойства нет в классе Admin  и surname нельзя продублируете в Admin, все равно будет ошибка.

# практическое применении static
Например, мы хотим отслеживать количество созданных пользователей:

class User {
  static count = 0; // Статическое свойство для хранения количества пользователей

  constructor(public name: string) {
    User.count++; // Увеличиваем количество пользователей при каждом создании экземпляра
  }

  static getCount(): number {
    return User.count; // Статический метод для получения количества пользователей
  }
}

const user1 = new User("Владимир");
const user2 = new User("Андрей");

console.log(User.getCount()); // 2
​
Как вы видите тут используется static свойство count хранящее количество пользований и метод getCount который получает их общее число.

В экземплярах класса user1, user2 мы не сможем получить это значение. Да и это было бы не логично так как мы работаем только с этим экземпляром и в нем не должно быть какой-то логики влияющей на счетчик пользователей. Т.о. мы можем удобно использовать свойство static.

# 1-я задача
class User {
	static userName: string;
	private surname: string;
	protected age: number;

	constructor(name: string, surname: string, age: number) {
		User.userName = name;
		this.age = age;
		this.surname = surname;
	}

	public setAge(age: number) {
		this.age = age;
	}

	public getAge() {
		return this.age;
	}
}

const ivan = new User("Ivan", "Ivanov", 25);

# 2-я задача
interface IUser {
	id: number;
	name: string;
	surname: string;
	readonly coins: number;
	age?: number;
	addCoin: (amount: number) => void;
	removeCoin: (amount: number) => void;
	getCoins: (amount: number) => string;
}

interface IUser {
	anyParameter: string;
}

const Ivan: IUser = {
	id: 1,
	name: "Ivan",
	surname: "Ivanov",
	coins: 5,
	age: 25,
	addCoin(amount) {
		this.coins += amount;
	},
	removeCoin(amount) {
		this.coins -= amount;
	},
	getCoins() {
		return `Количество монет ${this.coins}`;
	},
	anyParameter: "anyValue",
};

interface Children extends IUser {
	anyParameter2: string;
}

class AnyClass implements Children {
	id: 1;
	name: "Ivan";
	surname: "Ivanov";
	coins: 5;
	age: 25;
	anyParameter: "anyValue";
	anyParameter2: string;
	addCoin(amount: number) {
		this.coins += amount;
	}
	removeCoin(amount: number) {
		this.coins -= amount;
	}
	getCoins() {
		return `Количество монет ${this.coins}`;
	}
}
