/*
Web Component: Kỹ thuật tách các thành phần thành các thẻ html riêng biệt để thuận tiện trong việc tái sử dụng
*/
// console.dir(HTMLElement);
// var h1 = document.createElement("h1");
// console.dir(h1);
//HTMLHeadingElement --> HTMLElement ->  Element --> Node --> EventTarget
// h1.addEventListener('');
// HTMLDivElement.prototype.css = function (input = {}) {
//   Object.assign(this.style, input);
// };

// document.querySelector(".content").css({
//   color: "red",
// });

//Các bước để tạo ra 1 component

//B1. Tạo ra 1 constructor / class kế thừa từ HTMLElement

//B2. Đưa constructor vào phương thức customElement.define()

// class HelloWorld extends HTMLElement {
//   static observedAttributes = ["data-id"];
//   connectedCallback() {
//     console.log("Component được đưa vào DOM");
//     var _this = this;
//     this.innerHTML = "<h1>Học lập trình không khó</h1>";
//     this.querySelector("h1").addEventListener("click", function () {
//       _this.setAttribute("data-id", Math.random());
//     });
//   }
//   disconnectedCallback() {
//     console.log("Component được loại bỏ khỏi DOM");
//   }
//   attributeChangedCallback(name, oldValue, newValue) {
//     //Khi thuộc tính thay đổi
//     console.log("Thuộc tính thay đổi");
//     console.log(name, oldValue, newValue);
//   }
// }
// customElements.define("hello-world", HelloWorld);

// var helloWorldEl = document.createElement("hello-world");
// var btn = document.querySelector("button");
// var isShow = false;
// btn.addEventListener("click", function () {
//   if (!isShow) {
//     document.body.append(helloWorldEl);
//     isShow = true;
//   } else {
//     helloWorldEl.remove();
//     isShow = false;
//   }
// });

customElements.define(
  "todo-app",
  class extends HTMLElement {
    connectedCallback() {
      var shadow = this.attachShadow({
        mode: "open",
      });
      this.render(shadow);
      this.initialStyle(shadow);
      this.addEvent(shadow);
      //   var loadEvent = new Event("todo-loaded");
      //   var ul = shadow.querySelector("ul");
      //   loadEvent.todoCount = ul.children.length;
      //   this.dispatchEvent(loadEvent);
    }
    render(shadow) {
      var html = `
      <div class="todo-app">
        <ul>
            <li>Công việc 1</li>
            <li>Công việc 2</li>
            <li>Công việc 3</li>
        </ul>
        <input type="text" placeholder="Tên..."/>
        <button>Thêm</button>
      </div>
      `;
      shadow.innerHTML = this.innerHTML + html;
    }
    initialStyle(shadow) {
      var style = document.createElement("style");
      style.textContent = `
      .todo-app {
        background: ${this.dataset.bg};
        padding: 15px;
      }
      `;
      shadow.append(style);
    }
    addEvent(shadow) {
      var btn = shadow.querySelector("button");
      var _this = this;
      btn.addEventListener("click", function () {
        _this.handleAdd(shadow);
      });
    }
    handleAdd(shadow) {
      var ul = shadow.querySelector("ul");
      var input = shadow.querySelector("input");
      var value = input.value;
      if (!value) {
        alert("Vui lòng nhập tên công việc");
        return;
      }
      var li = document.createElement("li");
      li.innerText = value;
      ul.append(li);
      input.value = "";

      //Gửi event vào component todo-app để bất kỳ nơi nào cũng lắng nghe được
      //Tạo event tên là todo-change --> Gán vào thẻ todo-app
      var todoChangeEvent = new Event("todo-change");
      todoChangeEvent.todoCount = ul.children.length;
      this.dispatchEvent(todoChangeEvent);
    }
  }
);

customElements.define(
  "todo-count",
  class extends HTMLElement {
    connectedCallback() {
      var shadow = this.attachShadow({ mode: "open" });
      var todoAppEl = document.querySelector("todo-app");

      shadow.innerHTML = `<h3>Count: <span>${
        todoAppEl.shadowRoot.querySelector("ul").children.length
      }</span></h3>`;

      todoAppEl.addEventListener("todo-change", function (e) {
        shadow.querySelector("span").innerText = e.todoCount;
      });
    }
  }
);

var todoAppEl = document.querySelector("todo-app");
todoAppEl.addEventListener("todo-change", function (e) {
  console.log(e.todoCount);
});

//Shadow DOM:

//Document ==> Host (Element) ==> Root ==> Content

// var content = document.querySelector(".content");
// var shadow = content.attachShadow({
//   mode: "open",
// });
// shadow.innerHTML = content.innerHTML;
// content.innerText = "";
// var h1 = document.createElement("h1");
// h1.innerText = "Học lập trình không khó";
// shadow.prepend(h1);
// var style = document.createElement("style");
// style.textContent = `
// h1 {
//     color: red;
// }
// `;
// shadow.append(style);
