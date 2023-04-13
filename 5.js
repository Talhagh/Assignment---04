function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  const myObj = {
    name: 'Talha',
    age: 19,
    city: 'Karachi'
  };
  
  const keys = getObjectKeys(myObj);
  console.log(keys); // Output: ["name", "age", "city"]
    