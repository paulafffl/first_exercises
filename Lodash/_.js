const _ = {
  
    clamp(num, lowerB, upperB) {
      const lowerClampedValue = Math.max(num, lowerB);
      const clampedValue = Math.min(lowerClampedValue, upperB);
      return clampedValue;
      // It could be solved in a single line Math.max(Math.min(num, upperB), lowerB)
    },
    
    inRange(num,start,end) {
      if (end === undefined) {
        end = start; 
        start = 0;
      }
      if (start > end) {
        var temp = end;
        end = start;
        start = temp;
      }
      return start <= num && num < end;
    },
    
    words(string) {
      return string.split(" ");
    },
    
    pad(string,length) {
      console.log(string)
      if (string.length >= length) {
        return string
      }
      let pad = Math.floor(length - string.length) / 2;
      let rightPad = pad;
      if ((length - string.length) % 2 != 0) {
        rightPad += 1;
      }
      const paddedString = " ".repeat(pad) + string + " ".repeat(rightPad);
      return paddedString;
    },
    
    has(object,key){
      const hasValue = object[key];
      return (hasValue != undefined);
    },
    
    invert(object){
      let invertedObject = {};
      for (let key in object){
        const originalValue = object[key];
        invertedObject = {originalValue : key}
      } 
      return invertedObject;    
      
    },
    
    findKey(object,predicate){
      for (let key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue){
          return key;
        };
      };
      return undefined;
    },
    
    drop(array,drop){
      if (drop === undefined){
        drop = 1;
      }
      return newArray = array.slice(drop);
    },
    
    dropWhile(array,predicate){
      const cb = (element,index) => {
        return !predicate(element,index,array);
      }
      let dropNumber = array.findIndex(cb);
      return droppedArray = this.drop(array,dropNumber);
      },
    
      chunk(array,size){
        if (size === undefined){
          size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size){
          let arrayChunk = array.slice(i,i+size);
          arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
        }
  };
  


// Do not write or modify code below this line.
module.exports = _;