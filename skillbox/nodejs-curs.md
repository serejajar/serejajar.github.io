Проверил вашу работу.

По UI:
+ Авторизация работает корректно. Созданные пользователем заметки не видны другому пользователю.
+ Заметки создаются и редактируются без ошибок.
+ Создание заметки без названия и/или описания выдает ошибку. Отлично!

Что можно исправить:

Все работает без ошибок. Отлично!

По коду:
+ Пароль хранится в захешированном виде.
+ Есть разделение файлов фронэнд и бекенд частей
+ README.md содержит инструкции к запуску.
+ Код разбит на модули
+ Есть express router
+ Приложение загружено на хостинг
Отлично!

Что можно исправить:
- Не хватает разбивки кода на небольшие части
- Нет express router
- Все файлы фронэнд и бекенд частей находятся в одной папке
- README.md нет. В нем должны быть  инструкции к запуску вашего приложения.


Честно говоря, я уже полчаса пытаюсь придраться к работе выискивая мелочи в коде и логике, но давайте я не буду этого делать, так как у вас очень неплохая работа   

PS: Также будем рады вашему отзыву о работе куратора и о содержании курса на hello@skillbox.ru или в бот обратной связи.

# как хранить дату
В формате ISO. Для форматирования дат используется функция formatDate в котором используется метод библиотеки parseISO
const result = parseISO('2014-02-11T11:30:30')

https://date-fns.org/v3.0.6/docs/parseISO

# как сделать скачивание пдф
Практическая работа принята!

Для этого вам нужно создать рут /pdf, который будет создавать этот файл.

1. В нем вам нужно будет найти заметку. Тут вам нужно передать id заметки  в рут что получить ее.

2. После получения данных заметки создать pdf. Воспользуйтесь библиотекой которая создает pdf из текста. Например, pdfkit.

3. Отправить браузеру на скачивание. Тут вам нужно задать хидеры чтобы браузер понял что это за файл и соответственно его обработал:

res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
res.setHeader('Content-type', 'application/pdf')

Будет полезно:

https://koenvangilst.nl/blog/generating-a-pdf-with-express

# Как сделать подсветку заголовка по поисковой строке
Вот пример с knex используя метод where:

https://knexjs.org/guide/query-builder.html#where

let query = knex("notes").where({ owner_id: dbUser.id });

if (req.query.search) {
      query = query.where("title", "like", `%${req.query.search}%`);
}
const notes = await query;

res.json(notes);

Пример собственной рализации

router.get("/note", async (req, res) => {
  const filter = { ...req.query, limit: 20 };
  const notes = await db.findNotes(filter, req.user.id);

  if (filter.search) {
    const regex = new RegExp(filter.search, "gi");
    notes.forEach((note) => {
      note.title = note.title.replace(regex, `<mark>$&</mark>`);
    });
  }

  return res.json({ data: notes });
});

Если вы хотите сделать эту логику на стороне фронтэнда, то вы можете создать функцию highlightSearchResult в файл lib.js

export const highlightSearchResult = (title, searchQuery) => {
  if (!searchQuery) return title;

  // Создаем регулярное выражение для поиска с учетом регистра
  const regex = new RegExp(searchQuery, "gi");

  // Заменяем найденные фрагменты на <mark>фрагмент</mark>
  return title.replace(regex, (match) => `<mark>${match}</mark>`);
}

И затем ее использовать в NoteCard.svelte

<script>
  import { link } from "svelte-spa-router";

  import { formatDate, formatSearchResult, highlightSearchResult } from "./lib";

  export let entry;
  export let isActive;
  export let searchQuery;
</script>



<h4 class="title">
    <!-- {@html formatSearchResult(entry) || "<em>без заголовка</em>"} -->
    {@html highlightSearchResult(entry.title, searchQuery) || "<em>без заголовка</em>"}
</h4>

Только не забудьте передать searchQuery в Main.svelte

{#each entries as entry}
  <NoteCard {entry} isActive={entry.id === activeNoteId} searchQuery={search} />
{/each}
