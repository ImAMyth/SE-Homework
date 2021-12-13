// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let biggestNumDisplay = document.querySelector("#biggestNum")
let num1 = prompt("Choose a number : ")
let num2 = prompt("Choose another number : ")
let num3 = prompt("Choose one last number : ")

function maxOfThree(num1, num2, num3) {
    let arr = []
    arr.push(num1, num2, num3)
    let arr2 = arr.reduce((prevNum, currNum) => prevNum > currNum ? prevNum : currNum)
    biggestNumDisplay.textContent = `The biggest number is ${arr2}`
}
maxOfThree(num1, num2, num3)


// 2a. Create a function called celsiusToFahrenheit:

// - Take a Celsius temperature from the user and convert it to Fahrenheit

// - Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"

let convertToF = document.querySelector("#cToF")
let celTemperature = prompt("Choose a degrees in Celsius to convert to Fahrenheit : ")
let fTemperature = 0

function celsiusToFahrenheit(celTemperature) {
    fTemperature = (celTemperature * 1.8) + 32
    convertToF.textContent = `${celTemperature} Celsius is equal to ${fTemperature} Fahrenheit`
}
celsiusToFahrenheit(celTemperature)