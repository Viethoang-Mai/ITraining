//Thuộc tính
//Cú pháp: element.tenthuoctinh
var a = document.querySelector("a");

// console.log(a.href);
// console.log(a.title);
// console.log(a.target);
// console.log(a.id);
// console.log(a.className);

a.href = "https://google.com";
a.rel = "nofollow";
a.className = "hello-123";

console.dir(a);

// var attributes = a.attributes;
// for (var i = 0; i < attributes.length; i++) {
//   console.log(attributes[i].nodeName, attributes[i].nodeValue);
// }

//Data Attribute:
/*
- Thuộc tính tự tạo, chỉ phục vụ để xử lý js
- Cú pháp: data-*
*/
var boxEl = document.querySelector(".box");
console.log(boxEl.getAttribute("data-count"));

boxEl.setAttribute("data-count", "abc");

boxEl.setAttribute("data-index", "ahihi");

// boxEl.removeAttribute("data-count");

a.removeAttribute("href");

//Dataset
// console.log(boxEl.dataset);

//Truy cập vào thuộc tính data-count
// console.log(boxEl.dataset.count);

//Truy cập vào thuộc tính  data-index
// console.log(boxEl.dataset.index);

//Cập nhật giá trị thuộc tính
boxEl.dataset.index = "123";

//Thêm thuộc tính data-animation-duration
boxEl.dataset.animationDuration = "2s";

//ClassList
console.log(boxEl.className);

// console.log(boxEl.classList);

boxEl.classList.add("box-3", "box-4", "box-5");

boxEl.classList.remove("box-2", "box-3");

console.log(boxEl.classList.contains("box-1"));

boxEl.classList.replace("box-5", "box-6");

boxEl.classList.toggle("box-7");
boxEl.classList.toggle("box-7");
