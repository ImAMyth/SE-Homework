// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let biggestNumDisplay = document.querySelector(".biggestNum")
let num1 = Number(prompt("Choose a number : "))
let num2 = Number(prompt("Choose another number : "))
let num3 = Number(prompt("Choose one last number : "))

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

let convertToF = document.querySelector(".cToF")
let celTemperature = prompt("Choose a degree in Celsius to convert to Fahrenheit : ")
let fTemperature = 0

function celsiusToFahrenheit(celTemperature) {
    fTemperature = Math.round((celTemperature * 1.8) + 32)
    convertToF.textContent = `${celTemperature} Celsius is equal to ${fTemperature} Fahrenheit`
}
celsiusToFahrenheit(celTemperature)



// 2b. Create a function called fahrenheitToCelsius:

// - Now take a Fahrenheit temperature from the user and convert it to Celsius

// - Return string as output: "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


let convertToC = document.querySelector(".fToC")
let fTemp = prompt("Choose a degree in Fahrenheit to convert to Celsius : ")
let cTemp = 0
function fahrenheitToCelsius(fTemp) {
    cTemp = Math.round((fTemp - 32) * .5556)
    convertToC.textContent = `${fTemp} Fahrenheit is equal to ${cTemp} Celsius`
}
fahrenheitToCelsius(fTemp)



// 3. Create an array of at least five Student objects with the following properties: name, activity, gender

// - Filter all those students who are into swimming

// - Filter all those students who are in the activity entered by the user. For example, if the user enters "Basketball" display only students with basketball as their activity 



let students = [{
    firstName: "John",
    lastName: "Johnson",
    activity: "basketball",
    gender: "Male"
},
{
    firstName: "Nathan",
    lastName: "Robinson",
    activity: "swimming",
    gender: "Male"
},
{
    firstName: "Stacy",
    lastName: "Jones",
    activity: "swimming",
    gender: "Female"
},
{
    firstName: "Alex",
    lastName: "Adams",
    activity: "running",
    gender: "Male"
},
{
    firstName: "Samantha",
    lastName: "Erickson",
    activity: "swimming",
    gender: "Female"
}]

let activityChoice = prompt("Choose an activity of either running , swimming or basketball : ").toLowerCase()
let choices = document.querySelector(".choice")
let objects =  document.querySelector(".objects")

choices.textContent = ObjectsToString(filterActivity(activityChoice, students))
objects.textContent = ObjectsToString(students)

function filterActivity(activities, students) {
    return students.filter(object => object.activity === activities)
}

function ObjectsToString(array){    
  let allObjects = array.map(object => `${object.firstName} ${object.lastName} ${object.activity} ${object.gender}`).join(", ")
   return allObjects
}
