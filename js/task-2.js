const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordToCheck = "apple";
let repeatCounter = 0;

for (const word of words) {
  if (word === wordToCheck) {
    repeatCounter++;
  }
}

if (repeatCounter === 0) {
  console.log(`Слово "${wordToCheck}" не знайдено`);
} else {
  console.log(`Слово "${wordToCheck}" повторюється ${repeatCounter} разів`);
}
