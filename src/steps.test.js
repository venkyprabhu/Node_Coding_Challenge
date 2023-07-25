import { step1, step2, step3 } from "./steps.js";
import { isValidElement } from "./helper.js";

describe("step1", () => {
  it("should return the correct count map for the input array", () => {
    const inputArray = [
      "1",
      "2",
      "1",
      "1",
      "3",
      "hello",
      "invalid!",
      "4",
      "1",
      "2",
      "hello",
      "text",
    ];

    const validInputArray = inputArray.filter((element) =>
      isValidElement(element)
    );
    const result = step1(validInputArray);
    const expected = {
      1: 4,
      2: 2,
      3: 1,
      4: 1,
      hello: 2,
      text: 1,
    };
    expect(result).toEqual(expected);
  });
});

describe("step2", () => {
  it("should return the correct index map for the input array", () => {
    const inputArray = [
      "1",
      "2",
      "1",
      "1",
      "3",
      "hello",
      "invalid!",
      "4",
      "1",
      "2",
      "hello",
      "text",
    ];
    const validInputArray = inputArray.filter((element) =>
      isValidElement(element)
    );
    const result = step2(validInputArray);
    const expected = {
      1: [0, 2, 3, 7],
      2: [1, 8],
      3: [4],
      4: [6],
      hello: [5, 9],
      text: [10],
    };
    expect(result).toEqual(expected);
  });
});

describe("step3", () => {
  it("should combine the output of step1 and step2 correctly", () => {
    const step1Output = {
      1: 3,
      2: 3,
      3: 1,
      4: 1,
      hello: 2,
      text: 1,
    };
    const step2Output = {
      1: [0, 2, 3, 8],
      2: [1, 4, 10],
      3: [5],
      4: [6],
      hello: [7, 9],
      text: [11],
    };
    const result = step3(step1Output, step2Output);
    const expected = {
      1: { count: 3, indices: [0, 2, 3, 8] },
      2: { count: 3, indices: [1, 4, 10] },
      3: { count: 1, indices: [5] },
      4: { count: 1, indices: [6] },
      hello: { count: 2, indices: [7, 9] },
      text: { count: 1, indices: [11] },
    };
    expect(result).toEqual(expected);
  });
});
