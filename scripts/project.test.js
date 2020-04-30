const { capitalize, reverseString, Calculator, caesar } = require("./project");

test("returns string with first letter capitalized", () => {
  expect(capitalize("john")).toBe("John");
});

test("Reverses a string", () => {
  expect(reverseString("john")).toBe("nhoj");
});

test("Calculator: add", () => {
  expect(Calculator.add(10, 2)).toBe(12);
});
test("Calculator: subtract", () => {
  expect(Calculator.subtract(10, 2)).toBe(8);
});
test("Calculator: multiply", () => {
  expect(Calculator.multiply(10, 2)).toBe(20);
});
test("Calculator: divide", () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

//**Caesar Testing */

//Capital, no wrapping
test("caesar cipher, capital, no wrapping", () => {
  expect(caesar("ABC", 1)).toBe("BCD");
});

//Capital, sentence, wrapping
test("caesar cipher, capital, no wrap, sentence", () => {
  expect(caesar("A DOG JUMPED OVER THE MOON", 13)).toBe(
    "N QBT WHZCRQ BIRE GUR ZBBA"
  );
});

//Capital, wrapping
test("caesar cipher, capital, wrapping", () => {
  expect(caesar("XYZ", 3)).toBe("ABC");
});

test("caesar non-alphabet", () => {
  expect(caesar(".!@#$%^&*", 13)).toBe(".!@#$%^&*");
});

test("caesar, lowercase, wrapping", () => {
  expect(caesar("a dog jumped over the moon", 13)).toBe(
    "n qbt whzcrq bire gur zbba"
  );
});

test("caesar, lowercase, no wrapping", () => {
  expect(caesar("abc", 1)).toBe("bcd");
});

test("caesar, full test", () => {
  expect(caesar("This is a test sentence. I hope it works!", 13)).toBe(
    "Guvf vf n grfg fragrapr. V ubcr vg jbexf!"
  );
});
