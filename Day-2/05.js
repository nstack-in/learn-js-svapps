// 3. arrow function (ES6)

let isEven = (num) => {
  let rem = num % 2;
  if (rem == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

// isEven(11);

console.log(isEven.prototype);
