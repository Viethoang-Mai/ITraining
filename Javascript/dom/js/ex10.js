//Tạo element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".carousel-nav .next");
var prevBtn = carousel.querySelector(".carousel-nav .prev");

//Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth; //Chiều rộng của 1 element

//Tính tổng chiều rộng của tất cả items
var totalWidth = itemWidth * carouselInner.children.length;

var position = 0;
//Lắng nghe sự kiện khi bấm vào nút next
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) >= totalWidth - itemWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
});
//Lắng nghe sự kiện khi bấm vào nút prev
prevBtn.addEventListener("click", function () {
  if (Math.abs(position) <= 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});
