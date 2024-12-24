var checkAllEl = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
var btnDelete = document.querySelector(".btn-delete");
checkAllEl.addEventListener("change", function () {
  var status = this.checked;
  checkItems.forEach(function (item) {
    item.checked = status;
  });
  if (status) {
    btnDelete.children[0].innerText = checkItems.length;
    btnDelete.removeAttribute("disabled");
    count = checkItems.length;
  } else {
    btnDelete.children[0].innerText = 0;
    btnDelete.setAttribute("disabled", true);
    count = 0;
  }
});
var count = 0;
checkItems.forEach(function (item) {
  item.addEventListener("change", function () {
    if (this.checked) {
      count++;
    } else {
      count--;
    }
    btnDelete.children[0].innerText = count;
    if (count > 0) {
      btnDelete.removeAttribute("disabled");
    } else {
      btnDelete.setAttribute("disabled", true);
    }
    if (checkItems.length === count) {
      checkAllEl.checked = true;
    } else {
      checkAllEl.checked = false;
    }
  });
});
