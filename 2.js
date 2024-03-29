function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  const str = "Hello, World!";
  const numVowels = countVowels(str);
  console.log(numVowels); // Output: 3 (e, o, o)
    