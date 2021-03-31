// Array and Object

// let arr = [1, 3, "String", 3.4, false];
// let len = arr.length;
// console.log(len);

// let users = ["Syed", "Sadguna", "Gopi", "Shirisha"];

// for (let i = 0; i < users.length; i++) {
//   let username = users[i];
//   console.log(username);
// }

// let users = ["Syed", "Sadguna", "Gopi", "Shirisha"];

// users.forEach(function (username) {
//   console.log(username);
// });

// let numbers = [1, 4, 6, 8, 9, 11];

// numbers.forEach(function (n) {
//   let cube = n * n * n;
//   console.log(cube);
// });

// let users = [];

// users.push("Syed");
// users.push("Sadguna");
// users.pop();
// users.push("Gopi");
// users.pop();
// users.push("Shirisha");

// console.log(users);

// let a = 10;
// let b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20;

// console.log(a); // 20
// console.log(b); // 10

// let a = [10, 20];
// let b = a;

// a.push(30);

// console.log(a); // [10, 20, 30]
// console.log(b); // [10, 20, 30]

// let a = [10, 20];
// let b = a;

// console.log(a); // [10, 20]
// console.log(b); // [10, 20]

// a.pop();

// console.log(a); // [10]
// console.log(b); // [10]

// let a = [10, 20];
// let b = a;
// a.push(99);
// let c = Array.from(a);

// a.push(30);

// console.log(a); // [10,20,99,30]
// console.log(b); // [10,20,99,30]
// console.log(c); // [10,20,99]

// let a = [10, 20];
// let b = a;

// b.push(99);

// console.log(a); // 10,20, 99
// console.log(b); // 10, 20, 99

let a = [2, 5, 3, 7];
let result = [];

a.forEach(function (n) {
  let square = n * n;
  result.push(square);
});

console.log(a);
console.log(result);
