function Solution(ipl_data) {

  // Find the number of matches played by  Royal Challengers Bangalore

  const data = ipl_data.data;
  const rcb = "Royal Challengers Bangalore";

  data.filter((match) => {
    if (match.team1 == rcb || match.team2 == rcb) {
      return true
    } else {
      return false;
    }
  })

}
module.exports = Solution;