import { sortObjectByTypeAndValue } from "./helper.js";

// Step 1
const step1 = (input) => {
  const countMap = {};

  input.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  const sortedObject = sortObjectByTypeAndValue(countMap);
  return sortedObject;
};

// Step 2
const step2 = (input) => {
  const indexMap = {};

  input.forEach((element, index) => {
    indexMap[element] = indexMap[element] || [];
    indexMap[element].push(index);
  });
  return indexMap;
};

// Step 3
const step3 = (step1Output, step2Output) => {
  const combinedOutput = {};

  Object.keys(step1Output).forEach((element) => {
    const count = step1Output[element];
    const indices = step2Output[element];
    combinedOutput[element] = { count, indices };
  });
  return combinedOutput;
};

export { step1, step2, step3 };
