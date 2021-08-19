/**
 * Draws a length 1 width 1 pizza slice
 * @returns {string}
 * 
 * Length 1 width 1:
 
  -
 |_|

 */
function drawSmallPizzaSlice() {
  /**
   * A small slice is 2 rows of characters
   * row 1: " _ "
   * row 2: "|_|"
   */
  const ROW1 = " _ ";
  const ROW2 = "|_|";
  const NEWLINE = "\n";

  return [ROW1, ROW2].join(NEWLINE); // console.log(ROW1);
  // console.log(ROW2);
  //return ROW1 + NEWLINE + ROW2;
}

/**
 * Draw a length 1 width 2 pizza slice 
 * @returns {string}
 * 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
 */
function drawMediumPizzaSlice() {}

/**
 * 
 * Draws a length 2 width 2 pizza slice 
 * @returns {string}
 * 
 * Length 2 width 2:
  
   --
  | .|
  |__|

 */
function drawLargePizzaSlice() {}

/**
 * @param {string} sliceSize
 *                 size of slice - "small", "medium", "large"
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 * 
 * Small - Length 1 width 1:
   -
  |_|

 * 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 

 * 
 * Large - Length 2 width 2:
 * 
  
   --
  | .|
  |__|

 */
function drawAnyPizzaSlice() {}

const drawing = drawSmallPizzaSlice();
console.log(drawing);
// console.log(drawMediumPizzaSlice());
// console.log(drawLargePizzaSlice());
// console.log(drawAnyPizzaSlice());
