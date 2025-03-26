let gridSize = 16;
const container = document.querySelector("#container")
const sizeBtn = document.querySelector("#size")
const colorBtn = document.querySelector("#color");
const resetBtn = document.querySelector("#reset")
let isRandom = false;

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

function removeallGrids() {
  const children = document.querySelectorAll(".grid")
  children.forEach((child) => { child.remove() })
}

function generateColor() {
  const gray = "rgb(192,192,192)";
  const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;

  return isRandom ? randomColor : gray;
}

function coloring() {
  container.addEventListener("mouseover", (e) => {
    const color = generateColor();
    const child = e.target.closest(".grid");
    if (child && container.contains(child)) {
      child.style.backgroundColor = color;
    }
  })

}

sizeBtn.addEventListener("click", () => {
  let size = prompt("Enter a number between 1 and 100");
  const userNum = Number(size);
  if (isNaN(userNum) || userNum > 100 || userNum <= 0) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  gridSize = size;
  removeallGrids();
  createGrids();
});

colorBtn.addEventListener("click", () => {
  isRandom = !isRandom;
  if (isRandom) {
    colorBtn.innerText = "Random: ON ";
    colorBtn.style.backgroundColor = generateColor();
  } else {
    colorBtn.innerText = "Random: OFF";
    colorBtn.style.backgroundColor = "";
  }
});

resetBtn.addEventListener("click", () => {
  const children = document.querySelectorAll(".grid");
  children.forEach((child) => { child.style.backgroundColor = "" });
});

createGrids();
coloring();

