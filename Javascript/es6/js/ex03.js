//Arrow Function: Không thay thế function truyền thống

// const getMessage = (msg) => {
//   console.log("Học lập trình không khó", msg);
// };
// getMessage("Hello anh em ");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const getUser = () => ({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// });
// console.log(getUser());

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => id === userId);
// console.log(getUser(1));

// const getUser2 = function (userId) {
//   return users.find(function ({ id }) {
//     return id === userId;
//   });
// };
// console.log(getUser2(1));

/*
Một số lưu ý với Arrow Function
- Không thay thế function truyền thống
- Không lấy được this ở hàm hiện tại (Sẽ lấy ở hàm cha)
- Không lấy được arguments
- Không phù hợp để làm method của object
- Không có hoisting
- Không được dùng làm Function Constructor
- Không có thuộc tính prototype
*/

// function getA() {}
// console.dir(getA);

// const getB = () => {};
// console.dir(getB);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   console.log(this);
// });

//IIFE
(() => {
    console.log("Hello ae ");
})();
