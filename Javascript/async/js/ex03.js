/*
Async function lúc nào cũng trả về promise
*/
//Decralation Function
async function demo1() {
  return "A";
}
//Expression Function
const demo2 = async () => {
  return "B";
};

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Học lập trình không khó")
      reject("Error Network");
    }, 1000);
  });
};
let message = "F8";
const children = new Promise((resolve) => {
  setTimeout(() => {
    resolve("getA");
  }, 1000);
});
const response = {
  getA() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          getAll: () => {
            return children;
          },
        });
      }, 1000);
    });
  },
};
const showData = async () => {
  //await phải đặt trước 1 promise để then promise (1 lần await là 1 lần then)
  try {
    const res = await response.getA();
    const data = await res.getAll();
    console.log(data);
    // const data = await (await response.getA()).getAll();
    // console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Đã xong");
  }
};
// showData();

response
  .getA()
  .then((res) => {
    return res.getAll();
  })
  .then((data) => {
    console.log(data);
  });

/*
const res = await response.getA();
const data = await res.getAll();
*/
