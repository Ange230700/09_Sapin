// src\javascript\events\handlers.js

import {
  printStarsRectangle,
  printRightStarsTriangle,
} from "../helpers/utilities.js";

const handleLoadingOfDomContent = () => {
  printStarsRectangle(5, 5);
  printRightStarsTriangle(5);
};

export { handleLoadingOfDomContent };
