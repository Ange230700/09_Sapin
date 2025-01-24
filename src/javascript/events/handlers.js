// src\javascript\events\handlers.js

import { printTopOfTree } from "../helpers/utilities.js";

const handleLoadingOfDomContent = () => {
  printTopOfTree(3, 0);
  printTopOfTree(3, 1);
  printTopOfTree(3, 2);
};

export { handleLoadingOfDomContent };
