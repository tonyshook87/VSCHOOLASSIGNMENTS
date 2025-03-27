function filterAnagrams(arr, target) {
  const sortedtarget= target.split("").sort().join()
  const result= []
  for (const word of arr){
    const sortedword= word.split("").sort().join()
    if (sortedtarget===sortedword){
        result.push(word)
  }
 
  }
  return result
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']

//splitting the target word into separate character strings and sorting it in alphabetical order. example: target.split("") 
//empty string is the parameter.
//each letter will be in a string and will be put in an array. 
//split puts each letter in an array. 
//sort puts it in alphabetical order 
// join makes it one word again. 
//result is the empty array that holds the anagrams. 
//for loop iterate each word in the array.
//sorted target will hold the target word with the letters in alphabetical word. 
//sorted word holds array with words in alphabetical order. 
//when in alphabetical order the words are the sorted word and target word can be compared to see if they match. example: if (sortedtarget===sortedword)


//splits it into characters, sorts the characters, and then joins them back into a string.
// - The target word is sorted and stored in sortedTarget.
// - The filterAnagrams function iterates through each word in the input array arr, sorts the characters of each word, and compares the sorted word to sortedTarget.
// - If a word in the array is an anagram of the target, it is added to the result array.
// - Finally, the result array, containing all anagrams of the target word, is returned.

// console.log(words.sort()) would put words in alphabetical order. 
//split is a string method not an array method. 




// if I add this code too it will spell out first word. 
//example:
// const targetIndex = 0; // Index of 'listen' in the array
// const targetWord = words[0];
// const charactersArray = targetWord.split('');

// console.log(charactersArray); // Output: ['l', 'i', 's', 't', 'e', 'n']