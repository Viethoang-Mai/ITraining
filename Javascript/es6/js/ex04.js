//Enhanced Literal Object

const username = "Hoàng An";
const email = "hoangan.web@gmail.com";
let age;

// const getName = function () {
//   return this.username;
// };

const user = {
  username,
  email,
  age,
  getName() {
    return this.username;
  },
};
console.log(user);
console.log(user.getName());

//Spread Operator
// const oldObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const newObj = {
//   position: "Teacher",
//   ...oldObj,
// };
// console.log(newObj);

// let form = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const setForm = (data) => {
//   form = data;
// };
// setForm({ ...form, email: "contact@fullstack.edu.vn" });
// console.log(form);

let state = {
  message: "Học lập trình không khó",
  productList: ["Sản phẩm 1"],
};
const setState = (data) => {
  state = data;
};

const newProduct = "Sản phẩm 2";
setState({ ...state, productList: [...state.productList, newProduct] });
console.log(state);
