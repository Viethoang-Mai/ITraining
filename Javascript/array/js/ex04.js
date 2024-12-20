/*
Tìm kiếm phần tử theo từ khóa
*/
var users = [
  "Tạ Hoàng An",
  "Lưu Anh Quân",
  "Nguyễn Văn Hoàng",
  "Nguyễn Văn Dũng",
  "Mai Thị Hoa",
];

var keyword = "an";

//Tìm các users chứa từ khóa
var result = users.findLast(function (user) {
  //Từng user là chuỗi --> Bài toán xử lý chuỗi
  var check = user.toLowerCase().includes(keyword.toLowerCase());
  return check;
});
console.log(result);

//Hàm find()
/*
Chỉ khác filter trả về phần tử đầu tiên tìm được
*/

//Hàm findLast
/*
Chỉ khác filter trả về phần tử cuối cùng tìm được
*/

//Hàm findIndex
/*
Trả về index đầu tiên tìm được
Khác indexOf --> Tự viết biểu thức logic trong hàm callback
*/

//Hàm findLastIndex
/*
Trả về index cuối cùng tìm được
Khác indexOf --> Tự viết biểu thức logic trong hàm callback
*/
// var index = users.findIndex(function (user) {
//   //Từng user là chuỗi --> Bài toán xử lý chuỗi
//   var check = user.toLowerCase().includes(keyword.toLowerCase());
//   return check;
// });
// console.log(index);

var users = [
  ["User 1", "user1@gmail.com", 30],
  ["User 2", "user2@gmail.com", 31],
  ["User 3", "user3@gmail.com", 28],
  ["User 4", "user2@gmail.com", 31],
];
// console.log(users);

//Tăng user nào có email là user2@gmail.com thêm 2 tuổi
/*
Tìm index thỏa mãn điều kiện
Dựa vào index --> Cập nhật lại tuổi
*/
// var index = users.findIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// users[index][2] += 2;

// users = users.map(function (user) {
//   if (user.includes("user2@gmail.com")) {
//     user[2] += 2;
//   }
//   return user;
// });

// console.log(users);

var users = [
  ["User 1", "user1@gmail.com", 30],
  ["User 2", "user2@gmail.com", 31],
  ["User 3", "user3@gmail.com", 28],
  ["User 4", "user2@gmail.com", 31],
];

//Yêu cầu: Loại bỏ phần tử có email bị trùng
console.log(users);
/*
Ý tưởng: 
- Tạo 1 mảng mới
- Duyệt qua từng phần tử của mảng cũ
- Kiểm tra nếu trong mảng mới không có email --> Thêm phần tử vào mảng mới
*/
var newArr = [];
var emails = [];
users.forEach(function (user) {
  //user --> Từng phần tử của mảng user
  //Tìm email của từng user, so sánh xem có nằm trong mảng newArr hay không?
  //   var result = newArr.find(function (item) {
  //     return item[1] === user[1];
  //   });
  //   if (!result) {
  //     newArr.push(user);
  //   }
  if (!emails.includes(user[1])) {
    newArr.push(user);
    emails.push(user[1]);
  }
});
// console.log(newArr);

//some --> 1 vài
/*
- Trả về true / false
- Trả về true nếu trong callback có ít nhất 1 phần tử return true
- Vòng lặp sẽ chạy đến khi thỏa mãn điều kiện sẽ dừng lại
*/
// var numbers = [4, 6, 10, 2, 8];
//Tìm xem trong mảng numbers có phần tử lẻ không?
// var check = numbers.some(function (number) {
//   return number % 2 !== 0;
// });
// console.log(check);

//every --> Tất cả
/*
- Trả về true / false
- Trả về true nếu trong callback có tất cả phần tử return true
- Vòng lặp sẽ dừng lại nếu có 1 phần tử không thỏa mãn
*/

//Kiểm tra mảng number xem có phải tất cả là số chẵn không?
// var numbers = [4, 6, 10, 2, 8, 1];
// var check = numbers.every(function (number) {
//   return number % 2 === 0;
// });
// console.log(check);
