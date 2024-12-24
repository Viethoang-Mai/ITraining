var content = document.querySelector(".content");
// content.style = "color: red; font-style: italic";
// console.log(content.style);
// content.style.color = "red";
// content.style.fontStyle = "italic";
// content.style.backgroundColor = "grey";

// content.style.color = null;

// var css = {
//   color: "red",
//   fontStyle: "italic",
//   fontWeight: "bold",
//   backgroundImage: `url("https://picsum.photos/536/354")`,
// };
// Object.assign(content.style, css);

var content = document.querySelector(".content");
var btnIn = document.querySelector(".in-btn");
var btnOut = document.querySelector(".out-btn");
var duration = content.dataset.duration ?? 200; //500ms
var animationStatus = false;
if (
  content.dataset.animation === "true" ||
  content.dataset.animation === "false"
) {
  animationStatus = content.dataset.animation === "true";
}

content.style.transition = `opacity ${duration}ms`;
btnOut.addEventListener("click", function () {
  if (animationStatus) {
    content.style.opacity = 0;
    setTimeout(function () {
      content.style.display = "none";
    }, duration);
    return;
  }
  content.style.display = "none";
});
btnIn.addEventListener("click", function () {
  content.style.display = null;
  if (animationStatus) {
    setTimeout(function () {
      content.style.opacity = 1;
    }, duration / 2);
    return;
  }
});
