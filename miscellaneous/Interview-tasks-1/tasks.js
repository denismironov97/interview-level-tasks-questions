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
};
