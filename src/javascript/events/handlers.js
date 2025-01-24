// src\javascript\events\handlers.js

import {
  printStarsRectangle,
  printRightStarsTriangle,
  printLeftStarsTriangle,
} from "../helpers/utilities.js";

const handleLoadingOfDomContent = () => {
  printStarsRectangle(5, 5);
  printRightStarsTriangle(5);
  printLeftStarsTriangle(5);
};

export { handleLoadingOfDomContent };
