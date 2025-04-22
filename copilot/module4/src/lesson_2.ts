interface Human {
	readonly id: number;
	userName: string;
	surname: string;
	coins: number;
	age?: number;
	addCoin(amount: number): void;
	removeCoin(amount: number): void;
	getCoins(): string;
}

interface Human {
	preferredHand: string;
}

interface HairyHuman extends Human {
	hairColor: string;
}

class Male implements HairyHuman {
	id = 2;
	userName = "";
	surname = "";
	coins = 0;
	age = 0;
	hairColor = "black";
	preferredHand = "right";

	constructor(userName: string, surname: string, coins: number, age: number) {
		this.userName = userName;
		this.surname = surname;
		this.coins = coins;
		this.age = age;
	};

	addCoin(amount: number) {
		this.coins += amount;
	};
	
	removeCoin(amount: number) {
		this.coins -= amount;
	};
	
	getCoins() {
		return `Количество монет ${this.coins}`;
	};
}

const ivan = new Male("Ivan", "Ivanov", 5, 25);
ivan.getCoins;

// const ivan {
// 	id: 1,
// 	userName: "Ivan",
// 	surname: "Ivanov",
// 	coins: 5,
// 	age: 25,
// 	addCoin(amount) {
// 		this.coins += amount;
// 	},
// 	removeCoin(amount) {
// 		this.coins -= amount;
// 	},
// 	getCoins() {
// 		return `Количество монет ${this.coins}`;
// 	},
// };
