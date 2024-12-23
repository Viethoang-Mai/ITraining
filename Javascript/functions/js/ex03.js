// var getA = function () {
//   console.log("getA");
// };
// var getB = getA;
// getA();
// getB();

// var getB = function getA() {
//   console.log("getA");
// };
// // getA();
// getB();

// function getA() {
//   console.log("getA");
// }
// var getB = getA;
// getA();
// getB();

//rest parameters
function max(a, ...args) {
    console.log(a);
    console.log(arguments);
    console.log(args);
}

max(5, 10, 15, 20, 25, 30, 35);

//setTimeout --> Delay quá trình thực thi 1 hàm

// function handle(msg, type) {
//     console.log("Học JS không khó", msg, type);
// }

// setTimeout(handle, 1000, "hvm", "error");

// var count = 0;
// var myInterval = setInterval(function () {
//   count++;
//   console.log("Hello anh em", count);
//   if (count === 5) {
//     clearInterval(myInterval);
//   }
// }, 1000);
