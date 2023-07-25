import { readFile } from "fs";

import { step1, step2, step3 } from "./src/steps.js";
import { isValidElement } from "./src/helper.js";

// Read file, split to array, Validate input and call the steps
function readFileAndProcessAndValidate(filename) {
  readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      return;
    }
    const inputArray = data.split(",").map((item) => item.trim());

    // Filter Invalid elements
    const validInputArray = inputArray.filter((element) =>
      isValidElement(element)
    );

    // Call Step 1, 2, 3
    const result1 = step1(validInputArray);
    const result2 = step2(validInputArray);
    const result3 = step3(result1, result2);
    // console.log(result1);
    // console.log(result2);
    console.log(JSON.stringify(result3, null, 1));
  });
}

// Main function
if (process.argv.length !== 3) {
  console.error("Usage: node run_script.js file1.txt");
} else {
  const filename = process.argv[2];
  readFileAndProcessAndValidate(filename);
}
