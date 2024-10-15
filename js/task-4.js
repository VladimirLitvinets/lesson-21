const numbers = [12, 5, 8, 130, 44, 12, 1, 0.1, 10, 233, 24, 234, -75, 9, 0.5, 11, 75];
let removedNumbers = [];
let remainingNumbers = [];
let removedSum = 0;
let remainingSum = 0;

for (const number of numbers) {
  if (number < 10) {
    removedNumbers.push(number);
    removedSum += number;
  } else {
    remainingNumbers.push(number);
    remainingSum += number;
  }
}

console.log("Числа які було видалено:");
for (const deletedNumbers of removedNumbers) {
  console.log(`- ${deletedNumbers}`);
}
console.log(`Кількість видалених чисел: ${removedNumbers.length}`);
console.log(`Сума видалених чисел: ${removedSum}`);
console.log(`Сума чисел які залишились: ${remainingSum}`);
