//Gán Event vào thẻ html
var btn = document.querySelector(".btn");

//element.onTenEvent = function(){}

// btn.onclick = function () {
//   console.log("Hello");
// };

// btn.onmouseover = function () {
//   console.log("Hover In");
// };

// btn.onmouseout = function () {
//   console.log("Hover out");
// };

// btn.addEventListener("click", function () {
//   console.log("Hello ae");
// });

// var handleClick = function () {
//   console.log("Double Click");
// };
// btn.addEventListener("dblclick", handleClick);

//Khi người dùng tác động vào thẻ html --> js lắng nghe sự kiện từ phía người dùng --> Nếu sự kiện đã được thêm thì sẽ thực thi function

// btn.onclick = function () {
//   console.log("click 1");
// };
// btn.onclick = function () {
//   console.log("click 2");
// };
// btn.addEventListener("click", function () {
//   console.log("Click 1");
// });
// btn.addEventListener("click", function () {
//   console.log("Click 2");
// });

var btnRemove = document.querySelector(".btn-remove");
var count = 0;
var handleClick = function () {
  console.log(this);
  console.log(++count);
  if (count === 5) {
    btn.removeEventListener("click", handleClick);
  }
};
btn.addEventListener("click", handleClick);

btnRemove.addEventListener("click", function () {
  console.log(this);
  btn.removeEventListener("click", handleClick);
});

var li = document.querySelectorAll("ul li");
// for (var i = 0; i < li.length; i++) {
//   li[i].addEventListener("click", function () {
//     // console.log(li[i]);
//     // console.log(i);
//     console.log(this);
//   });
// }
console.log(li);
li.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(item);
  });
});
