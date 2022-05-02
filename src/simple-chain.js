const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof value === 'undefined'){
      this.chain.push('( )');
    } else if(value===null){
      this.chain.push('( null )');
    }
    else{
      this.chain.push('( '+ value+ ' )');
    }
    return this;
    
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof position !== "number" || position>this.chain.length-1 || position<=0 ){
      this.chain=[];
      throw new Error ("You can't remove incorrect link!");
    }else{
      this.chain.splice(position-1,1);
      return this;
    }
    
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chain.join('~~');
    //result = result.substring(result.length-3,result.length-1);
    this.chain=[];
    return result;
  }
};

module.exports = {
  chainMaker
};
