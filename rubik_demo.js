// Node script to simulate the 2D Rubik puzzle example
// Colors and grid initialization
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

// Represent grid as an array of background colors
const grid = [];
for (let i = 0; i < 9; i++) {
  grid[i] = colors[i % colors.length];
}

// Helper to print the grid in rows
function printGrid() {
  for (let row = 0; row < 3; row++) {
    const rowColors = grid.slice(row * 3, row * 3 + 3);
    console.log(rowColors.join(" | "));
  }
  console.log("-");
}

// Rotate the row that contains the index
function rotateRow(index) {
  const rowStart = Math.floor(index / 3) * 3;
  const newColors = [
    grid[rowStart + 2],
    grid[rowStart],
    grid[rowStart + 1],
  ];
  for (let i = 0; i < 3; i++) {
    grid[rowStart + i] = newColors[i];
  }
}

console.log("Initial grid:");
printGrid();

// Simulate clicking the first cell (index 0)
console.log("Clicking index 0 (rotate first row):");
rotateRow(0);
printGrid();

// Simulate clicking index 4 (middle row)
console.log("Clicking index 4 (rotate second row):");
rotateRow(4);
printGrid();
