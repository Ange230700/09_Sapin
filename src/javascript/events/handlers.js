// src\javascript\events\handlers.js

import { printStars } from "../helpers/utilities.js";

const handleLoadingOfDomContent = () => {
  printStars(2);
  printStars(5);
};

export { handleLoadingOfDomContent };
