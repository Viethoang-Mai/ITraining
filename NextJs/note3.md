# Luồng của NextJS

Request ==> Middleware ==> Root Layout ==> Layout ==> Page ==> Response

Component mặc định của NextJS là Server Component (SSR)

## Lưu ý khi làm việc với Middleware

-   Tiếp nhận request ==> xử lý ==> response ==> Trả về client

-   Tiếp nhận request ==> xử lý ==> next response ==> router =>=> layout ==> page ==> trả về client

## Các thư viện hỗ trợ Data Fetching Client

-   swr
-   tandstack
-   redux toolkit query

```jsx
//NextRequest
//NextResponse
import { NextResponse } from "next/server";
export const middleware = (request) => {
    const isAuthenticated = true;
    const pathname = request.nextUrl.pathname;
    if (pathname === "/lien-he") {
        return NextResponse.rewrite(new URL("/contact", request.url));
        //http://localhost:3000/contact
    }
    if (pathname === "/contact") {
        return NextResponse.redirect(new URL("/lien-he", request.url));
    }
    if (pathname.startsWith("/products") && !isAuthenticated) {
        return Response.redirect(new URL("/auth/login", request.url));
        //http://localhost:3000/auth/login
        // return Response.json({ message: "Lỗi rồi" });
    }
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-api-key", "ahihi");
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    //   const name = request.cookies.get("name");
    //   console.log(name);
    //   response.cookies.set("age", 32, {
    //     path: "/",
    //     maxAge: 600,
    //     httpOnly: true,
    //   });
    response.cookies.delete("email");
    return response;
};

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        // "/products/:path*",
    ],
};
```

## route API

```jsx
export function GET(request) {
    const q = request.nextUrl.searchParams.get("q");
    return Response.json(
        {
            q,
            data: [
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
            ],
        },
        {
            status: 200,
        }
    );
}

export async function POST(request) {
    const body = await request.json();
    return Response.json({ body }, { status: 201 });
}
```

## Trong func Component

//Trong ServerComponent ==> Hỗ trợ async component

```jsx
import Button from "./Button";
export default async function UsersPage() {
    let users = [];
    try {
        const response = await fetch(process.env.SERVER_API + "/users");
        if (!response.ok) {
            throw new Error("Server Error");
        }
        users = await response.json();
    } catch (e) {
        return <h3>Đã có lỗi xảy ra</h3>;
    }
    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                    <Button id={user.id} />
                </div>
            ))}
        </div>
    );
}
```

```jsx
"use client";
import { useRouter } from "next/navigation";
export default function Button({ id }) {
    const { push } = useRouter();
    const handleClick = () => {
        push(`/users/${id}`);
    };
    return <button onClick={handleClick}>Xem chi tiết</button>;
}
```

## Cache

-   khi 1 hàm fetch được gọi, mặc định sẽ có cache

```jsx
const getTodos = async () => {
    const response = await fetch(process.env.SERVER_API_TODO, {
        cache: "no-cache", // mặc định là force-cache
        next: {
            // revalidate: 60, đơn vị là giây
            tags: ["todos"],
        },
    });
    if (!response.ok) {
        throw new Error("Server Error");
    }
    return response.json();
};
export default async function TodoList() {
    const todoList = await getTodos();
    return (
        <div>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
```

### Revalidate

-   chỉ sử dụng trong Router Handler, server action,
-   revalidatePath(): Xóa cache theo path
-   revalidateTag(): Xóa cache theo tag

```jsx
//util/cache.js
export const clearCachePath = async (path) => {
    const response = await fetch(process.env.APP_URL + "/api/cache", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "path", value: path }),
    });
    return response.ok;
};

export const clearCacheTag = async (tag) => {
    const response = await fetch(process.env.APP_URL + "/api/cache", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "tag", value: tag }),
    });
    return response.ok;
};

// api/cache/route.js
import { revalidatePath, revalidateTag } from "next/cache";
export async function POST(request) {
    const { type, value } = await request.json();
    if (type === "path") {
        revalidatePath(value);
    } else if (type === "tag") {
        revalidateTag(value);
    }
    return Response.json({
        status: true,
    });
}
// TodoAdd
("use client");
import { clearCacheTag, clearCachePath } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoAdd() {
    const [title, setTitle] = useState("");
    const router = useRouter();
    const handleChangeValue = (e) => {
        setTitle(e.target.value);
    };
    const addTodo = async (todo) => {
        const response = await fetch(process.env.SERVER_API_TODO, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });
        return response.ok;
    };
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!title) {
            return alert("Vui lòng nhập");
        }
        const status = await addTodo({ title });
        if (status) {
            // clearCachePath("/todos");
            clearCacheTag("todos");
            setTitle("");
            router.refresh();
        }
    };
    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" onChange={handleChangeValue} value={title} />
            <button>Submit</button>
        </form>
    );
}
```

## Server Action

-TH1

```jsx
export default async function Form() {
    const handleAction = async (form) => {
        "use server";
        return {
            title: form.title,
        };
    };
    return (
        <form action={handleAction}>
            <input type="text" name="title" />
            <button>Submit</button>
        </form>
    );
}
```

//TH2
khi gọi từ client thì handle phải tách file và đưa use server lên đầu

```jsx
"use client";
import { useRef, useState } from "react";
import { handleAction } from "./action";
export default function TodoForm() {
    const [msg, setMsg] = useState("");
    const formRef = useRef();
    return (
        <form
            ref={formRef}
            action={async (form) => {
                const response = await handleAction(form);
                if (!response.status) {
                    setMsg("Đã có lỗi xảy ra");
                } else {
                    formRef.current.reset();
                    setMsg("");
                }
            }}
        >
            <input type="text" name="title" />
            <button>Submit</button>
            {msg && <span className="d-block text-danger">{msg}</span>}
        </form>
    );
}
```

//action.js

```jsx
"use server";

import { revalidateTag } from "next/cache";

export const handleAction = async (form) => {
    const title = form.get("title");
    if (!title) {
        return { status: false };
    }
    //Call API
    const response = await fetch(process.env.SERVER_API_TODO, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    });
    //Clear Cache
    if (response.ok) {
        revalidateTag("todos");
        return { status: true };
    }
    return { status: false };
};
```
