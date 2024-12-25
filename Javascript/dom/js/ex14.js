var root = document.querySelector("#root");
// h1 = document.createElement("h1");
// h1.innerText = "Hello anh em: ";

// var textNode = document.createTextNode(0);
// h1.append(textNode);

// root.append(h1);

// var button = document.createElement("button");
// button.innerText = "Click me";
// root.append(button);

// button.addEventListener("click", function () {
//   textNode.data++;
// });

// //Comment Node
// var comment = document.createComment("Xin chào F8");
// root.append(comment);

// //Clone Node
// var h2 = document.createElement("h2");
// h2.innerText = "Học Javascript";
// root.append(h2);
// root.append(h2.cloneNode(true));
// root.append(h2.cloneNode(true));
// root.append(h2.cloneNode(true));
// root.append(h2.cloneNode(true));
// root.append(h2.cloneNode(true));

var users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];

var render = function () {
  var html = users
    .map(function (user) {
      return `<h3>${
        user.name
        // .replaceAll("<", "&lt;")
        // .replaceAll(">", "&gt;")
      }</h3>`;
    })
    .join("");
  var form = `<input type="text" class="name" placeholder="Nhập tên..." /> <button>Thêm</button>`;
  root.innerHTML = form + html;
};
render();

var btn = root.querySelector("button");
var input = root.querySelector("input");
btn.addEventListener("click", function () {
  var name = input.value;
  users.push({
    id: users.length,
    name: name,
  });
  render();
});

// <img onerror="window.location.href='https://fullstack.edu.vn'" src="abc" />
//

//Class
class User {
  //Thuộc tính
  constructor() {
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
  }
  //Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

class Auth extends User {
  getProfile() {
    const user = {
      name: this.getName(),
      email: this.getEmail(),
    };
    return user;
  }
}

//Tạo object
var auth = new Auth();
console.log(auth.getProfile());
console.log(auth.name);

/*
Web Component: 
- HTMLElement
- Custom Element
- callback lifecycle
- Shadow DOM
*/

class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `Xin chào anh em F8`;
  }
}
customElements.define("hello-world", HelloWorld);
