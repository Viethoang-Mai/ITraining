//Để in dữ liệu ra màn hình --> DOM (Document Object Model)
document.write("<h2>Hello Anh Em</h2>");

//Debug dữ liệu: console.log() --> Hiển thị nội dung trong tab Console của DevTool
console.log("Hello anh em");

/*---------------------------- Biến ---------------------------- */
/*
- Lưu trữ dữ liệu tạm thời
- Lưu ở RAM
- Chấp nhận: $, chữ thường, chữ hoa, số, gạch dưới
- Đặt tên: Không được bắt đầu bằng số

Quy tắc đặt tên
1. camelCase
Ví dụ: userId, customerId, customerAddress, customerAddressShipping,...

2. PascalCase
Ví dụ: UserModel, UserController, CustomerService,...

3. underscore
Ví dụ: user_id, customer_name, regular_price,...
*/

/*
Khai báo biến
var userId, username;
var customer,
  customerName = "Hoàng An";
console.log(userId);
console.log(customerName);
*/

var courseName = "Javascript";
// var welcome = "<h2>Khóa học <i>" + courseName + "</i> tại PGTS</h2>";
// welcome = welcome + "<h3>Web</h3>";

//Template String (Backtick: `)
document.write(welcome);

/* ----------------Comment---------------- */

/*
Dùng khi muốn chú thích hoặc vô hiệu hóa code
*/

// //Comment 1 dòng
/*
Comment nhiều dòng
Comment nhiều dòng
*/
