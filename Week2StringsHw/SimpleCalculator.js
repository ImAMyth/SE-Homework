// Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.

// MENU

// 1. Add

// 2. Subtract

// 3. Multiply

// 4. Divide

// 5. Exit

let prompt = require("prompt-sync")()
let firstNumber = Number(prompt("Choose a number : "))
let secondNumber = Number(prompt("Choose another number : "))
let operation = Number(prompt("Choose a number 1-5 , 1 to add , 2 to subtract , 3 to multiply , 4 to divide , 5 to exit : "))
let result;


switch (operation) {
    case 1:
        result = firstNumber + secondNumber
        console.log(`${firstNumber} + ${secondNumber} = ${result}`)
        break;

    case 2:
        result = firstNumber - secondNumber
        console.log(`${firstNumber} - ${secondNumber} = ${result}`)
        break;

    case 3:
        result = firstNumber * secondNumber
        console.log(`${firstNumber} * ${secondNumber} = ${result}`)
        break;

    case 4:
        result = firstNumber / secondNumber
        console.log(`${firstNumber} / ${secondNumber} = ${result}`)
        break;

    case 5:
        console.log("Exit")
        break;

    default:
        console.log("Why Are you trying to break my code??")
        break;
}
