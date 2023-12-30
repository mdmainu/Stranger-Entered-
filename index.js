let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countWithDash = count + " - ";
  saveEl.textContent += " " + countWithDash;
  countEl.textContent = 0;
  count = 0;
}
