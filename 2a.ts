const rawInput = await Bun.file('2-input.txt').text();
const ALLOWED_RED = 12;
const ALLOWED_GREEN = 13;
const ALLOWED_BLUE = 14;

const splittedLine = rawInput.split("\n");

let result = 0;

for (let i = 0; i < splittedLine.length; i++) {
  const input = splittedLine[i];
  const splittedInput = input.split(": ");

  const game = Number(splittedInput[0].split(" ")[1]);

  let isValid = true;
  const splittedTaken = splittedInput[1].split("; ");
  for (let j = 0; j < splittedTaken.length; j++) {
    const take = splittedTaken[j];
    const splittedTake = take.split(", ");

    for (let k = 0; k < splittedTake.length; k++) {
      const part = splittedTake[k];
      const splittedPart = part.split(" ");
      const count = Number(splittedPart[0]);
      const color = splittedPart[1];
      switch (color) {
        case "red": {
          if (count > ALLOWED_RED) {
            isValid = false;
          }
          break;
        }
        case "green": {
          if (count > ALLOWED_GREEN) {
            isValid = false;
          }
          break;
        }
        case "blue": {
          if (count > ALLOWED_BLUE) {
            isValid = false;
          }
          break;
        }
      }
    }

    if (!isValid) {
      break;
    }
  }

  if (isValid) {
    result += game;
  }
}

console.log(result);
