const rows = document.getElementById("rows");
const cols = document.getElementById("columns");
const btn = document.getElementById("submit");
// const gridCtn = document.getElementById("container");
const footer = document.getElementById("footer");
const date = new Date();

footer.innerHTML = `<span> The Odin Project &copy;${date.getFullYear()} Steve Okoth`;

btn.addEventListener('click', function() {
    // Get the number of rows and columns
    const row = parseInt(rows.value);
    const col = parseInt(cols.value);

    // Get the container element
    const container = document.getElementById('container');


    // Set the CSS grid template based on the number of columns
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;

    // Create the grid elements
    for (let i = 0; i < row * col; i++) {
        const gridEl = document.createElement('div');
        gridEl.className = 'gridEl';
        container.appendChild(gridEl);
    }
});
