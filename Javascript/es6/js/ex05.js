//Classes

// class User {
//   //Thuộc tính
//   name; //public
//   email; //public
//   #data = "Hello"; //private
//   //Phương thức
//   constructor(name, email) {
//     console.log("Constructor User");
//     this.name = name;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getEmail = () => {
//     return this.email;
//   };
//   getData() {
//     return this.#data;
//   }
// }

// class Auth extends User {
//   constructor(name, email) {
//     console.log("Auth Constructor");
//     super(name, email); //Gọi hàm constructor() của class cha
//   }
//   getInfo() {
//     return this.name + this.email;
//   }
// }
// const auth = new Auth("Hoàng An", "hoangan.web@gmail.com");
// console.log(auth.getInfo());

// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user.name);
// console.log(user.getData());

//Static method, static property
class Person {
    //none-static property
    email = "hoangan.web@gmail.com";
    //static property
    static name = "Hoàng An";
    //static method
    static getEmail() {
        console.log(this);
        return "hoangan.web@gmail.com";
    }
    //Non-static method
    getData() {
        console.log(this);
        return "Hello";
    }
}
// console.log(Person.name);
// console.log(new Person().getEmail());
console.log(Person.getEmail());
// console.log(Person.prototype);
new Person().getData();

/*
Tìm hiểu: 
- setter, getter
- apply, bind, call
- javascript module
+ commonjs (require)
+ es6 module (export, import)
- promise (chaining)

a().b().c()
*/
