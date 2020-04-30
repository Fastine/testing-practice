function average(array) {
  let x = [...array];
  let result = 0;
  let i = 0;
  x.forEach((item) => {
    result += item;
    i++;
  });
  return result / i;
}

function min(array) {
  let x = [...array];
  let min = Infinity;
  x.forEach((item) => {
    if (item < min) min = item;
    else return;
  });
  return min;
}

function max(array) {
  let x = [...array];
  let max = -Infinity;
  x.forEach((item) => {
    if (item > max) max = item;
    else return;
  });
  return max;
}

function length(array) {
  let x = [...array];
  let length = 0;
  x.forEach((item) => {
    length++;
  });
  return length;
}

//Analyze an array of numbers
function analyze(...numbers) {
  //   average = average(...arguments);
  //   min = min(...arguments);
  //   max = max(...arguments);
  //   length = length(...arguments);

  //Object of results using helper functions
  return {
    average: average(...numbers),
    min: min(...numbers),
    max: max(...numbers),
    length: length(...numbers),
  };
}
module.exports = analyze;
