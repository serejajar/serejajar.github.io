const express = require("express");
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const { nanoid } = require("nanoid");
const crypto = require("crypto");
const app = express();

// Настройка шаблонов
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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Хэширование пароля
const hash = (str) => crypto.createHash("sha256").update(str).digest("hex");

const DB = {
  users: [{ _id: nanoid(), username: "admin", password: hash("pwd007") }],
  sessions: {},
  timers: [],
};

// Middleware для авторизации по cookies
app.use((req, res, next) => {
  const sid = req.cookies?.sid;
  if (sid && DB.sessions[sid]) {
    req.user = DB.sessions[sid];
  }
  next();
});

app.get("/", (req, res) => {
  res.render("index", {
    user: req.user,
    authError: req.query.authError === "true" ? "Wrong username or password" : req.query.authError,
  });
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.redirect("/?authError=Missing+fields");
  if (DB.users.find((u) => u.username === username)) {
    return res.redirect("/?authError=User+already+exists");
  }
  const newUser = { _id: nanoid(), username, password: hash(password) };
  DB.users.push(newUser);
  const sid = nanoid();
  DB.sessions[sid] = newUser;
  res.cookie("sid", sid);
  res.redirect("/");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = DB.users.find((u) => u.username === username && u.password === hash(password));
  if (!user) return res.redirect("/?authError=true");
  const sid = nanoid();
  DB.sessions[sid] = user;
  res.cookie("sid", sid);
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  const sid = req.cookies?.sid;
  if (sid) delete DB.sessions[sid];
  res.clearCookie("sid");
  res.redirect("/");
});

// Middleware для защиты API
const requireAuth = (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: "Not authorized" });
  next();
};

// Работа с таймерами
app.get("/api/timers", requireAuth, (req, res) => {
  const isActive = req.query.isActive === "true";
  const filtered = DB.timers.filter((t) => t.isActive === isActive && t.userId === req.user._id);
  if (isActive) {
    const now = Date.now();
    return res.json(filtered.map((t) => ({ ...t, progress: now - t.start })));
  }
  res.json(filtered);
});

app.post("/api/timers", requireAuth, (req, res) => {
  const { description } = req.body;
  if (!description || typeof description !== "string") {
    return res.status(400).json({ error: "Описание обязательно" });
  }
  const newTimer = {
    id: nanoid(),
    start: Date.now(),
    description,
    isActive: true,
    userId: req.user._id,
  };
  DB.timers.push(newTimer);
  res.status(201).json({ id: newTimer.id });
});

app.post("/api/timers/:id/stop", requireAuth, (req, res) => {
  const { id } = req.params;
  const timer = DB.timers.find((t) => t.id === id && t.isActive && t.userId === req.user._id);
  if (!timer) return res.status(404).json({ error: "Таймер не найден" });
  timer.end = Date.now();
  timer.duration = timer.end - timer.start;
  timer.isActive = false;
  res.status(204).end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
