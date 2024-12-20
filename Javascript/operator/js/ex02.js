/*
if (dieukien) {
    //Code
}

if (dieukien) {
    //Code đúng
} else {
    //Code sai
}

if (dieukien 1) {
    //Code 1
} else if (dieukien 1){
    //Code 2
} else if (dieukien 3){
    //Code 3
} else if (dieukien 4){
    //Code 4
} else {
    //Code 5
}

if (dieukien) {
    if (dieukien) {

    } else {

    }
} else {

}
*/

// var a = false;
// if (true === a) {
//   console.log("Đúng");
// }

/*
Tính lương thực nhận của 1 nhân viên
- Lương <=5 tr  --> Không chịu thuế
- Lương >5tr và <= 15tr --> 3%
Trên 15tr --> 5%
*/
// var salary = 7000000;
// var income, rate;

// if (salary <= 5000000) {
//   rate = 0;
// } else if (salary > 15000000) {
//   rate = 5;
// } else {
//   rate = 3;
// }
// income = salary - (salary * rate) / 100;
// console.log(income);

var action = "remove1";
switch (action) {
    case "create":
    case "add":
    case "insert":
        console.log("Thêm");
        break;
    case "edit":
    case "update":
        console.log("Sửa");
        break;
    case "delete":
    case "remove":
    case "destroy":
        console.log("Xóa");
        break;
    default:
        console.log("Danh sách");
        break;
}

if (action === "create" || action === "add" || action === "insert") {
    console.log("Thêm");
} else if (action === "update" || action === "edit") {
    console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
    console.log("Xóa");
} else {
    console.log("Danh sách");
}

/*
Tính số ngày trong tháng
- 31 ngày: 1, 3, 5, 7, 8, 10, 12
- 30 ngày: 4, 6, 9, 11
- 28 hoặc 29: 2

Yêu cầu: Kiểm tra tháng theo điều kiện sau
- Số nguyên
- Từ 1 đến 12
*/
var month = "2";
var year = 2024;
month = +month;
if (month % 1 === 0 && month >= 1 && month <= 12) {
    var day;
    switch (month) {
        case 2:
            if (year % 4 === 0) {
                day = 29;
            } else {
                day = 28;
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        default:
            day = 31;
    }
    console.log(`Tháng ${month} có ${day} ngày`);
} else {
    console.log("Không hợp lệ");
}
