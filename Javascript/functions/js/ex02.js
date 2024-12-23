/*
Hàm ẩn danh: anonymous function, lambda function

function() {

}

Để sử dụng được hàm ẩn danh: 
- Gán vào 1 biến
- Gọi thông qua hàm khác
- IIFE (Immediately Invoked Function Expression)
*/

//Expression Function

var getMessage = function () {
  console.log("Hello anh em");
};

getMessage();

// var showMessage = function getMsg() {
//   console.log("Học JS không khó");
// };

// showMessage();

function getA(func) {
  console.log("getA");
  /*
  func = function() {
    console.log('getB');
  }
  */
  //   console.log(func);
  if (typeof func === "function") {
    func();
  }
}

getA(function () {
  console.log("getB");
});

// var a = 10;
var a = function () {
  return 10;
};
// console.log(a);
console.log(a());
