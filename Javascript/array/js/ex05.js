/*
Vòng lặp reduce

Nguyên tắc reduce
Ouput của lần lặp trước sẽ là Input  của lần lặp sau
--> Giống bài toán tính tổngs (Mỗi lần lặp giá trị tổng thay đổi)

Cú pháp
reduce(callback, initalValue)

callback sẽ có 3 tham số
- prevValue
TH1: Không có initialValue
+ prevValue mặc định sẽ là phần tử mảng đầu tiên
+ prevValue của lần lặp sau sẽ là return của lần lặp trước
+ Số lần lặp sẽ giảm đi 1

TH2: Có initialValue
+ prevValue mặc định sẽ lấy initialValue
+ prevValue của lần lặp sau sẽ là return của lần lặp trước

- currentValue --> Duyệt qua từng phần tử của mảng
- index --> Index từng phần tử

initialValue: Giá trị khởi tạo

Giá trị của hàm reduce sẽ là return lần cuối cùng
*/
var numbers = [5, 10, 15, 20, 25, 30];
// var result = numbers.reduce(function (prevValue, current) {
//   console.log(prevValue, current);
//   return current;
// }, "F8");
// console.log(result);

//total = total + i

// var result = numbers.reduce(function (total, number) {
//   console.log(total, number);
//   return total + number;
// }, 0);
// console.log(result);

//Bài 1: Tìm giá trị lớn nhất
var numbers = [5, 2, 9, 1, 8];
var result = numbers.reduce(function (max, current) {
  return max < current ? current : max;
});
console.log(result);

//Bài 2:

//Tất cả học viên
var students = ["An", "Tâm", "Tùng", "Quý", "Hải"];

//Học viên đi học
var studentsActive = ["An", "Quý"];

//Tìm học viên nghỉ học (Reduce)
var studentsInactive = students.reduce(function (prev, current) {
  if (!studentsActive.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(studentsInactive);

//Bài 3:
var students = ["An", "Tâm", "Tùng", "Quý", "Hải", "Tùng"];
//Lọc trùng

var result = students.reduce(function (prev, current) {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(result);

//Bài 4: Làm phẳng mảng
var numbers = [0, 1, [2, 3], [4, 5, [6, 7, [4, 5, [7, 8]]]]];

// ==> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(numbers);
function flatArr(arr) {
  var result = arr.reduce(function (prev, current) {
    if (Array.isArray(current)) {
      return prev.concat(flatArr(current));
    }
    return prev.concat(current);
  }, []);
  return result;
}

console.log(flatArr(numbers));

// var numbers = [0, 1, [2, 3], [4, 5, [6, 7, [4, 5, [7, 8]]]]];

// var flatArray = numbers.reduce((prev, curr) => {
//   if (Array.isArray(curr)) {
//     const flatArrayChild = curr.reduce((prevChild, currChild) => {
//       return prevChild.concat(currChild);
//     }, []);
//     return prev.concat(...flatArrayChild);
//   } else {
//     return prev.concat(curr);
//   }
// }, []);
// console.log(flatArray);
