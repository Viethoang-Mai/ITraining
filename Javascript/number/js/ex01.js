//Number
console.dir(Number);

var age = 32;
console.log(age);

//Kiểm tra kiểu Number
console.log(typeof age);

//Số NaN (Not A Number)
// --> Khi quá trình ép kiểu thất bại
// Ví dụ: Chuỗi --> Ép kiểu --> Số
//Ép kiểu có 2 trường hợp:
//1. Chủ động ép kiểu
//2. Biểu thức tự ép kiểu
// var a = "10a";
// a = +a; //Ép kiểu
// console.log(a, typeof a);

// var total = "10" * 10;
// console.log(total);

//Kiểm tra 1 số NaN
// var a = "F8";
// if (isNaN(a) || Number.isNaN(a)) {
//   console.log("Số NaN");
// } else {
//   console.log("Không phải NaN");
// }

//Kiểm tra số nguyên
// var a = 10;
// if (Number.isInteger(a)) {
//   console.log("Số nguyên");
// } else {
//   console.log("Không phải số nguyên");
// }

//Ép kiểu
var a = "10.5";
// a = +a;
// a = Number(a);
// a = parseInt(a);
// a = parseFloat(a);
// a = Number.parseFloat(a);
a = Number.parseInt(a);
console.log(a);
//Lưu ý: Trong JS, bắt buộc phải ép kiểu nếu sử dụng number

//Số infinity: Vượt quá giới hạn lưu trữ của ngôn ngữ lập trình

var a = 1000 ** 1000;
var b = -(1000 ** 2000);
// console.log(b);
// if (a === Infinity || a === -Infinity) {
//   console.log("Đã infinity");
// }

//Lấy số chữ số phần thập phân và làm tròn
var a = 10.2345678;
// a = a.toFixed(0);
// a = a.toPrecision(1);
// console.log(a);

//Định dạng tiền tệ
var price = 12000000.456;
// price = price.toLocaleString("en", {
//   style: "currency",
//   currency: "USD",
// });
price = price.toFixed(2);
price = +price;
price = price.toLocaleString();
console.log(price);
