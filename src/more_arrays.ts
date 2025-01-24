export {};

const marks: number[] = [5, 6, 10, 4, 3, 1];

// Create a new array with the even marks greater than or equal to 4 from the marks array
// filtering
/* const l1 = [];
for(let i = 0; i < marks.length; i++) {
  if(marks[i] % 2 == 0 && marks[i] >= 4) {
    l1.push(marks[i]);
  }
}
console.log(l1); */

/* function f1(element: number) {
  return element % 2 == 0 && element >= 4
}
const l1 = marks.filter(f1);
console.log(l1); */

/* const l1 = marks.filter((element: number) => {
  return element % 2 == 0 && element >= 4;
}); */
const l1 = marks.filter((element: number) => element % 2 == 0 && element >= 4);
console.log(l1);

// create a new array with 1 mark deducted from each mark in the marks array
// mapping
const l2 = marks.map((element: number) => element - 1);
console.log(l2);


// create a new array of all odd marks from the marks array, squared up in the new array
// 1. filtering
// 2. mapping
const l3: number[] = marks
  .filter((element: number) => element % 2 != 0)
  .map((element: number) => element ** 2);
console.log(l3);
