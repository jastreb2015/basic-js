const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
/*   t = 8033ln(Ao/At),A 0 – удельная активность углерода в современном
  органическом веществе; A t – удельная активность углерода в исследуемом
  образце */

  let t;

  if (isNaN(+sampleActivity) || typeof(sampleActivity) !== 'string' || +sampleActivity <= 0 || +sampleActivity > 15){
    return false;
  }
  t = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
  return t;
}

module.exports = {
  dateSample
};
