/*
Đối tượng
- Thuộc tính (Biến)
- Phương thức (Hàm)

Các cách tạo đối tượng trong JS
- Object Literal (Object cụ tổ)
- Function Constructor

Cú pháp chung
key: value
--> key thường là 1 chuỗi
*/
console.log(Object);

var user = {
    name: "Viet Hoang",
    email: "viethoang.web@gmail.com",
    age: 32,
    getName: function () {
        return "Hoàng Mai";
    },
};

//Thêm key mới vào object
user.address = "Hà Nội";

//getName: phương thức
//name, email: thuộc tính

//Truy cập vào key trong object
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());
// console.log(user["age"]);

//Cập nhật giá trị của key
user.age = 33;

//Xóa key
delete user.age;
console.log(user);

//Duyệt các key của object
// for (var key in user) {
//   console.log(key, user[key]); //Computed Property
// }

//Bài tập
var a = {
    name: "user1",
    email: "user1.web@gmail.com",
};
var b = {
    course: "Javascript",
    teacher: "Mr.T",
};
// console.log(a + b);
//Nối 2 object a và b ==> Lưu  vào object c
var c = {};
for (var key in a) {
    c[key] = a[key];
}
for (var key in b) {
    c[key] = b[key];
}
// console.log(c);

//Kiểm tra 1 biến có phải object không?
if (typeof user === "object" && !Array.isArray(user) && user !== null) {
    console.log("Là object");
}

var products = [
    null,
    1,
    { a: 1 },
    false,
    {
        name: "SP 2",
        price: 10000,
    },
    {
        name: "SP 1",
        price: 20000,
    },
    [30000],

    undefined,
    {
        name: "SP 3",
        price: 15000,
    },
];
//Trả về thông tin sp có giá lớn nhất
var isProduct = function (item) {
    if (
        typeof item === "object" &&
        !Array.isArray(item) &&
        item !== null &&
        item.price
    ) {
        return true;
    }
    return false;
};

var result = products.reduce(function (prev, current) {
    if (isProduct(current)) {
        // console.log(current);
        if (!prev) {
            //Lần đầu khi prev chưa được gán bằng sản phẩm nào --> Gán
            return current;
        }

        if (prev.price < current.price) {
            return current;
        }
    }
    return prev; //Giá trị max tìm được
}, null);
console.log(result);
/*
Ý tưởng: 
Tìm được các phần tử là object và có thuộc tính price (Là sản phẩm)
Đặt lính canh là sản phẩm đầu tiên tìm được
So sánh giá của lính canh với từng sản phẩm
=> Nếu giá của lính canh < giá sản phẩm --> Gán lính canh = sản phẩm
*/
