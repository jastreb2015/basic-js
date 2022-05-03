// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
//  * @param {Array<Array>} matrix 
//  * @return {Number} count of cats found
//  *
//  * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

/* function countCats(matrix) {
  //Этот код рабочий, но несколько медленее варианта ниже
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

let arr = [];
for( i = 0; i < matrix.length; i++) {
 
  arr.push(matrix[i].map(n => n === '^^' ? 1 : 0).reduce((a, b) => a + b, 0));
}

return arr.reduce((a, b) => a + b, 0);

} */

function countCats(matrix) {

let count = 0;
for( i = 0; i < matrix.length; i++) {
  for( j = 0; j < matrix[i].length; j++) {
 
  if(matrix[i][j] === '^^'){
    count++;
  }
  }
}

return count;

}

console.log(countCats([
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
]));

module.exports = {
  countCats
};
