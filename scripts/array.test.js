const analyze = require("./array");

test("Array [1,8,3,4,2,6] min: 1, max: 8, average: 4, length: 6", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
