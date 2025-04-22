export function getFromLocaleStorage() {
  const things = JSON.parse(localStorage.getItem("things")) || [];
  return things;
}

export function addToLocaleStorage(thing) {
  const things = JSON.parse(localStorage.getItem("things")) || [];
  things.push(thing);
  localStorage.setItem("things", JSON.stringify(things));
}

export function setToLocaleStorage(things) {
  localStorage.setItem("things", JSON.stringify(things));
}
