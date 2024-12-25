//Destructuring: Cú pháp phá vỡ cấu trúc của object, array và lưu vào biến riêng biệt
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: undefined,
//   address: "Hà Nội",
//   position: "Teacher",
// };
// const name = user.name;
// const email = user.email;
// const { name: username, email, age = 32 } = user;
// console.log(username, email, age);

// const { name, email, ...rest } = user;
// console.log(name, email);
// console.log(rest);

// const a = {
//   name: "Hoàng An",
//   emails: {
//     email: "hoangan.web@gmail.com",
//     time: "1s",
//   },
// };
// //Lấy ra: name, email, time
// const {
//   name,
//   emails: { email, time },
// } = a;
// console.log(name);
// console.log(email);
// console.log(time);

const user = ["Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội", "Teacher"];
console.log(user);
// const [username, email, age, , position] = user;
// console.log(username, email, age, position);
// const [username, email, ...rest] = user;
// console.log(username, email);
// console.log(rest);

// function useState() {
//   return [10, function () {}];
// }

// const [number, setNumber] = useState();
// console.log(number, setNumber);

const googleInfo = {
    displayName: "Hoàng An",
    emails: [
        {
            email: "hoangan.web@gmail.com",
        },
    ],
};
//Lấy displayName và email
// const {
//   displayName,
//   emails: [{ email }],
// } = googleInfo;
// console.log(displayName);
// console.log(email);

const users = [
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
document.body.innerHTML = `${users
    .map(function ({ name }) {
        return `<h2>${name}</h2>`;
    })
    .join("")}`;
