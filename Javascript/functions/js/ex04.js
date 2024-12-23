//Callback: Xử lý các tác vụ bất đồng bộ
/*
Chạy đồng thời
*/
var getA = function (callback) {
  setTimeout(function () {
    console.log("getA");
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};
var getB = function (callback) {
  setTimeout(function () {
    console.log("getB");
    if (typeof callback === "function") {
      callback();
    }
  }, 500);
};
var getC = function (text) {
  setTimeout(function () {
    console.log("getC");
    console.log(text);
  }, 1500);
};

getA(function () {
  getB(function () {
    getC("F8");
  });
});
//Callback hell
