//DOM = Document Object Model
//Trình duyệt mô hình hóa HTML thành đối tượng để dễ dàng thao tác chỉnh sửa trước khi hiển thị cho người dùng

/*
Element (Tag) --> Object
    - Text --> Object
    - Attribute --> Object

Các loại DOM

1. DOM Element
2. DOM HTML
3. DOM CSS
4. DOM Event
5. DOM Event Listener
6. DOM Navigation
7. DOM Nodes

Muốn thao tác được với DOM --> Có Node Element (Object)

DOM Element: Truy cập vào các thẻ html --> Tạo ra Node (5 cách)

- document.getElementById(id) --> Trả về element đầu tiên
- document.getElementsByClassName(class) --> Trả về danh sách
- document.getElementsByTagName(tag) --> Trả về danh sách
- document.querySelector(selector) --> Trả về element đầu tiên
- document.querySelectorAll(selector) --> Trả về danh sách
*/

// var title = document.getElementById("title");
// // console.dir(title);

// var titleList = document.getElementsByClassName("title");
// // console.dir(titleList);
// // console.log(titleList[1].innerText);

// var titleList = document.getElementsByTagName("h2");
// // console.log(titleList);

// var title = document.querySelector(".title");
// console.log(title);

// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// var btn = document.querySelector(".wrapper .btn");
// var subTitle = document.querySelector(".wrapper .sub-title");
// console.log(btn);
// console.log(subTitle);

var content = document.querySelector(".wrapper");
var btn = content.querySelector(".btn");
console.log(btn);

//Ngoại lệ: head, body
var head = document.head;
var body = document.body;
console.log(head);
console.log(body);

//Ngoại lệ: Form
var input = document.form_login.fullname;
console.log(input);
if (input) {
  input.value = "Hello F8";
}

var submitBtn = document.form_login.submit;
console.log(submitBtn);

//Lưu ý: Khi chọn element để thao tác DOM --> Kiểm tra element có tồn tại không?
/*
1. Nếu element là 1 phần tử --> Kiểm tra khác null và undefined
2. Nếu element là 1 danh sách --> Kiểm tra length > 0
*/
