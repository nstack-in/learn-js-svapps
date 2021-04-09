function Solution(ipl_data) {

  // Find the 'id' of the matches
  // won by Kolkata Knight Riders

  let matches = ipl_data.data;

  let matchesWinByKolkata = matches.filter(function (match) {
    if (match.winner == "Kolkata Knight Riders") {
      return true
    } else {
      return false
    }
  });

  let idOfMatches = matchesWinByKolkata.map(function (match) {
    // Write your code
  });

  return idOfMatches;
}
module.exports = Solution;