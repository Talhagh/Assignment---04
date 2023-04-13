function getProductOfNumbers(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1);
  }
  const myArr = [2, 3, 4, 5,6,7,,8,9];
  const product = getProductOfNumbers(myArr);
  console.log(product); // Output: 120
    