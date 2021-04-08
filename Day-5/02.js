// object array

let users = [
  {
    name: "sai",
    age: 20,
  },
  {
    name: "nitish",
    age: 10,
  },
  {
    name: "syed",
    age: 15,
  },
  {
    name: "sadguna",
    age: 18,
  },
];

// Get the name is users, whose age is greater than 15

// First Approach
// let result = [];
// users.forEach(function (e) {
//   if (e.age <= 15) {
//     result.push(e);
//   }
// });

// console.log(result);

// Second Approach

// let result = users.filter(function (e) {
//   if (e.age > 15) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(result);

// let a = 12;
// let b = 10;

// let x;

// // Logic
// // conditoin ? truthy : falsy
// x = a > b ? a : b;

// console.log(x); // 12
