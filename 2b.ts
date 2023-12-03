const rawInput = await Bun.file('2-input.txt').text();

const splittedLine = rawInput.split("\n");

let result = 0;

for (let i = 0; i < splittedLine.length; i++) {
  const input = splittedLine[i];
  const splittedInput = input.split(": ");

  const game = Number(splittedInput[0].split(" ")[1]);

  let maxRed = 0;
  let maxGreen = 0;
  let maxBlue = 0;
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
        case "red": 
          maxRed = Math.max(count, maxRed);
          break;
        case "green":
          maxGreen = Math.max(count, maxGreen);
          break;
        case "blue":
          maxBlue = Math.max(count, maxBlue);
          break;
      }
    }
  }

  result += maxRed * maxGreen * maxBlue;
}

console.log(result);
