// class Person {
//   #name = "Hello F8";
//   static #email = "hoangan.web@gmail.com";
//   //getter
//   get name() {
//     return this.#name;
//   }
//   static get email() {
//     return this.#email;
//   }
//   //setter
//   set name(value) {
//     this.#name = value;
//   }
//   static set email(value) {
//     this.#email = value;
//   }
// }

// const person = new Person();
// person.name = "Hoàng An F8";
// console.log(person.name);
// Person.email = "contact@fullstack.edu.vn";
// console.log(Person.email);

const body = document.body;
class Counter {
  constructor() {
    this.count = 0;
  }
  handleClick() {
    // console.log(this);
    // console.log(this.count);
    this.count++;
    this.render();
  }
  render() {
    body.innerHTML = `<h1>Count: ${this.count}</h1>
    <button class="btn">Click me</button>
    `;
    body
      .querySelector(".btn")
      .addEventListener("click", this.handleClick.bind(this));
  }
}
new Counter().render();
