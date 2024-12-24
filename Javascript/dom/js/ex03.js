// var input = document.querySelector("input");
// input.addEventListener("focus", function (e) {
//   //   console.log("Change:", e.key);
//   console.log("Focus");
// });
// input.addEventListener("blur", function (e) {
//   console.log("Blur");
// });

//DOM HTML
var content = document.querySelector(".content");
//1. innerHTML
// console.log(content.innerHTML);

// content.innerHTML = `<h1>Học JS không khó</h1>`;

//2. innerText
// console.log(content.innerText);

// content.innerText = `<h1>Học lập trình không khó</h1>`;

//3. textContent
// console.log(content.textContent);

// content.textContent = `A
// B
// C
// `

//4. outerHTML

// content.outerHTML = `<div class="content"><h1>Học lập trình không khó</h1></div>`;
// content = document.querySelector('.content');
// console.log(content.outerHTML);

//5. outerText
// console.log(content.outerText);

// content.outerText = `<h1>Học lập trình không khó</h1>`;

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var contentInner = content.innerHTML;
btn.addEventListener("click", function () {
  if (content.innerHTML) {
    content.innerHTML = "";
    this.innerText = "Hiện";
  } else {
    content.innerHTML = contentInner;
    this.innerText = "Ẩn";
  }
});

var incrementBtn = document.querySelector(".increment-btn");
var decrementBtn = document.querySelector(".decrement-btn");
var counterEl = document.querySelector(".counter");
incrementBtn.addEventListener("click", function () {
  counterEl.innerText++;
});
decrementBtn.addEventListener("click", function () {
  counterEl.innerText--;
});

//Xóa thẻ html: element.remove()
// content.remove();
