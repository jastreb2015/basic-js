const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
 */
function transform(arr) {
  if (!(arr instanceof Array) || arr == undefined) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let arrRes = arr.slice(0);
  let strDiscardNext = '--discard-next';
  let strDiscardPrev = '--discard-prev';
  let strDoubleNext = '--double-next';
  let strDoublePrev = '--double-prev';


  for (let i = 0; i < arrRes.length; i++) {
    if ((arrRes[i] === strDiscardNext) && (arrRes[i+1] !== undefined || [])) {
      arrRes.splice(i, 1, []);
      arrRes.splice(i+1, 1, []);
    } else if(arrRes[i] === strDiscardNext) {
      arrRes.splice(i, 1, []);
    }

    if ((arrRes[i] === strDiscardPrev) && (i !== 0) && (arrRes[i-1] !==  undefined || [])) {
      arrRes.splice(i, 1, []);
      arrRes.splice(i-1, 1, []);
    } else if(arrRes[i] === strDiscardPrev) {
      arrRes.splice(i, 1, []);
    }

    if ((arrRes[i] === strDoubleNext) && (arrRes[i+1] !== undefined || [])) {
      arrRes[i] = arrRes[i+1];
    } else if(arrRes[i] === strDoubleNext) {
      arrRes.splice(i, 1, []);
    }
    if ((arrRes[i] === strDoublePrev) && (arrRes[i-1] !== undefined || [])) {
      arrRes[i] = arrRes[i-1];
    } else if(arrRes[i] === strDoublePrev) {
      arrRes.splice(i, 1, []);
    }
  }

  return arrRes.filter(n => !Array.isArray(n) && (n !== undefined));

}

console.log(transform([1, 2, 3, '--double-next', 4, 5]));//`[1, 2, 3, 4, 4, 5]`
console.log(transform([1, 2, 3, '--double-next', 4, 5]));//`[1, 2, 3, 4, 4, 5]`
console.log(transform([1, 2, [], '--discard-prev', 3, '--discard-next', 4, 5]));
console.log(transform(['--discard-prev', 1, 2, 3, 4, 5]));//[1, 2, 4, 5]
console.log(transform([ 1, 2, 3, , 4, 5, '--discard-next']));//[1, 2, 4, 5]
console.log(transform([1, 2, 3, '--discard-next', 4, 5]));
console.log(transform(['--double-prev', 1, 2, 3]));
console.log(transform([1, 2, 3, '--double-next']));
console.log(transform([1, 2, 3, '--discard-next']));

module.exports = {
  transform
};
