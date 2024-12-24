var btn = document.querySelector("button");

btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    initialOffsetX = e.offsetX;
    initialOffsetY = e.offsetY;
  }
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
btn.style.cursor = "move";
var initialOffsetX = 0;
var initialOffsetY = 0;
var bodyWidth = document.body.clientWidth;
var handleDrag = function (e) {
  var x = e.clientX - initialOffsetX - 10;
  var y = e.clientY - initialOffsetY - 10;
  btn.style.translate = `${x}px ${y}px`;
  if (x >= bodyWidth / 2) {
    document.body.style.background = "red";
  } else {
    document.body.style.background = null;
  }
};

//preventDefault()
// --> Ngăn hành động mặc định của trình duyệt với thẻ html
// Ví dụ: click thẻ a, submit form, focus input, chuột phải,...
var menu = document.querySelector("ul");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  //   alert("Bạn không được bấm chuột phải");
  var x = e.clientX;
  var y = e.clientY;
  menu.style.display = "block";
  menu.style.top = `${y}px`;
  menu.style.left = `${x}px`;
});
document.addEventListener("mousedown", function () {
  menu.style.display = "none";
});

menu.addEventListener("mousedown", function (e) {
  e.stopPropagation();
});
//state
