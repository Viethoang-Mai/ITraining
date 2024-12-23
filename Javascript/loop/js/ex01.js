//Vòng lặp

// for (var i = 1; i <= 10; i += 2) {
//   console.log(`Lần lặp thứ ${i}`);
// }

// for (var i = 10; i >= 1; i -= 2) {
//   console.log(`Lần lặp thứ ${i}`);
// }

// for (var i = 1; i <= 5; i++) {
//   for (j = 1; j <= 5; j++) {
//     console.log(`Lần lặp thứ ${i} - ${j}`);
//   }
// }

/*
S = 1 + 2 + 3 + ... + N
*/
var n = 100;
var total = 0; //Lưu lại giá trị sau mỗi lần lặp
for (var i = 1; i <= n; i++) {
  total += i;
}
console.log("Tổng = " + total);

/*
N! = 1 * 2 * 3 * ... * N
*/
var n = 0;
var result = 1;
for (var i = n; i > 1; i--) {
  result *= i;
}
console.log(`${n}! = ${result}`);

/*
S = 1 + 1*2 + 1*2*3 + 1*2*3*4 + ... + 1*2*3*4*n
*/
var n = 5;
var total = 0;
var temp = 1;
for (var i = 1; i <= n; i++) {
  // i! = 1 * 2 * .... * i
  temp *= i;
  total += temp;
}
console.log(total);
