// JSON : JavaScript Object Notation

/*
  {
    "_id": "606ec4154d1b7f7c77314ffb",
    "eyeColor": "green",
    "name": "Olga Roth",
    "balance": 200.95,
    "isActive": true
  }
*/

// let user = {
//   name: "nitish",
//   age: 10,
//   isMarried: false,
//   salary: -10.5,
//   hobby: ["teaching", "reading"],
//   degree: {
//     matric: 70.5,
//     inter: 80.5,
//     graduation: 90.5,
//   },
// };
// value can
// 1 String
// 2 Number
// 3 Bool
// 4 Array
// 5 Object

let user = {
  name: "nitish",
  age: 10,
  isMarried: false,
  salary: -10.5,
  hobby: ["teaching", "reading"],
  degree: {
    matric: { percentage: 70.5, isPass: true },
    inter: { percentage: 30.5, isPass: false },
    graduation: { percentage: 90.5, isPass: true },
    post_graduation: { percentage: 20.5, isPass: false },
  },
};

// how to print key of object (user)
// let keys = Object.keys(user);
// console.log(keys);

// let graduation_percentage = user.degree.graduation;
// console.log(graduation_percentage);

// // matric, inter, graduation
// let all_degree = Object.keys(user.degree);
// console.log(all_degree);

// matric 70.5
// inter 30.5
// graduation 90.5
// post_graduation 20.5

let all_degree = Object.keys(user.degree);
// console.log(all_degree);
// x = { percentage: 70.5, isPass: true }

all_degree.forEach(function (e) {
  let x = user["degree"][e];
  console.log(e, x.percentage);
});
