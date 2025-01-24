export {};

function perimeterRectangle(length: number = 3, breadth: number = 2): number {
  return 2 * (length + breadth);
}

// fat arrow function syntax
const areaRectangle = (length: number, breadth: number): number => {
  return length * breadth;
};

const length: number = 5;
const breadth: number = 3;
const numbers: [number, number] = [length, breadth];

const p1 = perimeterRectangle(length, breadth);
// perimeterRectangle('5', '3'); // error
console.log(`Perimeter of rectangle: ${p1}`);

console.log(perimeterRectangle(6)); // breadth default value of 2
numbers.push(10);

console.log(areaRectangle(length, breadth));

const name = 'John Doe';
const gender = 'm';
const roll = 10;
const marks = 90;

// const display = 'Name: ' + name + '\nGender: ' + gender + '\nRoll: ' + roll + '\nMarks: ' + marks;

// string interpolation
const display = `Name: ${name}\nGender: ${gender}\nRoll: ${roll}\nMarks: ${marks}`;

console.log(display);

