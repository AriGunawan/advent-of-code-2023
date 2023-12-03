const rawInput = await Bun.file('1-input.txt').text();
const splittedInput = rawInput.split('\n');
const numbers: Array<number> = [];
for (let i = 0; i < splittedInput.length; i++) {
  const input = splittedInput[i];
  let firstNumber: string | undefined;
  let secondNumber: string | undefined;
  for (let j = 0; j < input.length; j++) {
    const char = input[j];
    const number = Number(char);
    if (!Number.isNaN(number)) {
      if (firstNumber === undefined) {
        firstNumber = char;
        secondNumber = char;
      }
      else {
        secondNumber = char;
      }
    }
  }

  if (firstNumber && secondNumber) {
    numbers.push(Number(firstNumber + secondNumber));
  } else {
    numbers.push(0);
  }
}

const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);