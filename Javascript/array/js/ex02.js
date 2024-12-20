console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3", "User 4"];
//1. at() --> Trả về phần tử theo index
// console.log(users.at(1));

//2. concat() --> Nối mảng
// var newArr = users.concat(
//   ["User 4", "User 5"],
//   [1, 2, 3],
//   ["a", "b", "c"],
//   "F8",
//   [["d"]]
// );
// console.log(newArr);

//3. fill --> Update từng phần tử mảng thành 1 giá trị

// var newArr = users.fill(1);
// console.log(newArr);

// var newArr = Array(100).fill(0);
// newArr.fill(0);
// console.log(newArr);

//4. includes() --> Tìm phần tử trong mảng theo value
// console.log(users.includes("User 2"));

//5. indexOf(value) --> Tìm phần tử trong mảng theo value trả về index đầu tiên
// console.log(users.indexOf("User 2"));

//6. lastIndexOf(value) --> Tìm phần tử trong mảng theo value trả về index cuối cùng
// console.log(users.lastIndexOf("User 2"));

//7. slice() --> Cắt mảng theo index (Tạo ra mảng mới)
// var newArr = users.slice(-2);
// console.log(newArr);

//8. push() --> Thêm phần tử vào cuối mảng
/*
Trả về tổng số lượng sau khi thêm
Thay đổi mảng ban đầu (Tham chiếu đến mảng ban đầu)

a = []
b = a;
b thay đổi --> a thay đổi
*/

// var count = users.push("Item 4", "Item 5", "Item 6");
// console.log(users);
// console.log(count);

//9. unshift() --> Thêm phần tử vào đầu mảng
// users.unshift("Item 1", "Item 2", "Item 3");
// console.log(users);

//10. pop() --> Xóa phần tử cuối mảng và trả về giá trị vừa xóa
// users.pop();
// console.log(users);

//11. Xóa phần tử đầu mảng
// users.shift();
// console.log(users);

//12. splice(index, number, ...args);
// var newArr = users.splice(1, 2, "Hải", "Yến", "Đức Anh");
// console.log(users);
// console.log(newArr);

//13. sort --> Sắp xếp tăng dần
/*
Mặc định sort sắp xếp tăng dần theo ký tự
Hàm sort nhận 1 callback có 2 tham số
sort(function(a, b) {
    a: Giá trị phần tử sau
    b: Giá trị phần tử  trước
    Nếu callback trả về số âm --> Đổi chỗ phần tử trước sau
})
*/
var a = ["A", "C", "D", "B"];
a.sort();
console.log(a);

var numbers = [1, 100, 5, 10, 2];
numbers.sort(function (a, b) {
  //a: sau
  //b: trước
  //   if (b > a) {
  //     return -1;
  //   }
  return a - b;
});
console.log(numbers);

//14. reverse
// var newArr = numbers.reverse();
// console.log(numbers);
// console.log(newArr);

//15. join() --> Nối mảng thành chuỗi
// console.log(users.join(" "));
// document.body.innerHTML = `<h2>${users.join("</h2><h2>")}</h2>`;

var customers = [
  "Tạ Hoàng An",
  "Nguyễn Minh Nhật Dương",
  "Đặng Ngọc Sơn",
  "Phan Văn Hải",
  "Phạm Xuân Yến",
];

//Sắp xếp danh sách khách hàng theo thứ tự tăng dần (theo tên)
var getFirstName = function (fullname) {
  //   console.log(fullname.split(" ").slice(-1).join());
  return fullname.split(" ").slice(-1).join();
};

customers.sort(function (a, b) {
  if (getFirstName(b) > getFirstName(a)) {
    return -1;
  }
});
console.log(customers);
