/*
1. Client Side Rendering (CSR)
- Server tải: html (div root), js
- JS tạo giao diện bằng DOM đưa vào div root
2. Server Side Rendering (SSR)
- Trả html từ Server

DOM Nodes: 
- Tự tạo ra các Node bằng js mà không có sẵn HTML
- Dễ dàng thao tác cập nhật với các Node mà không cần tạo lại
- Trong các Framework đều sử dụng

Nodes: 
- Element
- Attribute
- Comment
- Text
*/

var root = document.querySelector("#root");
// root.innerHTML = `
// <h1>F8 - Học lập trình không khó</h1>
// <button>Click me</button>
// `;
// root.querySelector("button").addEventListener("click", function () {
//   root.querySelector("h1").innerText = "Chào anh em";
// });

//Tạo Node Element
// var h1 = document.createElement("h1");
// //Thao tác giống như kiến thức đã học
// h1.classList.add("title");
// h1.innerText = "Học lập trình không khó";

// var button = document.createElement("button");
// button.innerText = "Click me";
// button.type = "button";
// button.addEventListener("click", function () {
//   h1.innerText = "Học JS thật dễ";
// });

//Render: Đẩy dữ liệu lên trình duyệt
// root.append(h1);
// root.append(button);

/*
Bài tập
<div class="content">
    <h1>F8 - Học lập trình không khó</h1>
    <ul class="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button>Add</button>
</div>
*/

var content = document.createElement("div");
content.classList.add("content");
var h1 = document.createElement("h1");
h1.innerText = "F8 - Học lập trình không khó";
content.append(h1);

var ul = document.createElement("ul");
ul.classList.add("menu");
for (var index = 1; index <= 3; index++) {
  var li = document.createElement("li");
  li.innerText = `Item ${index}`;
  ul.append(li);
}
content.append(ul);
var button = document.createElement("button");
button.innerText = "Add";
content.append(button);
root.append(content);

//Xử lý sự kiện
button.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = `Item ${ul.children.length + 1}`;
  ul.append(li);
});

var button = document.createElement("button");
button.innerText = "Insert Before UL";
content.append(button);
button.addEventListener("click", function () {
  //Tạo node mới
  var h2 = document.createElement("h2");
  h2.innerText = "Hello anh em F8";
  //Chèn node mới vào trước 1 node con khác
  content.insertBefore(h2, ul);

  var h3 = document.createElement("h3");
  //Chèn node mới vào sau 1 node con khác
  h3.innerText = "Học JS không khó";
  ul.nextElementSibling && content.insertBefore(h3, ul.nextElementSibling);
});

var button = document.createElement("button");
button.innerText = "Change Node";
content.append(button);
button.addEventListener("click", function () {
  //Tạo node mới
  var p = document.createElement("p");
  p.innerText = "Học Javascript DOM";
  content.replaceChild(p, h1);

  content.append(h1);

  content.removeChild(ul);
});
