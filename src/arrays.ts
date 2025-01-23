export {};

// const marks = [5, 6, 10, 0, 3, '8'];

const marks: number[] = [5, 6, 10, 0, 3, 8]; // arrays are objects

const first = marks[0];
// marks[1] = '7'; // error
marks[1] = 7;

// marks.push('9') // error
marks.push(10, 7, 4);

console.log(marks);

// variable number of arguments
// spread operator (...)
function nextGenAdd(...elements: number[]) {
  let sum = 0;
  for (let i = 0; i < elements.length; i++) {
    sum += elements[i];
  }
  return sum;
}

console.log(nextGenAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(nextGenAdd(5, 3, 7));
console.log(nextGenAdd());