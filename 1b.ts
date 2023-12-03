const rawInput = await Bun.file('1-input.txt').text();

function getNumberFromNumberString(numberString: string) {
  switch (numberString) {
    case '1':
    case 'one': {
      return '1';
    }
    case '2':
    case 'two': {
      return '2';
    }
    case '3':
    case 'three': {
      return '3';
    }
    case '4':
    case 'four': {
      return '4';
    }
    case '5':
    case 'five': {
      return '5';
    }
    case '6':
    case 'six': {
      return '6';
    }
    case '7':
    case 'seven': {
      return '7';
    }
    case '8':
    case 'eight': {
      return '8';
    }
    case '9':
    case 'nine': {
      return '9';
    }
  }
}

const numberToFind = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const splittedInput = rawInput.split('\n');
const numbers: Array<number> = [];
for (let i = 0; i < splittedInput.length; i++) {
  const input = splittedInput[i];
  let firstNumber: string | undefined;
  let secondNumber: string | undefined;
  let firstNumberIndex: number | undefined;
  let secondNumberIndex: number | undefined;
  for (let j = 0; j < numberToFind.length; j++) {
    const numString = numberToFind[j];
    const indexOfNum = input.indexOf(numString);
    const lastIndexOfNum = input.lastIndexOf(numString);
    if (indexOfNum !== -1) {
      if (firstNumberIndex === undefined || firstNumberIndex > indexOfNum) {
        firstNumber = getNumberFromNumberString(numString);
        firstNumberIndex = indexOfNum;
      }
      if (secondNumberIndex === undefined || secondNumberIndex < lastIndexOfNum) {
        secondNumber = getNumberFromNumberString(numString);
        secondNumberIndex = lastIndexOfNum;
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