const numbers = [10, 15, 25, 30, 45];
const numberToFind = 10;

const hasNumber = numbers.includes(numberToFind);

if (hasNumber) {
  console.log(`Число ${numberToFind} знайдене`);
} else {
  console.log(`Число ${numberToFind} не знайдене`);
}
