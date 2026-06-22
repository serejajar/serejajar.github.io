console.log("== lesson 1 ==");
class Stack<T> {
  private rings: T[];
  constructor() {
    this.rings = [];
  }
  push(ring: T): void {
    this.rings.push(ring);
  }
  pop(): T | undefined {
    return this.rings.pop();
  }
  peek(): T | undefined {
    return this.rings[this.rings.length - 1];
  }
  popTo(stack: Stack<T>): void {
    let hand = this.rings.pop();
    let target = stack.peek();
    if (hand !== undefined && hand !== null) {
      if (target !== undefined && target !== null) {
        if (hand > target) {
          this.rings.push(hand);
          console.log(`Нельзя поставить кольцо диаметром ${hand} на кольцо диаметром ${target}`);
        }
        else stack.push(hand);
      } else stack.push(hand);
    } else {
      console.log("На этой башне нет колец");
    }
  }
}

const stackOne = new Stack<number>();
const stackTwo = new Stack<number>();
const stackThree = new Stack<number>();
stackOne.push(3);
stackOne.push(2);
stackOne.push(1);

stackOne.popTo(stackTwo);
stackOne.popTo(stackTwo); // проверка на правильность хода
stackOne.popTo(stackThree);
stackTwo.popTo(stackThree);
stackOne.popTo(stackTwo);
stackThree.popTo(stackOne);
stackThree.popTo(stackTwo);
stackOne.popTo(stackTwo);

console.log(stackOne);
console.log(stackTwo);
console.log(stackThree);