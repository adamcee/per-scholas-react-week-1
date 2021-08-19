/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159

 x^2 means "x squared": example: 3^2 = 3*3 = 9

 area = pi * radius^2

 diameter = radius*2

 circumfrence = pi * diameter

 Complete the following functions and add function param and return type annotations
 */

const PI = 3.14159;

function getArea(radius: number): number {
  return PI * radius * radius;
}

console.log("circle area for 5 is ", getArea(5));

function getDiameter(radius: number): number {
  return radius * 2;
}

console.log("circle diameter for 5 is ", getDiameter(5));

function getCircumfrence(radius: number): number {
  return PI * getDiameter(radius);
}

console.log("circle circumfrence for 5 is ", getCircumfrence(5));
