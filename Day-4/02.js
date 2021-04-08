// let a = [2, 5, 3, 7];
// let result = [];

// a.forEach(function (n) {
//   let square = n * n;
//   result.push(square);
// });

// console.log(a);
// console.log(result);

// let fruits = ["apple", "orange", "banana"];

// let result = fruits.map(function (fruitname) {
//   let t = "Piece of " + fruitname;
//   return t;
// });

// console.log(fruits);
// console.log(result);

// let xyz = [1, 3, 4, 2, 5];

// let result = xyz.map(function (n) {
//   let cube = n * n * n;
//   return cube;
// });

// console.log(xyz);
// console.log(result);

// let numbers = [2, 4, 5, 7, 6, 9, 11, 123, 88, 16, 56];

// let result = numbers.filter(function (n) {
//   let rem = n % 2;
//   if (rem == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(numbers);
// console.log(result);

// let numbers = [2, 4, 5, 7, 6, 9, 11, 123, 88, 16, 56, 11];

// let i = numbers.indexOf(11);
// console.log(i);

// numbers.reverse();
// console.log(numbers);

// let numbers = [12, 41, 15, 7, 16];

// numbers.sort();

// console.log(numbers);

// let animals = ["Rat", "Cow", "Dog", "Cat"];

// animals.sort();

// console.log(animals);

let numbers = [12, 41, 15, 7, 16]; // 4 + 3 + 2
let count = 1;
numbers.sort(function (a, b) {
  console.log({ a, b });
  if (a > b) {
    // first number is greater than second number
    return 1;
  } else {
    return -1;
  }
});

console.log(numbers);
// less than 0 : unchnaged
// greater than 0 : sort b before a.

// let names = ["caT", "DoG", "rAT"];

// let result = names.map(function (n) {
//   let k = n.toUpperCase();
//   return k;
// });

// console.log(names);
// console.log(result);
