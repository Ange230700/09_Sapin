// src\javascript\helpers\utilities.js

function printStars(numberOfStars = 1) {
  const starsString = "*".repeat(numberOfStars);
  return starsString;
}

function printStarsRectangle(height = 1, width = 1) {
  let starsRectangle = "";
  for (let row = 1; row <= height; row++) {
    starsRectangle += printStars(width) + "\n";
  }

  console.log(starsRectangle);
}

export { printStarsRectangle };
