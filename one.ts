const age:number = 30;
const namer:string = "John Doe";
const isStudent:boolean = true;

console.log(`Name: ${namer}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`kire khankir pola ${namer}, tor boyosh bole ${age} bosor, ar tumi student kina? ${isStudent}`);


var username:string = "Alice";
username = "bob"; // Reassigning the value of username
username = username.toUpperCase(); // Using a string method to convert username to uppercase
console.log(`Updated Username: ${username}`);

let x = undefined; // x is declared but not initialized, so it is undefined
console.log(`Value of x: ${x}`); // Output: Value of x: undefined
x = 42; // Now x is assigned a number value
console.log(`Updated value of x: ${x}`); // Output: Updated value of x: 42