const ipl = require('./ipl.json');
const data = ipl.data;

// Get the name of winner team which is player during 2008 in banglore


let banglore2008 = data.filter((match) => {
  if (match.season == "2008" && match.city == "Bangalore") {
    return true
  } else {
    return false;
  }
});
let result = banglore2008.map((match) => {
  let winner = match.winner;
  let id = match.id;
  return {
    "id": id,
    "name": winner,
  };
});

console.log(result)