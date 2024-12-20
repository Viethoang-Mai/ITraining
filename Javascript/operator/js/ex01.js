/*
Toán tử - Biểu thức
toán tử + toán hạng = biểu thức
Ví dụ: a = b + c

1. Toán tử số học
+, -, *, /, %, **
++, --
*/
// var a = 10;
// var b = 2;
// var c = a ** b;
// console.log(c);

// var count = 0;
// count++;
// ++count;
// count--;
// --count;
// console.log(count);

// var count = 1;
// var result = count++;
// var result = ++count;
// console.log(`Result: ${result}`);
// console.log(`Count: ${count}`);

// var result = count++ + ++count + count++ + 10;
// console.log(result);

// var a = 10;
// var b = "20";
// var c = +a + +b;
// console.log(c);

/*
2. Toán tử gán
=, +=, *=, /=, %=, -=
*/
// var a = 10;
// a = a + 5;
// a += 5;
// console.log(a);

/*
3. Toán tử so sánh
>, <, >=, <=, == (Chỉ so sánh giá trị), === (So sánh giá trị và kiểu dữ liệu), !=, !==

--> Trả về kiểu dữ liệu boolean (true, false)

gia tri false :0, "", undefined, null, false, NaN
/*



4. Toán tử kết hợp
- &&: Và
- ||: Hoặc
- !: Phủ định
Thứ tự ưu tiên: && -> || -> !

var res= "c" && "d" && "e";
console.log(res);

5. Toán tử 3 ngôi

Gán b = 20 nếu a >= 10, ngược lại b = 0

Cú pháp: 
dieukien ? giatridung : giatrisai
*/
// var a = 10;
// var b = a >= 10 ? 20 : 0;
// console.log(b);

// var a = 10;
// var b = 20;
// var c = 30;
// var total = a + b + 10 + (b >= 20 ? 5 : 10) + c;
// console.log(total);

// var a = 10;
// document.write(`${a >= 10 ? "Thỏa mãn điều kiện" : "Sai rồi"}`);

/*
6. Toán nullish (??)
Cú pháp: bien ?? giatri
Nếu bien là undefined hoặc null --> Lấy phía sau ??, ngược lại lấy phía trước ??
*/
var a;
// var b = a ?? "Không xác định";
// console.log(b);
var b = a === null || a === undefined ? "Không xác định" : a;
console.log(b);

/*
6.1 Toán tử chuỗi - String " + "
const lastName = "Oanh";
cost firstName = "Doan";
number + string = string
string + number = string

const fullName = firstName + " " + lastName;


console.log("3" + 5);
console.log(5 + "3");
*/

/*
7. falsy
Trong trường hợp cần chuyển về boolean mà giá trị chuyển về false --> falsy
0, "", undefined, null, false, NaN

8. truthy
Trong trường hợp cần chuyển về boolean mà giá trị chuyển về true --> truthy
Các trường hợp còn lại
*/
// var a = "false";
// var b = a ? "Đúng" : "Sai";
// console.log(b);

/*
9. &&
Tìm falsy
*/
// var a = 10;
// var b = 0;
// var c = a && b && "F8";
// console.log(c);

/*
10. ||
Tìm truthy
*/
var a = 10;
var b = 0;
var c = a || b || "F8";
console.log(c);
