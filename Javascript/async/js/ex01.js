// setTimeout(function () {
//   console.log("F8");
// }, 0);
// console.log("Hoàng An F8");

//setTimeout, setInterval, fetch, event dom,...

/*
3 cách: 
- Dùng callback ==> Xảy ra tình trạng callback hell
- Dùng Promise ==> Bổ sung ES6
- Dùng Async Await ==> Bổ sung ES7
*/

//Promise: Object dùng để xử lý các tác vụ bất đồng bộ
/*
Trạng thái Promise
- pending ==> Chờ xử lý
- fulfilled ==> Hoàn thành
- reject ==> Thất bại
*/

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const data = "Data Users";
            //resolve sẽ là 1 hàm, đối số của nó sẽ là dữ liệu cần trả về
            resolve(data);
            //reject là 1 hàm, đối số của nó sẽ là thông báo lỗi cần trả về
            //reject sẽ được gọi nếu muốn trả về lỗi
            reject("Không download được");
        }, 2000);
    });
};
const showMessage = () => {
    console.log("Lấy dữ liệu thành công");
};

// getUsers()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Đã xong");
//   });

//Promise Chaining
// getUsers()
//   .then((data) => {
//     console.log(data);
//     return data + " F8";
//   })
//   .then((data) => {
//     console.log(data);
//     return data + "F8";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getA = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("get A");
//     }, 1000);
//   });
// const getB = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("get B");
//     }, 500);
//   });
// const getC = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("get C");
//     }, 1500);
//   });
// getA()
//   .then((data) => {
//     console.log(data);
//     return getB();
//   })
//   .then((data) => {
//     console.log(data);
//     // return getC();
//     return "F8";
//   })
//   .then((data) => {
//     console.log(data);
//   });

const users = [
    {
        id: 1,
        name: "User 1",
        salary: 1000,
    },
    {
        id: 2,
        name: "User 2",
        salary: 2000,
    },
    {
        id: 3,
        name: "User 3",
        salary: 3000,
    },
    {
        id: 4,
        name: "User 4",
        salary: 4000,
    },
];
const getUser = (userId) =>
    new Promise((resolve) => {
        setTimeout(() => {
            const user = users.find(({ id }) => id === userId);
            resolve(user);
        }, 1000);
    });
const arr = [1, 2, 4];
// let total = 0;
// const getTotal = function () {
//   let check = false;
//   for (let index = 0; index < arr.length; index++) {
//     const userId = arr[index];
//     if (index === arr.length - 1) {
//       check = true;
//     }
//     const userPromise = getUser(userId).then((data) => {
//       total += data.salary;
//       //Khi nào vòng lặp chạy đến phần tử cuối cùng
//       if (check) {
//         return total;
//       }
//     });
//     if (check) {
//       return userPromise;
//     }
//   }
// };
// getTotal().then((data) => {
//   console.log(data);
// });

//Yêu cầu: Tính tổng thu nhập của tất cả users
//Lưu ý: Không dùng async await, Promise.all

//Promise.all(promiseArray).then(callback)
const promiseArray = arr.map((userId) => getUser(userId));
let total = 0;
const totalSalary = Promise.all(promiseArray).then((users) => {
    console.log(users);
    total = users.reduce((prev, { salary }) => {
        return prev + salary;
    }, 0);
});

//Exception (try catch)
//Async Await
