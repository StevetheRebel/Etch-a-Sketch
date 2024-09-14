const rows = document.getElementById("rows");
const cols = document.getElementById("columns");
const btn = document.getElementById("submit");
const footer = document.getElementById("footer");
const date = new Date();
let drawing = false;

footer.innerHTML = `<span> The Odin Project &copy;${date.getFullYear()} Steve Okoth</span>`;

btn.addEventListener("click", function () {
  const row = parseInt(rows.value);
  const col = parseInt(cols.value);
  const container = document.getElementById("container");

  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${row}, 1fr)`;

  for (let i = 0; i < row * col; i++) {
    const gridEl = document.createElement("div");
    gridEl.className = "gridEl";
    container.appendChild(gridEl);
  }
});

document.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    drawing = true;
  }
});

document.addEventListener("mouseup", function (event) {

  if (event.button === 0) {
    drawing = false;
  }
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("mouseover", function (event) {
  if (drawing && event.target.classList.contains("gridEl")) {
    event.target.style.backgroundColor = "black";
  }
});

