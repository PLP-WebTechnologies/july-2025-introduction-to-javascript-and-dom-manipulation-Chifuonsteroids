// ====================
// 🎯 Part 1: Basics
// ====================

// Variables and conditionals
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


// ====================
// ❤️ Part 2: Functions
// ====================

// Function to calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum:", calculateSum(5, 7));

// Function to format a greeting message
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Edwin"));


// ====================
// 🔁 Part 3: Loops
// ====================

// For loop: countdown from 5
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// While loop: iterate through an array
let fruits = ["apple", "banana", "cherry"];
let i = 0;
while (i < fruits.length) {
  console.log("Fruit:", fruits[i]);
  i++;
}


// ====================
// 🌐 Part 4: DOM Manipulation
// ====================

// 1. Change text content on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = "Text changed with JavaScript!";
});

// 2. Toggle a CSS class on button click
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("greeting").classList.toggle("colorToggle");
});

// 3. Add a new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});
