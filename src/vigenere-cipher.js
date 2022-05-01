const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
    
    encrypt() {
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if(arguments[0]==undefined || arguments[1]==undefined){
        throw new Error('Incorrect arguments!');
      }
      let str = arguments[0].toLowerCase().split('');
      let key = arguments[1].toLowerCase().split('');
      let newStr=[];
      let alp = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let ind = 0;
      let add = 0;
      let keyInd=0;

      if(key.length<str.length){
        add=str.length-key.length;
        for(let i=0;i<add;i++){
          key.push(key[i]);
        }
      }
      for(let j=0;j<str.length;j++){
        ind = (alp.indexOf(str[j])+alp.indexOf(key[keyInd]))%alp.length;
        if(alp.indexOf(str[j])==-1){
            newStr.push(str[j]);
        }
        else{
            newStr.push(alp[ind]);
            keyInd++;
        }
      }
      if(this.direct == false){
        return newStr.reverse().join('').toUpperCase();
      }
      else{
        return newStr.join('').toUpperCase();
      }
      
    }
    decrypt() {
      if(arguments[0]==undefined || arguments[1]==undefined){
        throw new Error('Incorrect arguments!');
      }
      //throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      let str = arguments[0].toLowerCase().split('');
      let key = arguments[1].toLowerCase().split('');
  
      let newStr=[];
      let alp = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let ind = 0;
      let add = 0;
      let spl = 0;
      let keyInd=0;

      if(key.length<str.length){
        add=str.length-key.length;
        for(let i=0;i<add;i++){
          key.push(key[i]);
        }
      }

      for(let j=0;j<str.length;j++){
        if(alp.indexOf(str[j])>alp.indexOf(key[keyInd])){
          ind = Math.abs(alp.indexOf(str[j]))-alp.indexOf(key[keyInd]);
        }
        else{
          ind = Math.abs((alp.length+alp.indexOf(str[j]))-alp.indexOf(key[keyInd]));
        }
        if(alp.indexOf(str[j])==-1){
            newStr.push(str[j]);
        }
        else{
          if(ind==26){ind=0}
            newStr.push(alp[ind]);
            keyInd++;
        }
      }
  if(this.direct == false){
    return newStr.reverse().join('').toUpperCase();
  }
  else{
    return newStr.join('').toUpperCase();
  }
    }
  }


module.exports = {
  VigenereCipheringMachine
};
