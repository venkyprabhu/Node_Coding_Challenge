// Check if the element is Valid
function isValidElement(element) {
  return /^[a-zA-Z0-9]+$/.test(element);
}

//  sorted by numbers followed by text in ascending order
function sortObjectByTypeAndValue(inputObject) {
  const sortedKeys = Object.keys(inputObject).sort((a, b) => {
    const aIsNumeric = /^\d+$/.test(a);
    const bIsNumeric = /^\d+$/.test(b);

    if (aIsNumeric && bIsNumeric) {
      return parseInt(a) - parseInt(b);
    }
    if (aIsNumeric) {
      return -1;
    } else if (bIsNumeric) {
      return 1;
    }
    return a.localeCompare(b);
  });

  const sortedObject = {};
  sortedKeys.forEach((key) => {
    sortedObject[key] = inputObject[key];
  });
  return sortedObject;
}

export { isValidElement, sortObjectByTypeAndValue };
