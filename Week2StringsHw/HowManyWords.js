// Write a program to find how many times a user entered word occurs in given string

let prompt = require("prompt-sync")()
let str = "We went to the store and bought two and a half pounds of chicken"
let strArr = str.toLowerCase().split(" ")
let wordCheck = prompt("Enter a word to be checked : ")
let count = 0
for (let i = 0; i < strArr.length; i++) {
        if(wordCheck === strArr[i])
        count++
       
}
console.log(count)