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
  isPalindromeNum(number) {
    let numsArr = number
      .toString()
      .split("")
      .map((num) => Number(num));

    return this.reverseArray(numsArr).join("") === number.toString();
  },
};

//isPalindromeNum
console.log(
  taskOperator.isPalindromeNum(75257),
  taskOperator.isPalindromeNum(751257),
  taskOperator.isPalindromeNum(1234321)
);
