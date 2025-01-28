export {};

// Logical operators - AND, OR, NOT

const age: number = 17;
const gender: string = 'f';
// const canParty: boolean = (age > 18) || (gender == 'f');
const canParty = (age > 18) && (gender == 'f');
console.log(canParty);

const cannotParty: boolean = !canParty;
console.log(cannotParty);

// const hasAge: boolean = age != 0;
const hasAge: boolean = !!age;
console.log(hasAge);

console.log(!gender);

/* if (gender == 'm') {
  console.log('Welcome Sir');
} else {
  console.log('Welcome Mam');
} */

gender == 'm' && console.log('Welcome Sir');
gender == 'f' && console.log('Welcome Mam');

const username: string | null = 'mehul25';
/* if (username != null) {
  console.log('Welcome ' + username);
} else {
  console.log('Welcome Guest');
} */
// ternanry operator

console.log('Welcome ' + (username != null ? username : 'Guest'));
console.log('Welcome ' + (username ? username : 'Guest'));

// null coalescing operator
console.log('Welcome ' + (username ?? 'Guest')); // only if the left side is null or undefined, the right side will be considered


const a = 10;
const b = 10;
const c = '10';
console.log(a === b);
// console.log(a == c); // error in typescript

// console.log(a == c); // in javascript this would have given a value true
// console.log(a === c); // in javascript this would have given a value false