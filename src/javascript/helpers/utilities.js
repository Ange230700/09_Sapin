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

  for (let row = 1; row <= height; row++) {
    starsRectangle += printStars(width) + "\n";
  }

  console.log(starsRectangle);
}

function printRightStarsTriangle(size = 1) {
  let rightStarsTriangle = "";

  for (let row = 0; row < size; row++) {
    rightStarsTriangle += printStars(row) + "\\" + "\n";
  }

  console.log(rightStarsTriangle);
}

function printLeftStarsTriangle(size = 1) {
  let leftStarsTriangle = "";

  for (let row = 0; row < size; row++) {
    leftStarsTriangle += printSpaces(size - row) + "/" + printStars(row) + "\n";
  }

  console.log(leftStarsTriangle);
}

export { printStarsRectangle, printRightStarsTriangle, printLeftStarsTriangle };
