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
