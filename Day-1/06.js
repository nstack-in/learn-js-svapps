var a = 200;
var b = 200;
var c = 199;

if (a > b && a > c) {
  console.log("A is gretest");
} else if (b > a && b > c) {
  console.log("B is gretest");
} else if (c > a && c > b) {
  console.log("C is gretest");
} else {
  console.log("unexpected condition");
}
