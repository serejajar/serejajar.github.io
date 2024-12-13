Проверил вашу работу.

UI:
Вам плюсик за использование маски для телефона.
Вам плюсик за использование валидации для телефона/емейла.
Вам плюсик за добавление адаптива!

- Создание/удаление/редактирование клиента выполнено на отлично.
- Фильтрация и сортировка работают как нужно.

Что можно исправить:
- Валидация полей контактов, т.к. сейчас можно записать телефон в поле для емэйл адреса и наоборот.
- После удаления не обновляется таблица, и удаленный пользователь присутствует на странице.
- Адаптив. Вы все верно сделали кроме одной важной мелочи, если открыть ваше приложение на мобильном экране, то вы увидите горизонтальный скролл на всей странице, а это не удобно для пользователя и это следует избегать. Тут лучше добавить скролл только на таблицу.
Вот пример горизонтального скролла только для таблицы:
https://bulma.io/documentation/elements/table/#table-container
- Нет задержки при вводе текста в поле поиск, чтобы минимизировать количество запросов к API. Это прописано в ТЗ практической работы
- Клик вне модального окна изменить/добавить клиента не закрывает его

Код:
По коду ничего критичного я не заметил. Вам плюсик за использование шаблонных строк. Вам плюсик за разбивку кода по файлам и добавление комментариев. Отлично!

Что можно исправить:
- Нет разбивки кода по файлам, но это не критично.
- Нет комментариев к коду, но это не критично.
- Нет разбивки кода по файлам и комментариев к коду, но это не критично.
- Сейчас все файлы для фронтэнда находятся в папке crm-backend, их лучше вынести в отдельную папку чтобы было разделение кода.
- Будьте особенно внимательны если используете addEventListener:

document.addEventListener("keydown", disableKeyDownTab);

При вызове addEventListener не перезаписывается функция-обработчик события, а добавляется новая. Т.е. каждый раз кода вы вызываете createSpiner  у вас происходит добавление еще одной функции-обработчика для события keydown.

https://learn.javascript.ru/introduction-browser-events#addeventlistener

Решается это использованием onkeydown.

Думаю исправить эти мелочи не составит для вас труда поэтому я готов принять практическую работу. Напишите, если есть вопросы ко мне или я могу принять вашу работу.



###
Принять
Хотел придраться к чему-то, но все выглядит отлично! Практическая работа принята.

Рекомендации
Хочу вам порекомендовать вот эти ресурсы для доп. изучения:

https://learn.javascript.ru/
 - В нем очень подробно описаны все составляющие части языка Javascript, есть много задач закрепляющих знания на практике.

https://developer.mozilla.org/ru/
 - Хороший источник для получения подробных сведений о функциях языка, методах встроенных объектов и так далее.

http://caniuse.com
 - таблицы с информацией о поддержке по каждой возможности языка. В том числе и поддержки браузеров.

Эти ресурсы помогут вам в изучении JS и в дальнейшей работе.

Удачи в дальнейшей работе и обучении. Вы неплохо пишите код, мне было приятно проверять вашу работу.

PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.


###
Вопросы
# как сортировать даты
У вас есть  даты в виде строк, их можно преобразовать в объект даты. Т.е. вам нужно:

1) Преобразовать эту строку в объект даты.

new Date('2021-02-03T13:07:29.554Z')
Подробнее о нем в этой статье:
https://learn.javascript.ru/date

2) Далее вы можете сравнивать сами даты, чтобы отсортировать по дате. Вот пример сравнения самих дат:
https://qna.habr.com/q/358490

А это пример кода для сортировки массива студентов по дате:

arr.sort(function(a,b){
  return new Date(b.startDate) - new Date(a.startDate);
});

# а как сделать задержку в 300 в поиске
Т.е. когда вы печатаете в поисковой строке то вам нужно отправить запрос со значением из этого инпута. Чтобы не создавать запросы на каждый ввод буквы, нужно сделать задержку отправки запроса к бекенду равную 300мс. Подобный код вы делали в ДЗ 7-го модуля.

function request(){
  /* тут запрос за данными */
}

let id;

input.addEventListener('input', () => {
  clearTimeout(id);
  id = setTimeout(request, 300);
})

# как отображать контакты в таблице
Их всего может быть не более 10-и и если их больше 4-х, то остальные должны быть скрыты с возможностью просмотреть их при нажатии на иконку с числом скрытых контактов.

# Pixel perfect делать?
В описании практической работы ничего не сказано про pixel perfect, поэтому оставляю это на ваше усмотрение.

# надо создавать все элементы в js или делать их в html и потом работать с этими элементами
Без разницы. Оставляю на ваше усмотрение.

# с каким сервером нужно работать
В вашем репозитории уже есть готовый сервер для этой практической работы. Для данного сервера есть инструкция по работе с ним в файле readme.

# а можно использовать бутсрап/реакт или прочее
В описании практической работы не сказано, что нельзя использовать сторонние библиотеки. Для меня использование их в работе это плюс, так как подготавливает вас к реальным задачам, да и сейчас нет защиты практической работы, поэтому думаю никто не придерётся  .

# Как сделать спиннер
Перед запросом к базе за данными вы добавляете элемент на страницу со спиннером. И когда вы получаете данные с сервера, вы убираете спиннер. Например, вот так:

function functionName() {
  const loading = document.querySelector('.table__white-screen');
  loading.style.display = 'block';

  await loadData()

  loading.style.display = 'none';
}


# cors, не подгружаются модули
Вам нужно использовать serve для запуска фрондэнд части.
https://www.npmjs.com/package/serve
После установки перейдите в папку с вашим кодом и запустите команду serve:

serve
Вот так это выглядит:

# Как удалить/изменить клиента без получения аттрибута .
то вы можете при отрисовки строки таблицы  сразу добавлять функции обработчики для кнопок удаления и изменения клиента. Как это выглядит в коде:

function renderClient({ id, name, surname, lastName, dateTime, lastChange, contacts }) {
  ...
  changeButton.addEventListener('click', function () {
    /* тут вызов вашей функции для изменения клиента в который вы передаете объект с данными клиента и функцию  для отправки запроса changeOnServer */
    createModalForm('Изменить данные', changeOnServer, { id, name, surname, lastName, dateTime, lastChange, contacts  });
  })
  deleteButton.addEventListener('click', function () {
    /* тут вызов вашей функции для удаления клиента в который вы передаете id в качестве аргумента */
    deleteClient(id);
  })
}

# Как отрисовать таблицу
Для этого вам нужно создать функцию renderClient в которой будут создаваться элементы для отображения клиентов. Эта функция будет вызвана для каждого клиента в createTable

function createTable(staffLIst) {
  staffLIst.forEach((client) => {
    const clientTr = renderClient(client);
    tbody.append(clientTr);

    //Здесь код который убирает прелоадер после загрузки таблицы
    let preloader = document.getElementById("preloader");
    preloader.style.display="none";
  })
}



function renderClient(client) {
  const tr = document.createElement('tr'),
    tdId = document.createElement('td'),
    tdFIO = document.createElement('td'),
    tdDateCreature = document.createElement('td'),
    tdDateChanges = document.createElement('td'),
    tdContacts = document.createElement('td'),
    tdToChange = document.createElement('td'),
    tdDelete = document.createElement('td');

  tdId.innerHTML = client.id;
  tdFIO.innerHTML = client.surname + ' ' + client.name + ' ' + client.lastName;
  tdDateCreature.innerHTML = client.createdAt;
  tdDateChanges.innerHTML = client.updatedAt;

  /* тут нужно реализовать создание  changeButton deleteButton с помощью createElement */
  changeButton.addEventListener('click', function () {
    /* тут вызов вашей функции для изменения клиента в который вы передаете объект с данными клиента и функцию  для отправки запроса changeOnServer */
    createModalForm('Изменить данные', changeOnServer, client);
  })
  deleteButton.addEventListener('click', function () {
    /* тут вызов вашей функции для удаления клиента в который вы передаете id в качестве аргумента */
    deleteClient(id);
  })


  client.contacts.forEach((el) => {    // Здесь перебираем список контактов клиента
    const svgIcon = createSvgIcon(el); // Здесь передаем объект из списка в функцию создания иконки
                                       // и сохраняем ее в переменную
    tdContacts.append(svgIcon);        // Здесь вставляем иконку в нашу яйчейку
  })

  tr.append(tdId);
  tr.append(tdFIO);
  tr.append(tdDateCreature);
  tr.append(tdDateChanges);
  tr.append(tdContacts);
  tr.append(tdToChange);
  tr.append(tdDelete);
  return tr
}

# Почему не всегда отображается изменения в таблице.
Это происходит из-за того что вы неправильно работаете с fetch. Это асинхронная функция которую нужно обработать с помощью  async/await, чтобы дождаться получения данных, а уже затем делать рендер таблицы.

# Как в адаптиве сделать горизонтальную прокурутку
Вы используете флексбоксы которые изначально подстраиваются под размеры контейнера. Тут скорее всего понадоби

# как сделать форму контактов.
Тут вам нужно создать li для одного контакта состоящую из селекта и поля ввода. При сохранении всей формы клиента вам нужно получить все данные контактов и преобразовать их в массив объектов. Т.е. у вас должен быть следующий функционал:

1) Клик по "добавить контакт" должен добавить li с селектом и полем ввода

2) Сбор данных и отправка на сервер.

Вот так примерно выглядит получение всех данных контактов

Создание элементов (селект и инпут) вы можете сделать в JS используя createElement, classList.add, setAttribute.

$addClientAddContactBtn.addEventListener('click', () => {
  const $addContactInpGrp = document.createElement('div');
  const $addContactInp = document.createElement('input');
  const $addOptionTel = document.createElement('option');
  const $addOptionAdTel = document.createElement('option');
  const $addOptionMail = document.createElement('option');
  const $addOptionVk = document.createElement('option');
  const $addOptionFb = document.createElement('option');
  const $addSelectCloseBtnMod = document.createElement('div');
  const $addSelectCloseBtn = document.createElement('button');
  const $addSelect = document.createElement('select');

  $addContactInpGrp.classList.add('input-group');
  $addContactInp.classList.add('form-control', 'add-input');
  $addSelect.classList.add('form-select', 'input-group-text');
  $addSelectCloseBtnMod.classList.add('input-group-text');
  $addSelectCloseBtn.classList.add('btn-close');

  $addOptionTel.setAttribute('selected', '');
  $addOptionTel.setAttribute('value', 'tel');
  $addOptionAdTel.setAttribute('value', 'adTel');
  $addOptionMail.setAttribute('value', 'mail');
  $addOptionVk.setAttribute('value', 'vk');
  $addOptionFb.setAttribute('value', 'fb');

  $addOptionTel.textContent = 'Телефон';
  $addOptionAdTel.textContent = 'Доп. телефон';
  $addOptionMail.textContent = 'Email';
  $addOptionVk.textContent = 'Vk';
  $addOptionFb.textContent = 'Facebook';

  $addContactInp.placeholder = 'Введите данные контакта';

  $changeClientAddContactBtnCont.prepend($addContactInpGrp);
  $addClientAddContactBtnCont.prepend($addContactInpGrp);
  $addContactInpGrp.append($addSelect, $addContactInp, $addSelectCloseBtnMod);
  $addSelectCloseBtnMod.append($addSelectCloseBtn);
  $addSelect.append($addOptionTel, $addOptionAdTel, $addOptionMail, $addOptionVk, $addOptionFb);


  $addSelectCloseBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
  $closeBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
  $addClientRemoveBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
  $addClientSaveBtn.addEventListener('click', () => {
    $addContactInpGrp.remove();
  });
});


Сбор данных контактов вы сможете получить используя JS:

function getContactsArr() {
  const contactsArr = [];
  const contactTypes = document.querySelectorAll('.form-select');
  const contactValues = document.querySelectorAll('.add-input');

  contactTypes.forEach((el) => {
    contactsArr.push({ type: el.value });
  });

  for (let i = 0; i < contactValues.length; ++i) contactsArr[i].value = contactValues[i].value;
  return contactsArr;
}

# Как сделать чтобы клиенты сохранялись и добавлялись в таблицу с помощью api
Тут вам нужно дождаться получения данных, а уже затем делать рендер таблицы. Т.е. вы вызываете функцию init, получаете в ней данные в переменную staffLIst, а затем вам нужно вызвать функцию отрисовки таблицы (например createTable).

const init = async () => {
    const staffLIst = await getStaffList();
    createTable(staffLIst)
}

В createTable вам нужно добавить логику отображения самой таблицы, т.е. создать нужные элементы и добавить их на страницу.


При добавлении нового клиента немного меняется логика и в нее добавляется запрос добавляющий клиента, т.е. будут следующие этапы:

1) Запрос к серверу на сохранение нового клиента.

2) Запрос за данными от сервера (getStaffList)

3) Отрисовка (createTable)

Как видите пункты 2-3 совпадают с изначальными (init).

# Как создать форму изменения клиента и форму добавления
Вы можете объединить форму изменения клиента и форму добавления. У вас есть кнопки "Изменить" и "Добавить", где по клику вы вызовите функцию создания createModalForm и передадите в нее данные которые нужны для отрисовки формы. Т.е, заголовок, функцию, которая будет вызвана при клике на кнопку "Сохранить", объект с данными клиента (необязательный аргумент):

addButton.addEventListener('click', function addClient() {
  createModalForm('Новый клиент', saveToServer);
});

Вот так это будет выглядеть для кнопки редактирования где changeOnServer это функция для изменения клиента (см. ниже).

changeButton.addEventListener('click', function addClient() {
  createModalForm('Изменить данные', changeOnServer, { /* объект с данными клиента */ });
});

В случае если данные клиента присутствуют, то вы отображаете форму с данными из объекта, в противоположном случае отображаете пустую форму. Для этого рекомендую код для контакта вынести в отдельную функцию и вызывать ее:

function createModalForm() {
  /* остальной код модального окна добавления/изменения клиента */

  for ([type, value] of contacts) {
    addContactSelect(type, value /* и другие данные если нужны */);
  }

  contactsBtn.addEventListener('click', () => {
      if (otherLists.length >= 10) {
        contactsBtn.classList.add('non-display');
      } else {
        addContactSelect(type, value /* и другие данные если нужны */);
      }
  });
}

А в самой функции addContactSelect у вас будет уже логика добавления элементов для контакта cо значением которое вы получили из аргумента.

Для отправки данных на сервер, то вам нужно использовать запрос PATCH /api/client/{id}, вот так:

async function changeOnServer(data, id) {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return response;
}

# пример как выглядит запрос к серверу
Нет, все гораздо проще. Вот пример как выглядит запрос к серверу:

// Функция для получения данных с сервера
async function getData() {
  const response = await fetch('http://localhost:3000/api/clients');
  return await response.json();
}

// Функция для удаления данных с сервера
async function deleteClientServer(id) {
  await fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'DELETE',
  });
}

# Ошибка 422 от сервера
surname (это фамилия) не должно быть пустым. Структура пользователя должна быть именно как указанно в инструкции к бекенду. Также вы можете в ответе от сервера узнать и саму причину 422 ошибки. Тело ответа в таком случае содержит массив с описаниями ошибок валидации.


###
Вопросы по доп. заданиям:

# Подскажите как реализовать поиск по элементам с автозаполнением
В поиске при введении значения в поле ввода нужно вывести подсказки как в гугле. Каждая подсказка это ФИО совпадающее с поисковым значением. При клике на подсказку нужно подсветить (поменять цвет фона) этого клиента.
---
# Подскажите как реализовать чтобы была возможность поделиться ссылкой.
Для каждого клиента добавляется ссылка с хешем с id, например есть ссылка

http://localhost:3000#123123

Хеш это то что после решетки в ссылке т.е. #13268464645 = это хеш

Подробнее можете узнать в этой статье:

https://learn.javascript.ru/url

Если скопировать и перейти по этой ссылке, то откроется карточка клиента с его данными. Карточкой клиента может быть отдельная страница или модальное окно редактирования клиента. Самое простое это создать отдельную страницу, для этого вам нужно сделать следующее:

1. Получить id из адресной строки (хеш).  

2. Сделать запрос к серверу за этим клиентом

3. Отобразить эти данные на странице

# Как создать дату из строки полученой из свойства updatedAt
Чтобы превратить строку в дату вы можете использовать метод Date.parse(str).

https://learn.javascript.ru/date#razbor-stroki-s-datoy

Далее с помощью методов Date вы можете создать саму необходимую дату.
https://learn.javascript.ru/date#poluchenie-komponentov-daty


###
Прочее

Проверил доп. задания. В целом все очень даже неплохо выглядит.

Опишу подробно каждое из них
1. Анимация открытия модального окна
Все выглядит замечательно.

2. Ссылка на карточку клиента
При открытии модального окна к сcылке добавляется хеш, но если ее в другой вкладке его, то ничего не происходит. А должно  быть так:

а также чтобы сразу открывать нужное модальное окно при первичной загрузке страницы с указанной hash-частью.

3. Валидация формы перед отправкой на сервер

Тут все отлично. При пустых значениях поля подсвечиваются красным.

4. Индикация загрузки
Выполнено все условия коме, вот этого условие:

Отправка формы создания или редактирования клиента. Здесь важно предотвратить изменения в полях для ввода, пока идёт взаимодействие сервером.

При нажатии "Сохранить", я могу внести изменения в поле ввода.

Исправьте указанные моменты и чтобы я смог принять курсовую.
