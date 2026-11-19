let username = "Sulav";
let password = "sulav123";

let enteredUsername = prompt("Enter your username:");
let enteredPassword = prompt("Enter your password:");

if (enteredUsername === username && enteredPassword === password) {
    alert("Login successful");
} else {
    alert("Invalid credentials");
}