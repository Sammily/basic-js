const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let arr = s1.split('');
    let arr2 = s2.split('');
    let count=0;
      
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr2.length;j++){
        if(arr[i]==arr2[j] && arr[i]!='#'){
          arr[i] = '#';
          arr2[j] = '#';
          count++;
        }
      }
    }
   return count;
}

module.exports = {
  getCommonCharacterCount
};
