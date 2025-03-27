function sortByMultipleCriteria(people) {
return people.sort((a,b)=>{
    if (a.age !==b.age){
        return a.age-b.age 
    } else {
        return a.name < b.name? -1:(a.name>b.name?1:0)
    }
})
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

//had to sort by age first with a.age and b.age. 
//a and b sorts age and names. 
//// sort ages: Younger people should come first.
// sort names: If two people have the same age, we want to sort them alphabetically by name (A before B, etc.).
// 1. check if ages are the same 
// 2. if ages are not the same, then return as sorted a to b, meaning low to high (a - b)
// 3. else if the ages are the same, sort names alphabetically
// 4. if a names comes before b names alphabetically (first name before the second in the object order) then return -1 for a to come before b names 
// else if a names comes after b names alphabetically return 1 to put b first. 
// if not, the names are the same so return 0