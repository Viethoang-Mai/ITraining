# Giới thiệu về Next.js

## 1. Next.js là gì?

-   Next.js là fullstack framework cho React.js được tạo ra bởi Vercel (trước đây là ZEIT).
-   Next có thể làm server như Express.js bên Node.js và có thể làm client như React.js

## 2. Next.js giải quyết vấn đề gì?

### Đầu tiên là render website ở Server nên thân thiện với SEO

React.js thuần chỉ là client side rendering, nhanh thì cũng có nhanh nhưng không tốt cho SEO. Ai nói với bạn rằng sài React.js thuần vẫn lên được top google ở nhiều thì đó là lừa đảo (hoặc họ chỉ đang nói 1 nữa sự thật)

Next.js hỗ trợ server side rendering, nghĩa là khi người dùng request lên server thì server sẽ render ra html rồi trả về cho người dùng. Điều này giúp cho SEO tốt hơn.

### Tích hợp nhiều tool mà React.js thuần không có

-   Tối ưu image, font, script
-   CSS module
-   Routing
-   Middleware
-   Server Action
-   SEO ...

### Thống nhất về cách viết code

Ở React.js, có quá nhiều cách viết code và không có quy chuẩn.

Ví dụ:

-   Routing có thể dùng React Router Dom hoặc TanStack Router.
-   Nhiều cách bố trí thư mục khác nhau

Dẫn đến sự không đồng đều khi làm việc nhóm và khó bảo trì.

Next.js giúp bạn thống nhất về cách viết code theo chuẩn của họ => giải quyết phần nào đó các vấn đề trên

### Đem tiền về cho Vercel 🙃

Ngày xưa các website thường đi theo hướng Server Side Rendering kiểu Multi Page Application (MPA) như PHP, Ruby on Rails, Django, Express.js ... Ưu điểm là web load nhanh và SEO tốt, nhưng nhược điểm là UX hay bị chớp chớp khi chuyển trang và khó làm các logic phức tạp bên client.

Sau đó React.js, Angular, Vue ra đời, đi theo hướng Single Page Application (SPA) giải quyết được nhược điểm của MPA, nhưng lại tạo ra nhược điểm mới là SEO kém và load chậm ở lần đầu.

Vercel là công ty cung cấp các dịch vụ phía Server như hosting website, serverless function, database, ...và họ cũng là công ty đầu tiên khởi xướng trào lưu "quay trở về Server Side Rendering" .

Vì thế họ tạo ra Next.js, vừa để khắc phục nhược điểm của SPA truyền thống, vừa gián tiếp bán các sản phẩm dịch vụ của họ. Ví dụ Next.js chạy trên dịch vụ Edge Runtime của họ sẽ có độ trễ thấp hơn so với chạy trên Node.js

## FAQ

1. Có nên dùng Next.js làm Backend luôn không?

Nếu cần làm 1 dự án nhỏ cỡ 1-5 người làm, thời gian triển khai nhanh, không yêu cầu nhiều nghiệp vụ phức tạp thì có thể dùng Next.js làm fullstack framework luôn

Còn lại thì chỉ nên dùng Next.js làm Front-End thôi. Vì backend Next.js sẽ thiếu nhiều tính năng hơn khi so sánh với các framework chuyên backend khác. Chưa hết, dùng Next.js làm backend bạn sẽ dính vào hệ sinh thái Node.js

2. Làm website quản lý không cần SEO thì có nên dùng Next.js không?

Không cần thiết, có thể dùng React.js Vite truyền thống.

Nếu bạn sợ trong tương lai có làm mấy cái landing page hay trang public ra ngoài thì chọn Next.js là lựa chọn an toàn.

3. Next.js có phù hợp với dự án lớn không?

Có. Rất nhiều dự án lớn dùng Next.js như Tiktok, Netflix, Uber, ...

4. Next.js deploy ở đâu?

Nên deploy trên VPS (tức là máy chủ ảo)

Ngoài ra có thể deploy trên Vercel, Netlify. Nếu free thì chậm (phù hợp demo), còn trả phí thì khá là đắt.

### Cơ chế rendering

Có 2 môi trường mà web chúng ta có thể render

Client: đại diện trình duyệt người dùng Server: đại diện cho máy chủ nơi chứa data và trả về response

Client và Server là 2 môi trường tách biệt với nhau. Đây gọi là Network Boundary

Vì next.js có khả năng render code React ở server và client nên đôi khi dev hiểu nhầm rằng 2 môi trường là một.

Với Next.js, code lúc nào cũng phải phân biệt rõ ràng giữa 2 môi trường này bằng từ khóa 'use client' hoặc 'use server'

Ví dụ đang ở môi trường client, muốn truy cập data ở server thì cần phải gửi 1 request mới đến server mới lấy được.

# Client component

## React SPA truyền thống (React Vite, CRA, ...) là 1 client component khổng lồ

Khi lần đầu vào 1 trang web

1. Trình duyệt **request** đến server và trả về file `index.html` cơ bản (hầu như không chứa html gì nhiều)
2. Trình duyệt nhận thấy trong file html có link đến file js, css nên là **request lần nữa** đến server để lấy file js, css
3. Trình duyệt tiến hành chạy code JS để render ra HTML và gắn sự kiện vào HTML đó
4. Người dùng thấy và tương tác được với trang web

Trong quá trình này, web sẽ trắng xóa cho đến khi bước thứ 3 được hoàn thành.

Vậy nên mới nói lần đầu tiên khi truy cập vào các SPA truyền thống khá lâu, nhưng sau đó thì thao tác hay chuyển trang sẽ rất nhanh vì js bundle cả app đã có ở client rồi, nếu cần data thì mới request đến server lấy data thôi.

Các bạn để ý cái bước thứ 3, lúc nào HTML cũng được JavaScript trình duyệt render ra khi chúng ta truy cập vào web. Cái này gọi là **Dynamic Rendering**

Với Dynamic Rendering, HTML được render ra khi chúng ta request, có thể được render ở client hoặc server đều được.

## Client Component Next.js

Dùng client component khi:

-   Cần tương tác: dùng hook, useState, useEffect, event listener (onClick, onSubmit, onChange,...), ...
-   Cần dùng các API từ trình duyệt

Trong Next.js, mặc định tất cả các component đều được render ra HTML sẵn khi có thể lúc Nextjs build (Static Rendering). Kể cả Server component và Client component.

Vậy nên khi bạn truy cập vào 1 trang web Next.js, bạn sẽ thấy UI ngay lập tức do Server Next.js trả về HTML đã render sẵn. Sau đó trình duyệt sẽ render lại CLient Component 1 lần nữa để đồng bộ DOM, sự kiện, state, effect.

Rút ra được điều gì từ đây?

-   Client Component bị render tối thiểu 2 lần: 1 lần khi build, 1+ lần ở client
-   Vì trả về HTML sẵn nên người dùng có thể thấy content ngay lập tức (Tăng UX)
-   Dù thấy content ngay lập tức nhưng vẫn không thể tương tác ngay được vì cần phải chờ trình duyệt đồng bộ lại client component (render, gắn sự kiện, state, effect...)

Ưu điểm của Client Component:

-   Giảm gánh nặng cho server khi component nặng và phức tạp về logic => Server yếu thì nên dùng

Nhược điểm của Client Component:

-   SEO không tốt
-   Thiết bị client yếu thì chạy không nổi
-   Tăng bundle size javascript

Lời khuyên :

Dùng Server Component khi có thể, Được không đặt nặng vấn đề về cấu hình Server, vì dùng cho production thì server phải tốt. Quan trọng là trải nghiệm người dùng

# Server Component

Đây là chế độ mặc định của component trong Next.js

Ưu điểm:

-   Fetch data ở server => Nơi gần data center nên là sẽ nhanh hơn là fetch ở client => Giảm thiểu thời gian rendering, tăng UX
-   Bảo mật: Server cho phép giữ các data nhạy cảm, logic đặc biệt không muốn public ở client
-   Caching: Vì được render ở server nên có thể lưu giữ cache cho nhiều người dùng khác nhau => Không cần render trên mỗi request
-   Bundle Size: Giảm thiểu JS bundle size vì client không cần tải về phần JS logic để render HTML
-   Load trang lần đầu nhanh và chỉ số FCP (First Contentful Paint) thấp do người dùng sẽ thấy content ngay lập tức
-   Search Engine Optimization and Social Network Shareability
-   Streaming

=> Ưu tiên dùng Server Component khi có thể

# Next.js render component của bạn như thế nào?

Component ở đây bao gồm Server Component và Client Component

## Khi chúng ta build

Mọi component dù là Server Component hay Client Component khi build đều sẽ có

-   Static HTML
-   JS Bundle
-   Ngoài ra còn có CSS Bundle, Image, Font,...

## Khi request lần đầu tiên (full page load)

1. Server Next.Js render server component và kết hợp với Client Component để tạo ra HTML để gửi về client

2. Client ngay lập tức thấy được website nhưng chưa tương tác được với nó (ví dụ chưa click, hover,...)

3. Trong đống JS Bundle download về có chứa **React Server Component Payload (RSC Payload)**, cái này dùng để để render lại client component ở client, cập nhật DOM

4. Cuối cùng là sẽ thêm các sự kiện vào các client component để tương tác với người dùng => Bước này gọi là Hydration, sau bước này thì có thể tương tác với website

> React Server Component Payload là 1 data đặc biệt được render ở phía Server phục vụ cho việc đồng bộ, cập nhật DOM giữa Client Component và Server Component

## Khi request lần thứ 2 (Subsequent Navigations)

Ví dụ chúng ta navigate từ `/home` sang `/about`

Thì server Next.js sẽ không trả HTML về cho chúng ta nữa mà trả React Server Component Payload (RSC Payload) và các bundle JS, CSS cần thiết.

Client sẽ tự render ra HTML

Điều này sẽ giúp việc navigation nhanh hơn, nhưng vẫn đảm bảo về SEO
