const json = require("./complex.json");

// 1. get the name of all the users whose eyeColor is brown

let users = json.data;

let brownEyeUsers = users.filter(function (user) {
  if (user.eyeColor == "brown") {
    return true;
  } else {
    return false;
  }
});

let brownEyeUsername = brownEyeUsers.map(function (user) {
  return user.name;
});

console.log(brownEyeUsername);
