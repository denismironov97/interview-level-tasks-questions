const taskOperator = {
  //task 2)
  reverseArray(arr) {
    let array = Array.from(arr);

    for (let i = 0; i < array.length / 2; i++) {
      let oldPosNum = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = oldPosNum;
    }

    return array;
  },
  //task 3)
  primeNumberChecker(number) {
    let isPrimeFlag = true;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrimeFlag = false;
        break;
      }
    }

    return isPrimeFlag;
  },
  //task 4)
  factorialCalculation(n) {
    let facSum = 1;

    for (let i = n; i > 0; i--) {
      facSum *= i;
    }

    return facSum;
  },
  //task 5)
  isPalindromeNum(number) {
    let numsArr = number
      .toString()
      .split("")
      .map((num) => Number(num));

    return this.reverseArray(numsArr).join("") === number.toString();
  },
  //task 6)
  fibonacciSequenceV1(n) {
    let fibSequence = [];

    for (let i = 1; i <= n; i++) {
      let previousNum1 = fibSequence[fibSequence.length - 1];
      let previousNum2 = fibSequence[fibSequence.length - 1 - 1];

      if (previousNum1 === undefined || previousNum2 === undefined) {
        fibSequence.push(1);
        continue;
      }

      fibSequence.push(previousNum1 + previousNum2);
    }

    let fibonacciSB = [];

    for (let i = 0; i < fibSequence.length; i++) {
      fibonacciSB.push(`f${i + 1}->${fibSequence[i]}`);
    }

    return fibonacciSB.join(" ");
  },
  fibonacciSequenceV2(n) {
    let fibSequence = [];

    for (let i = 1; i <= n; i++) {
      if (
        isIndexOutOfRange(fibSequence.length - 1, fibSequence.length) ||
        isIndexOutOfRange(fibSequence.length - 1 - 1, fibSequence.length)
      ) {
        fibSequence.push(1);
        continue;
      }

      let previousNum1 = fibSequence[fibSequence.length - 1];
      let previousNum2 = fibSequence[fibSequence.length - 1 - 1];

      fibSequence.push(previousNum1 + previousNum2);
    }

    let fibonacciSB = [];

    for (let i = 0; i < fibSequence.length; i++) {
      fibonacciSB.push(`f${i + 1}->${fibSequence[i]}`);
    }

    return fibonacciSB.join(" ");

    function isIndexOutOfRange(index, length) {
      return index < 0 || index >= length;
    }
  },
};

/*
//factorialCalculation
console.log(
  taskOperator.factorialCalculation(5),
  taskOperator.factorialCalculation(1),
  taskOperator.factorialCalculation(2),
  taskOperator.factorialCalculation(7)
);

//isPalindromeNum
console.log(
  taskOperator.isPalindromeNum(75257),
  taskOperator.isPalindromeNum(751257),
  taskOperator.isPalindromeNum(1234321)
);

//fibonacciSequence
console.log(taskOperator.fibonacciSequenceV1(1));
console.log(taskOperator.fibonacciSequenceV1(2));
console.log(taskOperator.fibonacciSequenceV1(3));
console.log(taskOperator.fibonacciSequenceV1(5));
console.log(taskOperator.fibonacciSequenceV1(7));

console.log(taskOperator.fibonacciSequenceV2(1));
console.log(taskOperator.fibonacciSequenceV2(2));
console.log(taskOperator.fibonacciSequenceV2(3));
console.log(taskOperator.fibonacciSequenceV2(5));
console.log(taskOperator.fibonacciSequenceV2(7));
*/

//primeNumberChecker
console.log(
  taskOperator.primeNumberChecker(2),
  taskOperator.primeNumberChecker(3),
  taskOperator.primeNumberChecker(5),
  taskOperator.primeNumberChecker(6),
  taskOperator.primeNumberChecker(13),
  taskOperator.primeNumberChecker(27),
  taskOperator.primeNumberChecker(28),
  taskOperator.primeNumberChecker(39)
);
