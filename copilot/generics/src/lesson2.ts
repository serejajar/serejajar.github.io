console.log("== lesson 2 ==");

interface Container<T> {
  value: T;
}

function getValue<T>(container: Container<T>): T {
  return container.value;
}

const numContainer: Container<number> = { value: 4 };
console.log(numContainer);
console.log(getValue(numContainer));

const strContainer: Container<string> = { value: "four" };
console.log(strContainer);
console.log(getValue(strContainer));