function sortByProperty(objects, propertyName) {
    return objects.slice().sort((a, b) => {
      // Compare the property values
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0; // if the values are equal
    });
  }
  
  const people = [
    { name: 'Charlie', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 35 },
    { name: 'David', age: 28 },
  ];
  
  const sortedByAge = sortByProperty(people, 'name');
  console.log(sortedByAge);
  