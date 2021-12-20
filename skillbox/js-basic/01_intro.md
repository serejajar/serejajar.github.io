###
Похвалить и отклонить:
- нет файла src/index.js
Не наблюдаю файла index.js в вашем репозитории. Забыли запушить код или нужна моя помощь?



###
Принять, похвалить и посоветовать:

Отлично! Вы создали запрос на слияние (merge request) и файл со своим первым кодом! А может и не первым :), но я все равно вас поздравляю. Это ваш первый маленький шажочек, на этапе прохождения курса. ДЗ принято.

Возможно у вас возникли вопросы, для чего нужен запрос на слияние. Ответ на этот вопрос вы найдете здесь: https://webdevkin.ru/courses/git/merge-requests






###
Прочее
- файл src/index.js

Не вижу файл src/01_intro/index.js в папке задания. Пожалуйста, добавьте его в репозиторий.

Не вижу файл src/01_intro/index.js в репозитории. Запуште, пожалуйста, код.

Не вижу файл 01_intro/index.js в папке задания. Перенесите его из корневой папки репозитория в папку задания .

---------------------------
- мердж реквест

В целом все отлично, но нет созданной ветки home-task/intro в репозитории. Вам нужно создать новую ветку с указанным именем, а затем сделать merge request новой ветки в master.

    Вы создали ветку home-task/intro. Отлично! Теперь вам нужно сделать merge request этой ветки в ветку master и задание закончено. Напишите мне, если нужна будет помощь для создания merge request.

        Заходите в ваш репозиторий.
        Слева в меню есть ссылка на страницу создания merge request. На всякий случай продублирую тут:
        Далее жмите на кнопку "New merge request".

            ​Теперь вам нужно выбрать ветки для merge request.
            sourse: это ваша ветка в которой вы делали работу
            target: целевая ветка

                Тогда я немного расскажу про теорию, что было понятно.

                1. Git был создан для команды разработчиков над одним кодом. Все что вы делаете локально должно быть всегда загружено на удаленный репозиторий, чтобы остальные разработчики смогли получить наиболее актуальную версию проекта.

                2. Для удобства разработки и исключения конфликтов в коде участников команды были придуманны ветки. Каждая ветка это как отдельная песочница где можно сделать все что угодно с кодом проекта без опаски помешать остальным.

                3. Работая в команде и закончив рабочую задачу вы вливаете свой код в основную ветку (master). merge request это как раз этот процесс. Таким образом главный в команде может проверить все изменения которые разработчик хочет влить в master.


                Исходя из этого, что от вас требуется:

                1. Создать ветку локально.

                2. Создать в этой ветке коммит

                3. Запушить эту ветку в удаленный репозиторий, чтобы она была доступна именно там.

                4. Создать запрос на слияние (merge request) и отправить на проверку.