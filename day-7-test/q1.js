function Solution(ipl_data) {

  // Find the 'id' of the matches won by Kolkata Knight Riders

  let matches = ipl_data.data;
  let compareWith = "Kolkata Knight Riders";

  let matchesWinByKolkata = matches.filter((match) => match.winner == compareWith);
  let idOfMatches = matchesWinByKolkata.map((match) => match.id);

  return idOfMatches;
}
module.exports = Solution;