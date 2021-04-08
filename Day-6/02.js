const sample = require("./sample.json");

let users = sample.data;

users.forEach(function (e) {
  console.log(e.balance);
});
