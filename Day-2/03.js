// 1. named funciton

// isEven(9);

function isEven(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log("isEven: even");
  } else {
    console.log("isEven: odd");
  }
}

// named funciton in js is hoisted
