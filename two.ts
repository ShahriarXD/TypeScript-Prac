// Non Primitive Data Types

// Object
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits : string[] = ["Apple", "Banana", "Cherry"];
numbers.push(6);
fruits.push("Date");
console.log(numbers);
console.log(fruits);

// Tuple
let tuple = ["Hello", 42, "World", "Oi mama", 100];
console.log(tuple);
// Any
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

// Void
function greet(): void {
  console.log("Hello!");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;