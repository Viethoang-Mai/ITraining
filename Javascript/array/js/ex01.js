/*
Mảng: Tập hợp nhiều giá trị trong 1 biến (Biến mảng)
- Hàm tạo của mảng Array
- Mảng là object
*/
var users = ["User 1", "User 2", "User 3"];
//Lấy số lượng phần tử trong mảng
// console.log(users.length);
users[users.length] = "User 4"; //Thêm phần tử mới vào mảng (Index tăng tuần tự, không bị trùng với index đã có)
users[users.length] = "oanhdoan";

//Sửa phần tử mảng
users[1] = "User 2 Update";
console.log(users);
// console.log(users[0]); //Truy cập phần tử trong mảng

//Duyệt mảng
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }
// for (var index in users) {
//   console.log(index, users[index]);
// }
// for (var user of users) {
//   console.log(user);
// }
//Xóa phần tử trong mảng
// var indexDel = 1;
// var newArr = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

//Thêm phần tử vào đầu mảng (Không dùng hàm, es6 trở lên)
var newElement = "User 0";
/*
- Tạo 1 mảng mới
- Thêm newElement vào mảng mới
- Duyệt qua từng phần tử của mảng cũ
- Thêm từng phần tử của mảng cũ vào cuối mảng mới
*/
var newArr = [newElement];
for (var index in users) {
    newArr[newArr.length] = users[index];
}
console.log(newArr);

//users.forEach()
