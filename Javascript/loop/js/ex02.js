/*
while (dieukien) {
    Câu lệnh
}
B1: Chương trình sẽ kiểm tra điều kiện
+ Đúng --> Chuyển qua bước 2
+ Sai --> Bỏ qua
Bước 2: Chương trình thực thi câu lệnh trong vòng lặp
Bước 3: Quay lại bước 1
Bước 4: Khi nào điều kiện sai --> Thoát vòng lặp

Các tình huồng dùng while: Không xác định số lần lặp
- Tìm số lần xuất hiện của 1 từ khóa trong 1 đoạn văn bản
- Xác định phần tử DOM theo 1 selector nào đó (Có phân cấp)
...
*/
// var i = 1;
// while (i <= 10) {
//   console.log(`i = ${i}`);
//   i++;
// }
// var i = 1;
// do {
//   console.log(`i = ${i}`);
//   i++;
// } while (i <= 10);

//Kiểm tra số nguyên tố
/*
- > 1
- Chỉ chia hết cho 1 và chính nó
*/
var n = 10;
var isPrime = true;
if (n <= 1 || n % 1 !== 0) {
  isPrime = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  //   var i = 2;
  //   while (n % i === 0) {
  //     i++;
  //     isPrime = false;
  //   }
}
if (isPrime) {
  console.log("Số nguyên tố");
} else {
  console.log("Không phải số nguyên tố");
}
// --> Kỹ thuật đặt cờ hiệu

for (var i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`i = ${i}`);
}

// break: Thoát vòng lặp
// continue: Bỏ qua lần lặp
