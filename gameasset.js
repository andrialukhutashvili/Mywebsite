
let x;
do {
  x = window.prompt("Enter your name:");
  if (!x) alert("Name is required. Please try again.");
} while (!x);

console.log("Hello, " + x + "!");

