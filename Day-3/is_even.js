function checkEven(n) {
  let rem = n % 2;
  if (rem == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkEven;
