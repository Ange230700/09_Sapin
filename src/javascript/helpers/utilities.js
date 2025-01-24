// src\javascript\helpers\utilities.js

function printStars(numberOfStars = 1) {
  const starsString = "*".repeat(numberOfStars);
  return starsString;
}

function printSpaces(numberOfSpaces = 1) {
  const spacesString = " ".repeat(numberOfSpaces);
  return spacesString;
}

function printStarsRectangle(height = 1, width = 1) {
  let starsRectangle = "";

  for (let row = 0; row < height; row++) {
    starsRectangle += printStars(width) + "\n";
  }

  console.log(starsRectangle);
}

function printRightStarsTriangle(size = 1) {
  let rightStarsTriangle = "";

  for (let row = 0; row < size; row++) {
    rightStarsTriangle += "|" + printStars(row) + "\\" + "\n";
  }

  return rightStarsTriangle;
}

function printLeftStarsTriangle(size = 1) {
  let leftStarsTriangle = "";

  for (let row = 0; row < size; row++) {
    leftStarsTriangle += printSpaces(size - row) + "/" + printStars(row) + "\n";
  }

  return leftStarsTriangle;
}

function printTopOfTree(height = 1) {
  let topOfTree = "";

  topOfTree += printSpaces(height + 1) + "+" + "\n";

  const leftTriangle = printLeftStarsTriangle(height).split("\n");
  const filteredLeft = leftTriangle.filter((line) => line.trim() !== "");

  const rightTriangle = printRightStarsTriangle(height).split("\n");
  const filteredRight = rightTriangle.filter((line) => line.trim() !== "");

  for (let row = 0; row < height - 1; row++) {
    topOfTree += filteredLeft[row] + filteredRight[row] + "\n";
  }

  console.log(topOfTree);
}

export {
  printStarsRectangle,
  printRightStarsTriangle,
  printLeftStarsTriangle,
  printTopOfTree,
};
