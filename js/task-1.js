const numbers = [12, 5, 8, 130, 44, 12, 1, 0.1, 233, 24, 234, -75, 9, 0.5, 11, 75];
let minNumber = Infinity;
for (const number of numbers) {
  console.log(number);
  if (number < minNumber) {
    minNumber = number;
    console.log(minNumber);
  }
}
console.log(`Найменше число: ${minNumber}`);
