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
//     console.log(prevValue, current);
//     return current;
// }, "Mai");
// console.log(result);

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
// const arr = students.reduce((pre, cur) => {
//     if (!studentsActive.includes(cur)) {
//         pre.push(cur);
//     }
//     return pre;
// }, []);
// console.log(arr);

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
const flatArr = (arr) => {
    return arr.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            return prev.concat(flatArr(curr));
        }
        return prev.concat(curr);
    }, []);
};

console.log(flatArr(numbers));
