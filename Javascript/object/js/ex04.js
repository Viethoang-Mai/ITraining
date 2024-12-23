//Function Constructor
//Bản thiết kế của object
//Ví dụ: Tạo 3 object có các thuộc tính và phương thức sau
/*
name, email, address
getInfo()

--> Tự định nghĩa hàm tạo riêng để sử dụng trường hợp này
*/
function Person(name, email, address) {
    //Đặt tên theo cú pháp PascalCase
    //Tên dùng danh từ
    this.name = name;
    this.email = email;
    this.address = address;
    this.getInfo = function () {
        return `
    - Name: ${this.name}
    - Email: ${this.email}
    - Address: ${this.address}
    `;
    };
}
var u1 = new Person("User 1", "email1@gmail.com", "Address 1");
u1.message = "Hello F8";
var u2 = new Person("User 2", "email2@gmail.com", "Address 2");
console.log(Person.prototype);

//Prototype
// Person.prototype.message = "Hello F8 111";

// //Static
// Person.msg = "Học lập trình không khó";
// Person.getMsg = function () {
//   //   console.log(this);
//   //   return "Hello F8";
//   //this --> Nội dung hàm tạo (function constructor)
//   //Muốn truy cập vào các phương thức, thuộc tính không phải static (non-static) --> Khởi tạo object từ từ khóa this
//   return new this().message;
// };

// //Khởi tạo object
// // var obj = new Person("User 1", "email1@gmail.com", "Address 1");
// // console.log(obj);
// // console.log(obj.message);

// // var obj2 = new Person("User 2", "email2@gmail.com", "Address 2");
// // console.log(obj2);
// // console.log(obj2.message);

// // console.log(Person.msg);
// // console.log(Person.getMsg());

// Person.prototype.something = function () {
//   //this.constructor --> Trả về hàm tạo của object
//   console.log(this.constructor.msg);
// };

// var user = new Person();
// user.something();

// var customers = [];
// // if (customers.constructor.name === "Array") {
// //   console.log("Là mảng");
// // }
// if (customers instanceof Array) {
//   console.log("Là mảng");
// }
// //Constructor ==> Object ==> Instance

// //Bài tập:
// //Xây dựng hàm tạo Calculator và viết các phương thức
// /*
// add(...args)
// sub(...args)
// mul(...args)
// div(...args)
// */

// function Calculator() {
//   this.add = function (...args) {
//     return args.reduce(function (total, current) {
//       return total + +current;
//     });
//   };
//   this.sub = function (...args) {
//     return args.reduce(function (total, current) {
//       return total - current;
//     });
//   };
//   this.mul = function (...args) {
//     return args.reduce(function (total, current) {
//       return total * current;
//     });
//   };
//   this.div = function (...args) {
//     return args.reduce(function (total, current) {
//       if (+current !== 0) {
//         return total / current;
//       }
//       throw new Error("Không được chia cho số 0");
//     });
//   };
// }
// var calc = new Calculator();
// // console.log(calc.div(10, 0, 1));

// //Array like object
// function something() {
//   //arguments --> Object (Giống array)
//   //   var keys = Object.keys(arguments);
//   //   var current = arguments;
//   //   keys.forEach(function (key) {
//   //     console.log(current[key]);
//   //   });
//   console.log(Array.from(arguments));
//   Array.from(arguments).forEach(function (item) {
//     console.log(item);
//   });
// }
// // something(10, 20, 30, 40, 50, 60);

// //Object.create() --> Tạo object từ Prototype
// // var obj = Object.create(Array.prototype);
// // console.log(obj);
// Object.prototype.msg = "Hello";
// var obj = Object.create(null); //Tạo object mới không kế thừa prototype nào cả
// // console.log(obj.msg);

// //Tham chiếu
// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// // var b = a;
// //Copy object
// //Shallow copy
// // var b = Object.assign({}, a);
// // var b = { ...a };
// var b = JSON.parse(JSON.stringify(a)); //Deep copy
// b.name = "Hoàng An f8";
// // console.log(a);
// // console.log(b);

// //Optional Chaining (?.)

// //1. Optional Chaining với thuộc tính
// var a = {
//   name: "Hoàng An",
// };
// console.log(a?.email?.domain);

// //2. Optional Chaining với phương thức
// var b = {};
// console.log(b?.getName?.());

// var users = ["User 1", "User 2", "User 3"];
// users?.forEach?.(function (user) {
//   console.log(user);
// });
