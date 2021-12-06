// BONUS: Capitalize the first letter of each word in a given string (or user entered string/sentence)

let prompt = require("prompt-sync")()
let str = prompt("Enter a word or sentence : ")
let modStr = str.toLowerCase().split(" ")

for (let i = 0; i < modStr.length; i++) {
    modStr[i] = modStr[i].charAt(0).toUpperCase() + modStr[i].slice(1)
}
console.log(modStr.join(" "))