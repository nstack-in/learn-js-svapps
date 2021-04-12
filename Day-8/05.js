
const ipl = require('./ipl.json');
const data = ipl.data;

let result = data.filter((match) => match.season == 2008)
                 .filter((match) => match.city == "Bangalore")
                 .map((match) => match.winner);

console.log(result);