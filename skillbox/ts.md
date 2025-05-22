# что такое as const
В TypeScript "as const" — это специальная конструкция, которая сообщает компилятору, что этот enum неизменяем и доступен только для чтения.


# почуму не рекомендуют использовать enum https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh
enum Color {
  Red,
  Green,
  Blue
}

const Color2 = {
  Red: "Red",
  Green: "Green",
  Blue: "Blue"
} as const
