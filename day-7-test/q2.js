function Solution(ipl_data) {

  // Find the number of matches won 
  // Delhi Daredevils
  const data = ipl_data.data;
  let result = data.filter((match) => {
    return match.winner == "Delhi Daredevils";
  });

  return result.length;
}
module.exports = Solution;