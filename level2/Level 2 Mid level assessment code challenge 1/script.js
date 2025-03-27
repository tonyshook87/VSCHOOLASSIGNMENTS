// const numbers = [8, 3, 45, 28, 17];
// const sortedNumber= sortNumbers (numbers);
// console.log (sortedNumber)
// function sortNumbers (numbers){
//  return  numbers.sort (function (a,b){return a-b}) 
   
// }

function convertToUppercase(strings) {
   return strings.map (word =>{
      return word.toUpperCase()
   })
   }
   
   // Example usage:
   const strings = ['hello', 'world', 'javascript'];
   const uppercaseStrings = convertToUppercase(strings);
   console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']