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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!(Array.isArray(arr))){
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  else{
    if(arr==[]){
      return [];
    }
    else{
      let arr2 = [];
      let k=0;
      for(let i=0;i<arr.length;i++){
          if(arr[i]=='--discard-prev'){
            if(i!=0){
              if(k-1==arr2.length-1){arr2.pop();}
              k++;
          }
              else{
                  k++;
              } 
          }
          if(arr[i]=='--discard-next'){
              k=k+2;
          }
          if(arr[i]=='--double-prev'){
              if(i!=0){
                if(k-1 == arr2.length-1){arr2.push(arr2[arr2.length-1]);}
                  k++;
              }
              else{
                  k++;
              }
          }
          if(arr[i]=='--double-next'){
            if(arr[i+1]){
              arr2.push(arr[i+1]);}
                
                k++;
        }
          if(arr[i]!='--double-next' && arr[i]!='--double-prev' && arr[i]!='--discard-next' && arr[i]!='--discard-prev'){
              if(k==i){
                  arr2.push(arr[i]);
                  k++;}
          }
      }
      return arr2;
    }
  }
}

module.exports = {
  transform
};

/*--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array.*/