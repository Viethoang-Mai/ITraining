//Xây dựng hàm callback có đối s

//rest parameter
function something(callback, ...args) {
  console.log("Something");
  if (typeof callback === "function") {
    callback(...args); //spread operator
  }
}
something(
  function (a, b, c) {
    console.log("F8");
    console.log(a, b, c);
  },
  "JS",
  "React",
  "PHP",
);

// [a, b, c] --> fn(...[a, b, c])
