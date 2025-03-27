function extractUniqueCharacters(strings) {
    const uniqueCharsSet = new Set();
  
    // Loop through each string in the array
    strings.forEach(str => {
      // Loop through each character in the string
      for (const char of str) {
        uniqueCharsSet.add(char);
      }
    });
  
    // Convert the Set back to an array and return it
    return Array.from(uniqueCharsSet);
  }
  
  const words = ['apple', 'banana', 'cherry'];
  const uniqueChars = extractUniqueCharacters(words);
  console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
  