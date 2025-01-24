// src\javascript\events\handlers.js

import { printLevels } from "../helpers/utilities.js";

const handleLoadingOfDomContent = () => {
  printLevels(3, 0, 3);
  printLevels(3, 1, 2);
  printLevels(3, 2, 1);
  printLevels(3, 3, 0);
};

export { handleLoadingOfDomContent };
