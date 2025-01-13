### metadata

```jsx
export const metadata = {
    title: "Trang chủ - F8",
    description: "Học lập trình không khó",
    keywords: "html-css,js,reactjs",
    openGraph: {
        title: "Trang chủ - F8 111",
        description: "Học lập trình không khó 111",
        images: ["https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"],
    },
    icons: [
        {
            url: "https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png",
            type: "image/png",
        },
    ],
};
```

### generateMetadata

```jsx
export const generateMetadata = async ({ params: { postId } }) => {
    const post = await getPostById(postId);
    return {
        title: post?.title,
    };
};
const getPostById = async (postId) => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    const post = await response.json();
    return post;
};
export default async function PostDetail({ params: { postId } }) {
    const post = await getPostById(postId);
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
```
