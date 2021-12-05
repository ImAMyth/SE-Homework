// Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)

const prompt = require("prompt-sync") ()
let userStr = prompt("Enter a word :")
let reverseStr = userStr.split('').reverse().join("")
if (userStr.toLowerCase() ===  reverseStr.toLowerCase()) {
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}