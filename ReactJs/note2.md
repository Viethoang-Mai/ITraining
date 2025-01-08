# Khóa ReactJS: Tất Tật Về Lý Thuyết

## 1. Giới Thiệu ReactJS

ReactJS là thư viện JavaScript được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng (UI).

### Đặc điểm chính:

-   **Component-Based:** UI được xây dựng bằng các thành phần tự nhiên (components).
-   **Virtual DOM:** Tối ưu hiệu năng.
-   **Declarative:** Dễ dàng mô tả trạng thái UI.
-   **Hỗ trợ SEO** nhờ SSR (Server-Side Rendering).

---

## 2. JSX (JavaScript XML)

JSX là một cách viết cấu trúc giao diện trong React, kết hợp JavaScript và HTML.
//JSX = JavaScript + XML ==> Viết XML trong JS

//Quá trình biên dịch JSX của React

// JSX ==> Javascript Compiler (Babel, SWC) ==> React Element ==> Node Element ==> DOM Browser

### Cú pháp:

```jsx
const element = <h1>Hello, world!</h1>;
```

### Lưu ý:

-   Mỗi thẻ JSX chỉ chứa được **một thẻ cha**.
-   Dùng `{}` để chèn JavaScript.

---

## 3. Components & Props

### Component:

Component được chia thành 2 loại:

-   **Functional Components**
-   **Class Components**

**Functional Component:**

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

**Class Component:**

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

### Props:

-   Props truyền dữ liệu từ cha xuống con
-   Props không thể thay đổi trong nội bộ component
-   Muốn thay đổi dữ liệu trong nội bộ component ==> Dùng state

```jsx
<Welcome name="John" />
```

---

## 4. State & Ref & Lifecycle

### State:

State là gì?

-   Trạng thái của 1 component
-   Chứa dữ liệu của 1 component
-   Khi state thay đổi ==> Component bị re-render ==> UI Update
-   Chỉ hoạt động trong 1 component (Truyền state sang component khác ==> Dùng props hoặc context)
-   Không thay đổi trực tiếp state mà phải thông qua hàm thay đổi

Lưu ý trong Functional Component

-   Props
-   JSX
    ==> Áp dụng để xây dựng trang tĩnh
    Muốn sử dụng các thành phần: state, lifecycle ==> Dùng class component
    Tuy nhiên, ở phiên bản React 16, functional có thêm tính năng gọi là Hook (Cho phép làm việc với các chức năng React thông qua functional component)

**Sử dụng state trong class component:**

```jsx
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```

### Ref

1. Tham chiếu đến kết quả gần nhất ==> Không làm thay đổi giá trị qua mỗi lần re-render

-   Khởi tạo ref mới
-   Update ref
-   Khi component re-render ==> Giữ kết quả gần nhất
-   Lưu ý: Không bị re-render khi ref thay đổi

2. Tham chiếu đến các element để trả về DOM

```jsx
import { useRef, useEffect, useState } from "react";
export default function App() {
    const [random, setRandom] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef(null);
    const obj = {
        value: 0,
    };
    const handleClick = () => {
        setRandom(Math.random());
        obj.value++;
        countRef.current++;
    };
    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();
        inputRef.current.addEventListener("blur", () => {
            console.log("Hello ae F8");
        });
        console.log(buttonRef.current);
    }, []);
    return (
        <div>
            <input type="text" placeholder="Vui lòng nhập..." ref={inputRef} />
            <button onClick={handleClick}>Click me</button>
            <ul>
                <li
                    ref={(element) => {
                        console.log(element);
                    }}
                >
                    Item 1
                </li>
                <li
                    ref={(element) => {
                        console.log(element);
                    }}
                >
                    Item 2
                </li>
                <li
                    ref={(element) => {
                        console.log(element);
                    }}
                >
                    Item 3
                </li>
            </ul>
            <h3>{random}</h3>
            <h3>{obj.value}</h3>
            <h3>{countRef.current}</h3>
        </div>
    );
}
```

### Lifecycle:

-   **Mounting:** Constructor, render, componentDidMount.
-   **Updating:** ShouldComponentUpdate, render, componentDidUpdate.
-   **Unmounting:** componentWillUnmount.

---

## 5. Event Handling

Sử lý sự kiện trong React.

```jsx
function ClickMe() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return <button onClick={handleClick}>Click Me</button>;
}
```

---

## 6. React Router

# Router

-   Browser Router ==> Có sự hỗ trợ của server (Rewrite URL)
-   Hash Router ==> Không cần hỗ trợ của server (Thông qua #)

## Nested Router

-   Kỹ thuật gom nhóm Route
-   Dễ quản lý, thay đổi
-   Dễ dàng tạo layout cho 1 nhóm
-   Dễ dàng private

## Private Router

-   Bảo vệ Router khỏi các truy cập trái phép
-   Bảo vệ bằng 1 hoặc 1 số component ==> gọi Middleware

Request ==> Router ==> Middleware ==> Component

```jsx
import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import SuspenseWrapper from "../components/SuspenseWrapper";
import Contact from "../pages/Contact";
import ThankYou from "../pages/ThankYou";

export const privateRouter = (
    <Route element={<MainLayout />}>
        <Route element={<AuthMiddleware />}>
            <Route
                path="/gioi-thieu"
                element={<SuspenseWrapper path="../pages/About" />}
            />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
        </Route>
    </Route>
);
```

### Cài đặt:

```bash
npm install react-router-dom
```

### Cú pháp cơ bản:

```jsx
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}
```

---

## 7. Hooks:

Hook là gì?

-   Hàm đặc biệt của React (Bắt đầu bằng từ khóa use)
-   Chỉ được gọi trong functional component và phải gọi ở cấp đầu tiên của functional

```jsx
import { , useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

### useState:

```jsx
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

### useEffect:

Hook useEffect(callback, dependencies?)

-   Callback: Hàm thực thi
-   dependencies: Điều kiện để callback thực thi

*   [] ==> Callback chỉ thực thi sau lần re-render đầu tiên
*   null | undefined ==> Re-render ==> Thực thi
*   [var1, var2, var3,...] ==> 1 trong các biến thay đổi ==> Thực thi

Các bước hoạt động của useEffect

1. State thay đổi
2. Component Re-render
3. Update UI
4. Cleanup (Nếu có) ==> Hàm được trả về từ callback của useEffect
5. Callback useEffect

useLayoutEffect

1. State thay đổi
2. Component Re-render
3. Cleanup
4. Callback Effect
5. Update UI
   \*/

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <p>Time: {time}s</p>;
}
```

### React.memo()- HOC(Higher-Order Component)

-   Xử lí 1 component re render không hợp lí
-   dựa vảo toán tử === để xem có prop của component con nào thay đổi không, nếu ko thì ko re-render

```jsx
import React, { memo } from "react";
function Counter() {
    return (
        <div>
            <p>memo</p>
        </div>
    );
}

memo(Counter);
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <Counter />
        </div>
    );
}
```

### useCallback()

-
-   giúp tránh tạo ra các fuc mới ko cần thiết

```jsx
import React, { useCallback, useState, memo } from "react";
function Counter({ handleClick }) {
    return (
        <div>
            <p>memo</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

memo(Counter);
function App() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, []);
    return (
        <div>
            <p>Count: {count}</p>
            <Counter handleClick={handleClick} />
        </div>
    );
}
```

### useMemo()

-   giúp tránh thực hiện lại 1 logic không cần thiết

```jsx
import React, { useMemo } from "react";
function App() {
    const fibo=(n) => {
        if (n < 2) {
            return n;
        }
        return fibo(n - 1) + fibo(n - 2);
    }
    const res= useMemo(() => fibo(10),[])
    const [count, setCount] = useState(0);
    const handleClick = useMemo(() => {
        setCount(count + 1);
    }, [])
    return (
        <div></div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
```

---

## 8. Quản Lý State (Redux, Context)

### Redux:

# Vấn đề khi sử dụng State

-   Trong 1 component có quá nhiều State ==> Logic xử lý phức tạp
-   Tái sử dụng lại logic cập nhật state để áp dụng cho nhiều component
-   Triển khai State Global ==> Khó quản lý

# Triển khai hệ thống quản lý Global State

-   State chỉ ở 1 component
-   Chia sẻ dữ liệu giữa các component ==> Đẩy lên component cha
-   Muốn có 1 state dùng cho toàn bộ project

*   Thư viện: Redux, zustand,...
*   Dùng context + useReducer

## Khái niệm

-   Thư viện hỗ trợ quản lý Global State
-   Quản lý theo Reducer (Hàm reducer)
-   Không chỉ áp dụng cho React, mà áp dụng cho tất cả ứng dụng JS (VanillaJS, React, Vue, Angular, React Native,...)

## Học những gì trong Redux?

-   Redux Core --> Chỉ phục vụ mục đích học tập
-   Redux Toolkit --> Phải học Redux Core trước, áp dụng khi đi làm
-   Redux Middleware (Redux Thunk, Redux Saga)

**Store:**

```jsx
import { createStore } from "redux";

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        default:
            return state;
    }
}

const store = createStore(counterReducer);
```

**Provider:**

```jsx
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
```

**Connect Component:**

```jsx
import { connect } from "react-redux";

function Counter({ count, dispatch }) {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.count,
});

export default connect(mapStateToProps)(Counter);
```

### Context:

Truyền dữ liệu trong cây component.
Bước 1: Khởi tạo đối tượng Context
React.createContext

Bước 2: Bọc component Provider của Context vào các component muốn chia sẻ dữ liệu

Bước 3: Tại Component muốn lấy dữ liệu ==> Sử dụng Hook useContext để lấy dữ liệu từ Context

```jsx
import { createContext, useState } from "react";
import HelloWorld from "./components/HelloWorld";
import HeaderTop from "./components/HeaderTop";
export const AppContext = createContext();
export default function App() {
    const [value, setValue] = useState("Hello");
    const [theme, setTheme] = useState("light");
    return (
        <AppContext.Provider
            value={{
                value,
                setValue,
                theme,
                setTheme,
            }}
        >
            <HeaderTop />
            <HelloWorld />
        </AppContext.Provider>
    );
}
```

---

## 9. Tích Hợp API

### Fetch Data:

```jsx
import React, { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

## NPM NPX YARN

### NPM:

-   Project scope:

    -   npm install react ==> dependencies
    -   npm i react ==> dependencies
    -   npm uninstall react

    -   npm install --save-dev react-dom ==> devDependencies
    -   npm i -D react-dom ==> devDependencies
    -   npm uninstall --save-dev react-dom

-   Global scope
    -   npm install -global create-react-app
    -   npm i -g create-react-app
    -   npm uninstall -g create-react-app

### NPX:

-   Khi cài NodeJS -> kèm theo NPM, NPX

---
