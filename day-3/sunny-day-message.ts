const SUNNY_DAY_MESSAGE: string = "It is sunny out today!";
let isSunny: boolean = true;
let numberSunnyDays: number = 1;

const getIfSunnyMessage = (isSunny) => {
  if (!isSunny) {
    return "not sunny";
  }

  return "sunny";
};

/**
 * @param isSunny
 *        If *today* it is sunny or not.
 * @param numberSunnyDays
 *        How many days in a row it has been sunny for.
 * @returns
 *        Returns a string saying hi, if it's sunny, and how many days in a row it has been sunny for.
 *        Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */
function sunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {
  const sunnyMessage = getIfSunnyMessage(isSunny);
  return `Hi! It is ${sunnyMessage} today. It has been sunny for ${numberSunnyDays} days in a row`;
}

// TO DO:
// 1. Complete sunnyDayMessage so it works. Then pass it data and call the function!
// 2. Use console.log to print the string sunnyDayMessage returns
console.log(sunnyDayMessage(false, 9));
