var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var overlay = modalBox.querySelector(".overlay");
var closeBtn = modalBox.querySelector(".close-btn");
var closeModal = function () {
  modalBox.classList.remove("open");
};
var openModal = function () {
  modalBox.classList.add("open");
};
btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keyup", function (e) {
  e.key === "Escape" && closeModal();
});
// setTimeout(openModal, 5000);

//Form
var content = document.querySelector(".content");
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //Ngăn hành động mặc định của trình duyệt với thẻ html
  var nameEl = this.querySelector(".name");
  var name = nameEl.value;
  if (!name) {
    alert("Vui lòng nhập tên");
    return;
  }
  content.innerHTML += `<h3>${name}</h3>`;
  nameEl.value = "";
});
