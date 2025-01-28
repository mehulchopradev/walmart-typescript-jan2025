// import { area, perimeter, stats } from './lib/rectangle';

import statsFunc from './lib/rectangle';

export {};

const length: number = 6;
const breadth: number = 4;

// console.log(perimeter(length, breadth));
// console.log(area(length, breadth));

/* const s = statsFunc(length, breadth);
const perimeter = s[0];
const area = s[1];
console.log(`Perimeter: ${perimeter}\nArea: ${area}`); */

// destructuring
const [perimeter, area] = statsFunc({length, breadth});
console.log(`Perimeter: ${perimeter}\nArea: ${area}`); 

/* console.log(statsFunc(4.5, 4.1));
console.log(statsFunc(7, 6)); */
console.log(statsFunc({ length: 4.5, breadth: 4.1 }));
console.log(statsFunc({ breadth: 6, length: 7 }));


const marks: number[] = [90, 80, 70, 85, 95];
const [m1, m2, m3, ...rest] = marks; // array destructuring
console.log(m1, m2, m3);
console.log(rest); // rest of the elements exept m1, m2, m3

type Account = {
  name: string,
  accNumber: number,
  balance: number;
}

const account: Account = {
  name: 'John Doe',
  accNumber: 101,
  balance: 10000
};
/* const name = account.name;
const balance = account.balance; */
const { name: accName, balance } = account; // the property name should match the variable name or we can use alias
console.log(accName, balance);