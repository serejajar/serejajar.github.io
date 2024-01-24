Проверил вашу работу. Задание выполнено на отлично! Вы корректно работаете с локальным хранилищем и данными сервера, так же мне нравится что вы разбиваете код по модулям. ДЗ принято.

Проверил вашу работу. Задание выполнено на отлично! Мне нравится что вы разбиваете код по файлам и добавляете комментарии к коду. Вам плюсик за выполнение дополнительного задания. ДЗ принято.

Что можно исправить:
- Добавить в код условия в случае ошибочных данных:
if (response.status === 404) {
}
Но это больше совет на будущее и сейчас не критично.

- element.remove() должен вызываться только в модуле view.js. Лучше разделять код для отображения элементов от логики работы с сервером. Возможно вам это покажется мелочью, но это очень важно. Если привыкните часть логики вставлять в другой модуль, то в последствии будет очень трудно находить и исправлять возникающие ошибки.
- Переключение между хранилищами должно сохранятся и при переходе на список другой персоны. Т.е. если вы переключились на локальное хранилище, а затем перешли на другой список, то там тоже должны отображаться элементы из локального хранилища. Это оставляю вам в качестве самостоятельной работы.
- Тот же функционал должен быть и на страницах /dad-todos и /mom-todos.


Рекомендации:
- Хочу вам порекомендовать к прочтению статью про localStorage и sessionStorage. Понимание этой информации поможет вам в дальнейшей работе.

https://learn.javascript.ru/localstorage

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать чате в следующем модуле.


# Вопросы:

# Не понимают зачем и как запускать сервер
В этой работе вы воспроизводите работу сервера базы данных, то есть сервер, где хранятся данные вашего приложения (списки дел, их статусы и прочее) в виде текста. Т.е. вам нужно зайти в папку todo-server:

cd todo-server
И затем выполнить команду:
node index.js
После этого сервер запуститься и вы сможете получать от него данные.

А с помощью serve вы запускаете сам UI, который пользователь увидит когда откроет страницу браузера. Тут serve нужен для того чтобы вы смогли работать с вашей работой локально, так как без него вам придется хранить код и html в одном файле. Такое поведение было сделано специально для безопасности в сети чтобы нельзя было локальный скрипт подключить к какому-то сайту (например ВК). Подробнее об этом рассказывается в 1 модуле этого курса.

# 404 ошибка при запросе к серверу
Чтобы сервер вам вернул какие-то данные, вам нужно вначале запустить его с помощью команды

node index.js
После этого попробуйте выполнить ваш запрос.

# где взять приложение
В модуле 8 Базового JS вы уже работали над подобным приложением. Вам нужно перенести его в данный репозиторий и добавить функционал из описания ДЗ.

# как сделать переключатель хранилищ
Вы можете создать функцию, которая будет срабатывать при клике на кнопку смены хранилища и в ней по условию получать данные дел и вызывать отрисовку. Также в этой функции нужно записывать какое-то значение во внешнюю переменную (или локальное хранилище) и в функции - обработчике считывать данные с сервера/localstorage в зависимости от значения этой переменной. Вот пример реализации:

btnChangeStorage.addEventListener('click', () => {
    storageStatus = localStorage.getItem("storageStatus")

    if (storageStatus == 'local') {
      btnChangeStorage.textContent = 'Перейти на локальное хранилище';
      localStorage.setItem("storageStatus", "api")
      /* получить список дел с сервера */  
      createTodoApp(...)
    }

    else {
      btnChangeStorage.textContent = 'Перейти на серверное хранилище';
      localStorage.setItem("storageStatus", "local")
      /* получить список дел из хранилища */  
      createTodoApp(...)
    }
    container.innerHTML = " "
})

# как вызывать функции разных модулей при переключении
В дополнение к моему примеру кода из предыдущего комментария вы можете добавить все функции модуля работы с выбранным хранилищем для дел в саму функцию createTodoApp, например для :

createTodoApp(document.getElementById('todo-app'), {
        title: 'Мои дела',
        owner,
        todoItemList,
        onCreateFormSubmit: apiModule.createTodoItem,
        onDoneClick: apiModule.switchTodoItemDone,
        onDeleteClick: apiModule.deleteTodoItem,
});
Т.е. при клике на кнопку сработает код с if (пример кода из предыдущего комментария) и вызовется createTodoApp с функциями модуля.



И в самой createTodoApp вызывать их:

async function createTodoApp(container, {
  title,
  owner,
  todoItemList = [],
  onCreateFormSubmit,
  onDoneClick,
  onDeleteClick,
 }) {

  document.getElementById('todo-app').innerHTML = '';

  const todoAppTitle = createAppTitle(title);
  const todoItemForm = createTodoItemForm();
  const todoList = createTodoList();
  const handlers = { onDone: onDoneClick, onDelete: onDeleteClick }

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  todoItemList.forEach(todoItem => {
    const todoItemElement = createTodoItemElement(todoItem, handlers);
    todoList.append(todoItemElement);
  });

  todoItemForm.form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!todoItemForm.input.value) {
      return;
    }

    const todoItem = await onCreateFormSubmit({
      owner,
      name: todoItemForm.input.value.trim(),
    });

    const todoItemElement = createTodoItemElement(todoItem, handlers);
    todoList.append(todoItemElement);
    todoItemForm.button.disabled = true;
    todoItemForm.input.value = '';
  });
}

# Как использовать функции хранилищ, они же разные? (пример кода от Александр Митрофанов)
Данные дела лучше хранить одинаково в обоих хранилищах. Вам нужно привести их такому виду, чтобы они использовали одни и те же аргументы. Например, для добавления дела:

Модуль локального хранилища:

export function addLocalItem({ owner, name, id, done }) {
  let arr = getLocalList(owner);
  arr = [...arr, { owner, name, id, done }];

  saveLocalList(arr, owner);
}

/* вспомогательные функции */
export function saveLocalList(arr, owner) {
  localStorage.setItem(owner, JSON.stringify(arr));
}

export function getLocalList(owner) {
  const localData = localStorage.getItem(owner);
  let rawList = [];

  if (localData !== null && localData !== "") {
    rawList = JSON.parse(localData);
  } else {
    return [];
  }

  return rawList;
}


Модуль серверного хранилища:

export async function addServerItem({ owner, name, id, done }) {
  await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      owner,
      name,
      id,
      done,
    }),
  });
}
