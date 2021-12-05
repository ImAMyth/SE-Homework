// Write a program to find how many letters, numbers, and special characters are in a user entered string.

let prompt = require("prompt-sync")()
let userStr = prompt("Enter a word or sentence: ")
let letters = 0
let numbers = 0
let specialChars = 0

for (let i = 0; i < userStr.length; i++) {

    if (userStr.toUpperCase().charCodeAt(i) >= 65 && userStr.toUpperCase().charCodeAt(i) <= 90) {
        letters++
    }
    else if (userStr.charCodeAt(i) >= 48 && userStr.charCodeAt(i) <= 57) {
        numbers++
    }
    else {
        specialChars++
    }

}
console.log("" + letters);
console.log(numbers);
console.log(specialChars);

  