const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {

  let month;
  let str = '';
  let newDate = new Date();

  if(date == undefined) {
    return 'Unable to determine the time of year!';
  }

  
 
  console.log(date.hasOwnProperty('toString'));// gives true for fakedates, can use for checking
  
  if ((Object.prototype.toString.call(date) === "[object Date]") && ( date instanceof Date ) && (typeof date[Symbol.toStringTag] !== 'string')) {
    if (isNaN(date) || ( date.getFullYear() === newDate.getFullYear())) { 
      throw  new Error("Invalid date!");
    } else {
      month = date.getUTCMonth();
      switch(month) {
        case 0:
        case 1:
        case 11:
          str = "winter";
          break;
        case 2:
        case 3:
        case 4:
          str = "spring";
          break;
        case 5:
        case 6:
        case 7:
          str = "summer";
           break;
    case 8:
    case 9:
    case 10:
      str = "autumn";
      break;
      }
    }
  } else {
    throw  new Error("Invalid date!");
  }
   return str;
}


module.exports = {
  getSeason
};
