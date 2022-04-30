const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*repeatTimes sets the number of repetitions of the str;
separator is a string separating repetitions of the str;
addition is an additional string that will be added to each repetition of the str;
additionRepeatTimes sets the number of repetitions of the addition;
additionSeparator is a string separating repetitions of the addition.*/

let str2=[];
if(str===null){
  str='null';
}
if(options.addition===null){
options.addition='null';
}
if(options.separator== undefined){
  options.separator='+';
}
if(options.additionSeparator== undefined){
  options.additionSeparator='|';
}
if(options.additionRepeatTimes== undefined){
  options.additionRepeatTimes=1;
}
if(options.repeatTimes== undefined){
  options.repeatTimes=1;
}
for(let i=0;i<options.repeatTimes;i++){
  str2.push(str);
  for(let j=0;j<options.additionRepeatTimes;j++){
    str2.push(options.addition);
    if(j!=options.additionRepeatTimes-1){str2.push(options.additionSeparator);}
    
  }
  if(i!=options.repeatTimes-1){
      str2.push(options.separator);
  
}}
return str2.join('');
}

module.exports = {
  repeater
};
