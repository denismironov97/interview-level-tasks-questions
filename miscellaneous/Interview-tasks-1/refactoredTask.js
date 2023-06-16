const Calculator = {
  calculateSum: function (numbers) {
    return numbers.reduce((accum, currVal) => accum + currVal, 0);
  },

  // This method capitalizes the string input and returns it as a string output with capital letters
  capitalizeString: function (str) {
    return str
      .split(" ")
      .map((word) => {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
        );
      })
      .join(" ");
  },

  findMax: function (arr) {
    return arr.sort((a, b) => b - a)[0];
  },

  checkPalindrome: function (str) {
    return str.split("").reverse().join("") === str;
  },

  generateFibonacci: function (n) {
    let fibonacci = [1, 1];

    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
  },

  convertToBinary: function (num) {
    return Number(num.toString(2));
  },

  getRandomNumber: function (minNum, maxNum) {
    minNum = Math.ceil(minNum);
    maxNum = Math.floor(maxNum);
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  },

  filterArray: function (arr, predicate) {
    return arr.filter(predicate);
  },
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const str = "hello world";
const arr = [3, 1, 7, 5, 2, 9];

//console.log("Sum:", Calculator.calculateSum(numbers));
//console.log("Capitalized String:", Calculator.capitalizeString(str));
//console.log("Max Value:", Calculator.findMax(arr));
//console.log("Is Palindrome:", Calculator.checkPalindrome(str));
//console.log("Fibonacci Sequence:", Calculator.generateFibonacci(10));
// console.log("Binary Representation:", Calculator.convertToBinary(42));
// console.log("Binary Representation:", Calculator.convertToBinary(6));
// console.log("Binary Representation:", Calculator.convertToBinary(-10));
//console.log("Random Number:", Calculator.getRandomNumber(1, 100));
console.log(
  "Filtered Array:",
  Calculator.filterArray(arr, (num) => {
    return num % 2 === 0;
  })
);

console.log(
  "Filtered Array:",
  Calculator.filterArray(arr, (num) => num % 2 === 0)
);
