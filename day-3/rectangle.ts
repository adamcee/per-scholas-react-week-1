/***
 * Objective

In this challenge, we practice creating objects. Check out the attached tutorial for more details.

Task

Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

length: This value is equal to .
width: This value is equal to .
perimeter: This value is equal to 
area: This value is equal to 


 */

/**
 * Get information about a rectangle
 * @param length
 * @param width
 *
 * @return {{ length: number, width: number, perimeter: number, area: number}}
 */
function rectangle(length: number, width: number) {
  // First lets figure out the area
  const area = length * width;

  // Next lets figure out perimeter
  const perimeter = length * 2 + width * 2;

  const info = { length, width, perimeter, area };

  return info;
}

const rectangleInfo = rectangle(2, 4);

console.log("length is 2", rectangleInfo.length);
console.log("width is 4", rectangleInfo.width);
console.log("perimeter 12", rectangleInfo.perimeter);
console.log("area is 8", rectangleInfo.area);
