// "1. Write a function called `largestNumber` that takes 3 numbers and returns the largest number. Test with the following:
// console.log(largestNumber(3, 8, 9))
// console.log(largestNumber(25,-10, 10))

function largestNumber(num1, num2, num3) {
if (num1>=num2 && num1>num3){
    return num1 
} else if (num2>=num1 && num2>num3){
    return num2
} else if (num3>=num1 && num3>num2){
    return num3
}
}
console.log(largestNumber(3, 8, 9));
console.log (largestNumber(25,-10,10));
