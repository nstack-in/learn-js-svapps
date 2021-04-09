let users = [
  {
    name: "abc",
    gender: "male",
    id: 1,
  },
  {
    name: "mno",
    gender: "female",
    id: 2,
  },
  {
    name: "xyz",
    gender: "male",
    id: 3,
  },
];
// get the `name and id` of all the user whose gender is male

let maleUser = users.filter(function (user) {
  if (user.gender == "male") {
    return true;
  } else {
    return false;
  }
});

let maleUserBasicInfo = maleUser.map(function (user) {
  let user_id = user.id;
  let user_name = user.name;
  let result = {
    "id": user_id,
    "name": user_name,
  };
  return result;
});

console.log(maleUserBasicInfo);
