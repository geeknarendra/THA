// assign
// let a: number;
// a = 30;
// let b: number = 20;
// let c: string = "Hello";
// let d: boolean = true;
// console.log(a, b, c);

//Array

// let arr: number[] = [1, 3, 4];
// arr.push(4)
// let arr2:string[]=["a","b","c"]
// arr2.push("d");

// console.log(arr,arr2);

//Mix of 2 arr using two data type in One arr
// let arr: (number | boolean)[] = [1, 4, 5.2, 5];
// arr.push(true);
// let arr2: (boolean | string | number)[] = [1, 3, "a", true];
// console.log(arr, arr2);

// Interface  template of a object

interface User {
  name: string;
  age: number;
  result: boolean;
}
let user: User = {
  name: "John",
  age: 12,
  result: false,
};
