function getObjectValuesByKey(arr, key) {
    return arr.map(obj => obj[key]);
  }
  const myArr = [
    { name: 'Talha ', age: 19 },
    { name: ' Ali', age: 22 },
    { name: 'Abdul Hadi', age: 17 }
  ];
  
  const values = getObjectValuesByKey(myArr, 'name');
  console.log(values); // Output: ["TAlha", "Ali", "Abdul Hadi"]
    