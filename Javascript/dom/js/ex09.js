//DOM Navigation
//- parentElement --> Trả về 1 element
//- childen --> Trả về 1 danh sách
//- nextElementSibling --> Element kế tiếp
//- previousElementSibling --> Element phía trước

//Node và Element Node?

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log(this);
//   console.log(this.parentElement);
//   console.log(this.parentElement.parentElement);
// });

// var menu = document.querySelector(".menu");
// console.log(menu.children[1].children[0].children[1].innerText);
// console.log(menu.children);

// var menuItems = document.querySelectorAll(".menu > li");
// menuItems.forEach(function (menuItem) {
//   menuItem.addEventListener("click", function () {
//     // console.log(this.children);
//     // if (this.children.length) {
//     //   return (this.style.color = "green");
//     // }
//     // this.style.color = "red";
//     //Nếu li không có con --> Màu đỏ
//     //Nếu li có con --> Màu xanh
//     // if (this.nextElementSibling !== null) {
//     //   this.nextElementSibling.style.color = "red";
//     //   return;
//     // }
//     if (this.previousElementSibling !== null) {
//       this.previousElementSibling.style.color = "red";
//       return;
//     }
//     alert("Còn gì nữa đâu");
//   });
// });

//Menu vertical
var items = document.querySelectorAll(".menu > li > a");

if (items.length) {
  items.forEach(function (item) {
    var subMenu = item.nextElementSibling;
    if (subMenu) {
      item.parentElement.classList.add("has-children");
    }

    item.addEventListener("click", function (e) {
      //Chọn thẻ ul nằm trong li tương ứng với thẻ a vừa click vào
      var subMenu = this.nextElementSibling;
      if (subMenu) {
        //Ngăn hành động của thẻ a
        e.preventDefault();

        var subMenuActive = document.querySelector(".menu ul.open");

        //Thêm class open vào subMenu nếu chưa có, xóa đi nếu đã có
        subMenu.classList.toggle("open");

        //Xử lý xoay mũi tên
        this.parentElement.classList.toggle("open");

        //Chọn element đang active
        if (subMenuActive) {
          subMenuActive.classList.remove("open");
          subMenuActive.parentElement.classList.remove("open"); //Xóa class open của li
        }
      }
    });
  });
}
