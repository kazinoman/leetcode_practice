/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  if (num.length > 0) {
    let calculatedString = ``;
    let result = [];
    for (let i = 0; i < num.length; i++) {
      calculatedString = `${calculatedString}${num[i]}`;
    }
    const temp = BigInt(calculatedString);
    const resultedValue = String(temp + BigInt(k));

    for (let i = 0; i < resultedValue.length; i++) {
      result.push(Number(resultedValue[i]));
    }

    return result;
  }
};

console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));
