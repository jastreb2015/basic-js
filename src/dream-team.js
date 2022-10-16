const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let arr2 = [];
  if (Array.isArray(arr) && arr.length > 0 && arr.find(i => typeof i === "string")) {
    arr2 = arr.filter(n => typeof n === 'string').map(str => str.trim());
return arr2.map(str => str[0].toUpperCase()).sort().join('').toUpperCase();
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
