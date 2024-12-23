//Year-Month-Date Hour:Minute:Second
const date = new Date("2024/06/06 18:30:00");
// console.dir(date);
// console.log(date.toUTCString());
//Các phương thức xử lý
// console.log(date.getDay()); //Trả về thứ trong tuần (Bắt đầu từ 0 (Chủ nhật))
// console.log(date.getDate()); //Trả về ngày
// console.log(date.getMonth()); //Trả về tháng (Bắt đầu từ 0)
// console.log(date.getFullYear()); //Trả về năm
// console.log(date.getHours()); //Trả về giờ
// console.log(date.getMinutes()); //Trả về phút
// console.log(date.getSeconds()); //Trả về giây
// console.log(date.getMilliseconds()); //Trả về mili giây
console.log(date.getTime()); //Trả về số mili giây từ 1970 tới thời điểm của đối tượng date
