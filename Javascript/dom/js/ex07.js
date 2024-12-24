//Event Object

//this: element gán sự kiện
//e (event object)
var btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(this);
  console.log(e.target);
});

// var items = document.querySelectorAll("ul li");
// items.forEach(function (item) {
//   item.addEventListener("click", function () {
//     console.log(this);
//   });
// });

// var ul = document.querySelector("ul");
// ul.addEventListener("click", function (e) {
//   console.log(e.target);
// });
