Авторизация/регистрация происходит без ошибок, таймеры видны только для владельца. Все работает по условиям ДЗ и вам плюсик за использование router. Работа выполнена на отлично!

Вам плюсик за хороший код, но может все-таки добавите router?   

Вам плюсик  за хороший код, и за использование router!   

Что можно исправить:
- добавление $inc: { progress: 1000 }, это будет работать не для всех таймеров.
- duration таймеров не должны храниться в базе из=за большой нагрузки, или они каждый раз высчитываются основываясь от времени старта и текущего времени.

Рекомендации:
Можете также поизучать самостоятельно документацию к express. У него есть неплохая русская документация.
https://expressjs.com/ru/

Можете так же глянуть в сторону nest.js, этот фреймворк начинают активно использовать:
https://ru.hexlet.io/blog/posts/gid-po-nest-js

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.


# а как обновить duration с помощью findOneAndUpdate
Насколько я знаю так нельзя. Но вы можете сделать проще и использовать findOne и updateOne по отдельности.


Или не высчитывать сами даты, а просто сохранить текущий таймстэмп в свойстве end. Например:

await timers.updateOne(
 { _id: ObjectId(id) },
 { $set: { end: Date.now() } },
 { upsert: true }
);
И при запросе за таймерами высчитывать сам duration:

router.get("/", auth(), async (req, res) => {
  try {
    const user = await findUserBySessionId(req.db, req.sessionId);
    const timers = req.db.collection("timers");

    if (req.query.isActive === "true") {
      const targetTimers = await timers
        .find({
          end: { $exists: false },
          userId: user._id,
        })
        .toArray();

      res.json(
        targetTimers.map((timer) => ({
          ...timer,
          start: +timer.start,
          progress: Date.now() - +timer.start,
        }))
      );
      return;
    }
    const targetTimers = await timers
      .find({
        end: { $exists: true },
        userId: user._id,
      })
      .toArray();

    res.json(
      targetTimers.map((timer) => ({
        ...timer,
        start: +timer.start,
        end: +timer.end,
        duration: +timer.end - +timer.start,
      }))
    );
  } catch (err) {
    res.status(400).send(err.message);
  }
});




###
Прочее

------------------

8. Базы данных, Нереляционные БД

Вы можете использовать find — аналог SELECT в MySQL. Используется для выборки документов из MongoDB. Возвращает массив документов в виде коллекции, если документов нет — пустую коллекцию. Пример:

db.users.find( { username: “joe”, age: 27 } );
----------------

Вы можете не хранить duration в базе, а каждый раз его высчитывать основываясь от времени старта и текущего времени.




НЕ РАБОТАЕТ так как счёт таймера идёт только на активной странице!!!!!

Насколько я знаю, в mongodb нет доступа к самим данным во время их изменения.
Попробуйте инкремент $inc:
https://docs.mongodb.com/manual/reference/operator/update/inc/#mongodb-update-up.-inc
Напишите мне, если нужна будет помощь с инкрементом.

    Примерно вот так:
      await req.db
        .collection("timers")
        .updateMany({ is_active: true, user_id: req.user._id }, { $inc: { progress: 1000 } });
