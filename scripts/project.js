function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function caesar(string, shift) {
  let cipher = [];
  const characterShift = shift % 26;
  for (i = 0; i < string.length; i++) {
    //Check for anything outside alphabet and return it
    if (
      !(
        (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
        (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
      )
    ) {
      cipher.push(string.charAt(i));
    }
    //Check for capital
    else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      // Check for Z-A wrapping
      if (string.charCodeAt(i) + shift > 90) {
        cipher.push(
          String.fromCharCode(string.charCodeAt(i) - 26 + characterShift)
        );
      }
      //A-Z no wrapping needed
      else if (string.charCodeAt(i) + shift <= 90) {
        cipher.push(String.fromCharCode(string.charCodeAt(i) + characterShift));
      }
    }
    // Lower-case
    else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      // Check for Z-A wrapping
      if (string.charCodeAt(i) + shift > 122) {
        cipher.push(
          String.fromCharCode(string.charCodeAt(i) - 26 + characterShift)
        );
      }
      // a-z no wrapping needed
      else if (string.charCodeAt(i) + shift <= 122) {
        cipher.push(String.fromCharCode(string.charCodeAt(i) + characterShift));
      }
    }
  }
  return cipher.join("");
}

module.exports = { capitalize, reverseString, Calculator, caesar };
