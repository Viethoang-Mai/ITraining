var root = document.querySelector("#root");
// var element = F8.createElement(
//   "div",
//   {
//     className: "content",
//     id: "content-1",
//   },
//   F8.createElement("h1", {}, "Học lập trình không khó"),
//   F8.createElement("h2", {}, "Học Javascript"),
//   F8.createElement(
//     "button",
//     {
//       type: "button",
//       className: "btn",
//       onClick: function () {
//         console.log("ok");
//       },
//     },
//     "Click me"
//   )
// );
var h1 = F8.createElement("h1", {}, 0);
var element = F8.createElement(
  "div",
  {
    className: "couter-app",
  },
  h1,
  F8.createElement(
    "button",
    {
      type: "button",
      onClick: function () {
        h1.innerText++;
      },
    },
    "+"
  )
);
F8DOM.render(root, element);
