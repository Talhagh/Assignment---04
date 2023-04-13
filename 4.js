function calculateAverage(numbers) {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    const average = total / numbers.length;
    return average;
  }
  const numbers = [2, 4, 6, 8, 10];
  const average = calculateAverage(numbers);
  console.log(average); // Output: 6
    