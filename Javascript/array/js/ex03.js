console.log(Array.prototype);

var users = ["User 1", "User 2", "User 3", "User 4"];

//1. forEach --> Lặp qua từng phần tử
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

//2. map
/*
- Trả về 1 mảng mới có số lượng phần tử = mảng ban đầu
- Từng phần tử của mảng mới phụ thuộc vào return của callback
*/
// var newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h2>${user}</h2>`;
// });
// console.log(newArr);

//3. filter
/*
- Trả về 1 mảng mới
- Giá trị và số lượng phần tử của mảng mới phụ thuộc vào return true của callback
- return 1 biểu thức logic
*/
// var newArr = users.filter(function (user, index) {
//   console.log(user, index);
//   //   if (index > 1) {
//   //     return true;
//   //   }
//   return index;
// });
// console.log(newArr);

var customers = [
  ["User 1", "user1@gmail.com", 30],
  ["User 2", "user2@gmail.com", 31],
  ["User 3", "user3@gmail.com", 32],
  ["User 4", "user4@gmail.com", 34],
];

//Yêu cầu 1: Xóa phần tử mảng có email là user2@gmail.com
var newArr = customers.filter(function (user) {
  //   if (user.includes("user2@gmail.com")) {
  //     return false;
  //   }
  //   return true;
  //   console.log(user);
  return !user.includes("user2@gmail.com");
});
console.log(newArr);
