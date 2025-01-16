export function isPositive(num: number) {
  return num > 0;
}
interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  major: string;
}
// type collab = Person & Student;
// const collab: collab = {
//   name: 'Hoàng An',
//   age: 32,
//   major: 'Javascript',
// }
const hoang: Array<Student> = [
  {
    name: 'Hoàng An',
    age: 32,
    major: 'Javascript',
  },
];
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
const direction = Direction.Down;
console.log(direction);
