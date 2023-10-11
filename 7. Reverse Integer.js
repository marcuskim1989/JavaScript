/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    // convert to string
    // if first char -
      //remove - sign
      //reverse string using split.reverse.join
      // insert - sign
      // convert to number
      // if number is less than -2^31 
          //return 0
    // else if  first char not -
      // reverse string using split.reverse.join
      //convert to number
      // if number is greater than 2^31 - 1 
          // return 0
  
    // return reversed number
  
      let stringInt = x.toString();
  
      let reversed;
  
      if (stringInt[0] == "-") {
  
          let sliced = stringInt.slice(1, stringInt.length);
  
          reversed = sliced.split('').reverse().join('');
          reversed = "-" + reversed
  
          reversed = Number(reversed);
  
          if (reversed < (Math.pow(-2, 31))) {
              return 0;
          }
  
          
      } else {
          reversed = stringInt.split('').reverse().join('');
  
          //console.log(reversed);
  
          reversed = Number(reversed);
  
          console.log(reversed);
  
          if (reversed > (Math.pow(2, 31) - 1)) {
              return 0;
          }
      }
  
      return reversed;
  };