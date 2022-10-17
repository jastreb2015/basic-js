// const { NotImplementedError } = require('../extensions/index.js');

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
  /* if (+sampleActivity < 1.5 || +sampleActivity >= 3 && +sampleActivity < 4) {
    t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.LN2/HALF_LIFE_PERIOD));
  } else if(+sampleActivity < 3){
    t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
  } else {
    t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.LN2/HALF_LIFE_PERIOD));
  } */
  if (sampleActivity.length < 6 || +sampleActivity < 1.5) {
    t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.LN2/HALF_LIFE_PERIOD));
  } else {
    t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
  }
  return t;
} 


/* console.log(dateSample('9.59383373526808'));//3696
console.log(dateSample('9.122605776326203'));//4112
console.log(dateSample('8.738732722522064'));//4468
console.log(dateSample('1.6196187736736514'));//18405
console.log(dateSample('1'));//22387
console.log(dateSample('3'));//13305
console.log(dateSample('3.142'));//12923
console.log(dateSample('1.1'));//21599
console.log(dateSample('1.2790192613422384'));//, 20353
console.log(dateSample('1.2765589684191272'));//20369
console.log(dateSample('9.8888'));// 3445
 */
module.exports = {
  dateSample
};
