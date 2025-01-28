// generic functions
function surpriseMe<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const movies = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'The Lord of the Rings: The Return of the King',
  'Pulp Fiction',
  'Schindler\'s List'
];

console.log('****** surpriseMe with a movie ******');
const movie: string = surpriseMe<string>(movies);
console.log(movie);

const rollNos: number[] = [1, 2, 3, 4, 5, 6];
console.log('****** who goes next on the stage ******');
const roll: number = surpriseMe<number>(rollNos);
console.log(roll);