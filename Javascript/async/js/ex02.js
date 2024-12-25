//Xử lý lỗi ngoại lệ
/*
try {
    Code
} catch(e) {
    //e => object
} finally {

}
Thứ tự chạy: 
- B1: Chạy đoạn code trong try
- B2: Nếu xảy ra lỗi => Chạy catch
- B3: Chạy finally
*/
console.log("getA");
try {
  //   const a = undefined;
  //   a.getA(); //Gặp lỗi
  //   const a;
  console.log("Handle try");
  const a = 10;
  const b = 0;
  if (b === 0) {
    throw new Error("Không được chia cho số 0");
  }
  const c = a / b;
  document.body.append(c);
} catch (e) {
  document.body.append(e.message);
} finally {
  console.log("Hoàn thành");
}
console.log("getB");
