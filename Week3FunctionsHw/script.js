// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1 , num2 , num3){
    let arr = []
    arr.push(num1 , num2 , num3)
    let arr2 = arr.reduce((prevNum , currNum) => prevNum > currNum ? prevNum : currNum)
    console.log(arr2);
}
maxOfThree(10 , 5 , 15)