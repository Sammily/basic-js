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
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!(Array.isArray(arr))){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  else{
    if(arr==[]){
      return [];
    }
    else{
      let arr2 = arr;
      for(let i=0;i<arr2.length;i++){
        if(arr2[i]=='--discard-next'){
          arr2.splice(i+1,1);
        }
        if(arr2[i]=='--discard-prev'){
          arr2.splice(i-1,1);
        }
        if(arr2[i]=='--double-next'){
          arr.splice(i+1,0,arr2[i+1]);
        }
        if(arr2[i]=='--double-prev'){
          arr2.splice(i-1,0,arr2[i-1]);
        }
      }
    }
  return arr2;
  }
  
}

module.exports = {
  transform
};

/*--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array.*/