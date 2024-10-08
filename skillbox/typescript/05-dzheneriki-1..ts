class HanoiTower<T = number> {
    private rods: { [key: string]: T[] } = {};

    constructor(private fromRod: string = "First", private toRod: string = "Second", private auxRod: string = "Third") {
        this.rods[fromRod] = [];
        this.rods[toRod] = [];
        this.rods[auxRod] = [];
    }

    // Метод для добавления дисков на начальный стержень
    addDisks(disks: T[]): void {
        this.rods[this.fromRod] = disks;
    }

    // Метод для решения задачи
    solve(): void {
        const numberOfDisks = this.rods[this.fromRod].length;
        this.move(numberOfDisks, this.fromRod, this.toRod, this.auxRod);
    }

    // Внутренний рекурсивный метод для перемещения дисков
    private move(n: number, from: string, to: string, aux: string): void {
        if (n === 0) {
            return;
        }

        this.move(n - 1, from, aux, to);

        const disk = this.rods[from].pop();
        if (disk !== undefined) {
            this.rods[to].push(disk);
            console.log(`Переместить диск ${disk} с ${from} на ${to}`);
        }

        this.move(n - 1, aux, to, from);
    }
}

// Пример использования с дефолтным типом (number)
const hanoiNumber = new HanoiTower();
hanoiNumber.addDisks([3, 2, 1]);
hanoiNumber.solve();

// Пример использования с явно указанным типом (string)
const hanoiString = new HanoiTower<string>('A', 'C', 'B');
hanoiString.addDisks(["C", "B", "A"]);
hanoiString.solve();

// Generic Interface (2-я задача)
interface Container<T> {
    value: T;
}

function getValue<T>(container: Container<T>): T {
    return container.value;
}

// Примеры использования
let numberContainer: Container<number> = { value: 123 };
let stringContainer: Container<string> = { value: "Hello, world" };

let numberValue = getValue(numberContainer);
let stringValue = getValue(stringContainer);
