function getUniqueStrings(arr) {
    return [...new Set(arr)];
  }
  const myArr = ['Haleem', 'Kheer', 'Kheer', 'Haleem', 'Biryani'];
const uniqueStrings = getUniqueStrings(myArr);
console.log(uniqueStrings); // Output: ["Haleem", "Kheer", "Biryani"]