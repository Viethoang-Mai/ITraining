// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
// };

// //Object.keys() --> Lấy danh sách các key trả về mảng (Không lấy prototype)

// // var keys = Object.keys(user);
// // console.log(keys);

// // if (Object.keys(user).length) {
// //   Object.keys(user).forEach(function (key) {
// //     console.log(user[key]);
// //   });
// // } else {
// //   console.log("Không có dữ liệu");
// // }

// //Object.values() --> Lấy danh sách các value trả về mảng
// // console.log(Object.values(user));

// //Object.entries() --> Trả về cả keys và values --> Mảng 2 chiều
// // console.log(Object.entries(user));

// //Object.assign(target, source1, source2,...)
// //-Trả về object mới sau khi nối
// //-Thay đổi object target
// var a = { course: "Fullstack", teacher: "Hoàng An" };
// var b = { a: "1", b: "2" };
// // var obj = Object.assign(user, a, b);
// // var tmp = Object.assign({}, user); //Copy của user
// // var obj = Object.assign(tmp, a);
// var obj = Object.assign({}, user, a);
// // console.log(obj);
// // console.log(user);

// //Bài tập
// var query = {
//   status: true,
//   category: 1,
//   keyword: "Hoàng An",
// };
// //Chuyển object trên thành query string
// // --> status=true&category=1&keyword=Hoàng+An
// var queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// //Chuyển từ queryString thành query
// //B1: Chuyển từ string --> entries (Mảng 2 chiều)
// var allow = ["true", "false"];
// var entries = queryString
//   .replaceAll("+", " ")
//   .split("&")
//   .map(function (item) {
//     var itemArr = item.split("=");
//     if (allow.includes(itemArr[1])) {
//       itemArr[1] = itemArr[1] === "true";
//     }
//     return itemArr;
//   });
// //B2: Chuyển entries --> Object
// var query = Object.fromEntries(entries);
// console.log(entries);
// console.log(query);

// Lớn hơn 1
// Số nguyên
// Chỉ chia hết cho 1 & chính nó

// 1
// 2
// 3
// 6 - Trung tam
// 12
// 18
// 36

function timSoNguyenTo(x) {
  if (x <= 1 || x % 1 !== 0) {
    return false;
  }

  for (var i = 2; i < x; i++) {
    console.log(i);
    // if (x % i === 0) {
    //   return false;
    // }
  }
  return true;
}
