Object.prototype.getValue = function () {
  //Trả về value của tất cả thuộc tính --> Lưu vào 1 mảng
  //this --> Object hiện tại (user)
  var result = [];
  var current = this;
  Object.keys(this).forEach(function (key) {
    typeof current[key] !== "function" && result.push(current[key]);
  });
  return result;
};
Object.prototype.message = "Hello anh em F8";

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
console.log(user.getValue());

var customer = {
  name: "Hoàng An F8",
  address: "Hà Nội",
};
console.log(customer.getValue());

// var a = {};
// console.log(a.message);

// var b = [];
// console.log(b.message);

// var fullname = "Hoàng An";
// console.log(fullname.message);

// var check = true;
// console.log(check.message);

// var c = Symbol();
// console.log(c.message);

// var age = 12;
// console.log(age.message);

//Object --> Constructor --> Data Type

//Prototype trong Function Constructor: Array, String, Number,... --> Chỉ được sử dụng tại các object được tạo từ Constructor đó
// Array.prototype.messageA = "Hello Array";
// var arr1 = [];
// console.log(arr1.messageA);
// var str1 = "F8";
// console.log(str1.messageA);

//Bài tập: Viết lại vòng lặp map
Array.prototype.map2 = function (callback) {
  //Code
  /*
  Yêu cầu: 
  - Chỉ được dùng vòng lặp có sẵn của js (Không dùng vòng lặp của kiểu dữ liệu)
  - Không dùng push
  this --> Mảng ban đầu  
  */
  if (typeof callback !== "function") {
    return;
  }
  //Tạo mảng mới
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var result = callback(this[i], i);
    // console.log(result);
    //Thêm result vào mảng mới
    newArr[i] = result;
  }

  //return mảng mới
  return newArr;
};
var users = ["User 1", "User 2", "User 3"];
var result = users.map2(function (user, index) {
  //   console.log(user, index);
  return `<h2>${index} - ${user}</h2>`;
});
console.log(result);

//Viết lại hàm filter trong array (Đặt tên: filter2)
Array.prototype.filter2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var check = callback(this[i], i);
    if (check) {
      //   newArr[newArr.length] = this[i];
      newArr.push(this[i]);
    }
  }
  return newArr;
};
var numbers = [5, 1, 2, 9, 10];
var result = numbers.filter2(function (number, index) {
  return number > 2;
});
console.log(result);

String.prototype.last = function () {
  var arr = this.split(" ");
  return arr[arr.length - 1];
};
var fullname = "Tạ Hoàng An";
console.log(fullname.last());
