const marks: number[] = [6, 10, 4, 3, 2];

// copy of this array
const marksCopy: number[] = [...marks]; // shallow copy
console.log(marks);
console.log(marksCopy);
console.log(marks == marksCopy); // false

type Book = {
  title: string,
  price: number,
  pages: number,
};
const books: Book[] = [
  { title: 'book1', price: 10, pages: 100 },
  { title: 'book2', price: 20, pages: 200 },
  { title: 'book3', price: 30, pages: 300 },
];
const booksCopy: Book[] = [...books]; // shallow copy
console.log(books);
console.log(booksCopy);
console.log(books == booksCopy); // false

books[0].price = 30;
console.log(books);
console.log(booksCopy);

// deep copy
const deepBooksCopy = JSON.parse(JSON.stringify(books));
console.log(deepBooksCopy);
console.log(books == deepBooksCopy); // false
books[0].price = 40;
console.log(books);
console.log(deepBooksCopy);

const b1: Book = { title: 'book1', price: 10, pages: 100 };
const b2: Book = {...b1, pages: 120}; // shallow copy
// const b2: Book = {pages: 120, ...b1}; // wrong order
console.log(b1);
console.log(b2);
console.log(b1 == b2); // false
b1.price = 20;
console.log(b1);
console.log(b2);


const a1: number[] = [1, 2, 3];
const a2: number[] = [5, 6];
const a3: number[] = [...a1, ...a2];
console.log(a3);