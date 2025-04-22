const express = require("express");
const nunjucks = require("nunjucks");
const { nanoid } = require("nanoid");

const app = express();
const TIMERS = [];

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  tags: {
    blockStart: "[%",
    blockEnd: "%]",
    variableStart: "[[",
    variableEnd: "]]",
    commentStart: "[#",
    commentEnd: "#]",
  },
});

app.set("view engine", "njk");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

// ✅ Получить таймеры (активные или завершённые)
app.get("/api/timers", (req, res) => {
  const isActive = req.query.isActive === "true";
  const filtered = TIMERS.filter((timer) => timer.isActive === isActive);

  if (isActive) {
    const now = Date.now();
    // Добавим поле progress для отображения прошедшего времени
    const activeWithProgress = filtered.map((timer) => ({
      ...timer,
      progress: now - timer.start,
    }));
    res.json(activeWithProgress);
  } else {
    res.json(filtered);
  }
});

// ✅ Создать новый таймер
app.post("/api/timers", (req, res) => {
  const { description } = req.body;

  if (!description || typeof description !== "string") {
    return res.status(400).json({ error: "Описание обязательно" });
  }

  const newTimer = {
    id: nanoid(),
    start: Date.now(),
    description,
    isActive: true,
  };

  TIMERS.push(newTimer);

  res.status(201).json({ id: newTimer.id });
});

// ✅ Остановить таймер
app.post("/api/timers/:id/stop", (req, res) => {
  const { id } = req.params;
  const timer = TIMERS.find((t) => t.id === id && t.isActive);

  if (!timer) {
    return res.status(404).json({ error: "Активный таймер не найден" });
  }

  timer.end = Date.now();
  timer.duration = timer.end - timer.start;
  timer.isActive = false;

  res.status(204).send(); // Успешно, без тела
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
