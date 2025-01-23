export {};

let fullName = 'mehul chopra'; // implicit data typing

let message: string = 'Good night to all'; // explicit data typing
// message = 10; // error

const age: number = 39;

// union types
let isLightsOn: boolean | number = true;
isLightsOn = 1;
isLightsOn = 0;
isLightsOn = false;

console.log(fullName);
console.log(message);
console.log(age);
console.log(isLightsOn);

// age = 23; // error as age is a constant


// custom types
/* let gender: string = 'm';
gender = 'f';
gender = 'x'; */ // will not be an error

type Gender = 'm' | 'f';
let gender: Gender = 'm';
gender = 'f';
// gender = 'x'; // error