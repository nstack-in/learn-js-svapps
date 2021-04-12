// all the city name of season 2008

const ipl = require('./ipl.json');
const data = ipl.data;


// let result = data.filter((match) => match.season == "2008");

// let result = data.filter((match) => {
//   return match.season == "2008";
// });

let result = data.filter((match) => {
  if (match.season == "2008") {
    return true;
  } else {
    return false;
  }
});

console.log(result);