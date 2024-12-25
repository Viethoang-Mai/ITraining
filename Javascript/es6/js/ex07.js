// const { title, subTitle } = require("../modules/home");
// console.log("CommonJS");
// console.log(title);
// console.log(subTitle);

// console.log(require("../modules/home").title);

// import home from "../modules/home.js";
// const { title, subTitle } = home;
// console.log(title);
// console.log(subTitle);

// import getHome, { title as title2, subTitle } from "../modules/home.js";
//Điều kiện import named: Đưa vào object
// console.log(title);
// console.log(subTitle);
// console.log(title2);
// console.log(subTitle);
// getHome();

// import * as home from "../modules/home.js";
// console.log(home);

// import getHome from "../modules/home.js";
// import getProducts from "../modules/products.js";
// import getPosts from "../modules/posts.js";

//Import index.js
import { getHome, getPosts, getProducts } from "../modules/index.js";
getHome();
getPosts();
getProducts();
