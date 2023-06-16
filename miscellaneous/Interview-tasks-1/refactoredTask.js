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
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },

  checkPalindrome: function (str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  },

  generateFibonacci: function (n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      let num = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(num);
    }
    return fibonacci;
  },

  convertToBinary: function (num) {
    return num.toString(2);
  },

  getRandomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  filterArray: function (arr, condition) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  },
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const str = "hello world";
const arr = [3, 1, 7, 5, 2, 9];

//console.log("Sum:", Calculator.calculateSum(numbers));
console.log("Capitalized String:", Calculator.capitalizeString(str));
// console.log("Max Value:", Calculator.findMax(arr));
// console.log("Is Palindrome:", Calculator.checkPalindrome(str));
// console.log("Fibonacci Sequence:", Calculator.generateFibonacci(10));
// console.log("Binary Representation:", Calculator.convertToBinary(42));
// console.log("Random Number:", Calculator.getRandomNumber(1, 100));
// console.log(
//   "Filtered Array:",
//   Calculator.filterArray(arr, (num) => num % 2 === 0)
// );
