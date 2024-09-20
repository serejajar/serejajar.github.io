// Задание 1
interface Car {
	model: string;
	price: number;
	dynamic_1: Record<string, string>;
	dynamic_2: { [key: string]: string };
	turple: [string, number, string]; // string, number, string
}

// Задание 2
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
	return a + b;
}

console.log(1, add(1, 2)); // 3
console.log(2, add("1", "2")); // 12

// Задание 3
type pick = Pick<Car, "dynamic_1">;
type omit = Omit<Car, "turple">;
type upper = Uppercase<Car["model"]>;
type required = Required<Car>;
type partial = Required<Car>;
