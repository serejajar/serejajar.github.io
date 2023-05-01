function loadResourse(src) {
    //JS
    if(src.endsWith('.js')) {
      return import(src);
    }
    //CSS
    if(src.endsWith('.css')) {
        if(cssPromises[src]) {
          
        }
    }
    //Данные сервера
    return fetch(src).then(res => res.json());
}


---
class User {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback
  }

  sayHi() {
    this.callback.call(this);
  }
  sayHi2() {
    this.callback(this);
  }
}

function test() {
  console.log('Мое имя - ', this.name);
  console.log('THIS', this)
}

// Использование:
let user = new User("Иван", test);
let user2 = new User("Не иван", test.bind(this)); // Имя не должно быть выведено так как тут this равно window


user.sayHi();
user2.sayHi2();
