// # Code Challenges
// # Challenge 1: Sort Array with Preserved Index for -1 Values
// # You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.
// # Write a function solution(a) that takes in an array a and returns a new array with the following conditions:
// # All non -1 values in the array should be sorted in ascending order. The -1 values should retain their original index positions in the sorted array.




    // # // filter out numbers !== -1
    // # // sort numbers a - b
    // # //  numbers not equal !==-1 will be left alone and positive numbers will be set in ascending order ex: .sort (a,b)=> a-b. 
    // => equals greater than symbol
    // num => num ===-1 greater than or equal to -1
    // i = 0 means that the loop is starting by the first time it is ran.
    // i++ is i= i+1. 

    function solution (array){
        const positivenumbers= array.filter((num)=> num !== -1).sort((a,b)=> a-b)
        let i=0
        return array.map (num => num===-1?num: positivenumbers[i++])

    }
    

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// # console.log(solution([5, 3, 1]))
// # console.log(solution([-1, -1, -1, -1]))
// # console.log(solution([100, -1, 50, -1, 75]))

