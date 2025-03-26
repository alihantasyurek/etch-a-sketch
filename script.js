let gridSize = 3;
const container = document.querySelector("#container")

function createGrids() {
  const totalGrid = gridSize * gridSize;
  for (let i = 0; i < totalGrid; ++i) {
    createGrid();
  }
}

function createGrid() {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.flexBasis = `${100 / gridSize}%`;
  container.appendChild(grid);
}

createGrids();
