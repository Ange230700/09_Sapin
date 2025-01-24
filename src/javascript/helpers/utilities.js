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

function printLevels(height = 1, level = 1, offset = 1) {
  const indentation = printSpaces(offset);
  let topOfTree = "";

  const leftTriangle = printLeftStarsTriangle(height + level).split("\n");
  const filteredLeft = leftTriangle.filter((line) => line.trim() !== "");

  const rightTriangle = printRightStarsTriangle(height + level).split("\n");
  const filteredRight = rightTriangle.filter((line) => line.trim() !== "");

  for (let row = level; row < height + level; row++) {
    topOfTree += indentation + filteredLeft[row] + filteredRight[row] + "\n";
  }

  return topOfTree;
}

function printTree(levelHeight = 1) {
  let tree = "";

  for (let row = 0; row < levelHeight + 1; row++) {
    console.log("row", row, "other", levelHeight - row);
    tree += printLevels(levelHeight, row, levelHeight - row) + "\n";
  }

  const levelsArray = tree.split("\n");
  const filteredLevelsArray = levelsArray.filter((line) => line.trim() !== "");

  tree = filteredLevelsArray.join("\n");

  console.log(tree);
}

export {
  printStarsRectangle,
  printRightStarsTriangle,
  printLeftStarsTriangle,
  printLevels,
  printTree,
};
