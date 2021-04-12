// all the city name of season 2008

const ipl = require('./ipl.json');
const data = ipl.data;


// let result = data.filter((match) => match.season == "2008")
//                   .map((match) => match.winner);


let match2008 = data.filter((match)  =>{
  if(match.season == "2008"){
    return true
  }else {
    return false;
  }
});
let result = match2008.map((match) =>{
  return match.winner;
});

console.log(result.length);