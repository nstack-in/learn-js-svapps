// 1. Team won the toss as well as match

// const ipl = require('./ipl.json');
// const data = ipl.data;
// let tossAndMatchWinner = data.filter((match) => {
//   return match.winner == match.toss_winner;
// });
// let result = tossAndMatchWinner.map((match) => {
//   let id = match.id;
//   let name = match.winner;

//   return {
//     "id": id,
//     "name": name,
//   }
// });

// console.log(result.length);

// 2. Find the team name who lose the match as well as toss.

const ipl = require('./ipl.json');
const data = ipl.data;

let result = data.filter((match) => {
  let toss_looser;
  if (match.team1 == match.toss_winner) {
    toss_looser = match.team2;
  } else {
    toss_looser = match.team1;
  }

  if (toss_looser == match.winner) {
    return false;
  } else {
    return true;
  }
});

console.log(result.length);