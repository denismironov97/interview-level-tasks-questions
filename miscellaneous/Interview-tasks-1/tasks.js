const taskOperator = {
  reverseArray(arr) {
    let array = Array.from(arr);

    for (let i = 0; i < array.length / 2; i++) {
      let oldPosNum = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = oldPosNum;
    }

    return array;
  },
  factorialCalculation(n) {
    let facSum = 1;

    for (let i = n; i > 0; i--) {
      facSum *= i;
    }

    return facSum;
  },
  isPalindromeNum(number) {
    let numsArr = number
      .toString()
      .split("")
      .map((num) => Number(num));

    return this.reverseArray(numsArr).join("") === number.toString();
  },
};

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
