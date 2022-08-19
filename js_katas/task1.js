/*
A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Magoso" and store it in a variable called result. He needs your help to fix this code.

Examples
nameString("Mubashir") ➞ "MubashirMagoso"

nameString("Matt") ➞ "MattMagoso"

nameString("javaScript") ➞ "javaScriptMagoso"
*/

// Code starts here
const nameString = (myName) => {
    let result=(myName+'Magoso').toString()
    console.log(result)
    return(result)
}
nameString('Mubashi')
// Code ends here

/***********************************************************************************************************************/

/*
Create a function that accepts two numbers as arguments and return the remainder when you divide the first number with the second number

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
*/

// Code starts here
const remainder = (a,b) => {
    let myRemainder = a % b
    return(myRemainder)
}
remainder(5,6)
// Code ends here

/***********************************************************************************************************************/

/*
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
*/

// Code starts here
const triangleArea = (b,h) => {
    let area = 0.5 * b * h
    console.log(area)
}
triangleArea(4,5)
// Code ends here

/***********************************************************************************************************************/

/*
Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

*/

// Code starts here
const minutesToSeconds = (minutes) => {
    let seconds = minutes * 60
    console.log(seconds)
    return (seconds)
}
minutesToSeconds(5)
// Code ends here

/***********************************************************************************************************************/

/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

*/

// Code starts here
const intergerToString = (number) => {
    let theString=number.toString()
    console.log(theString)
    return(theString)
}
intergerToString(450)

// Code ends here

/***********************************************************************************************************************/

/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

//Code starts here
const minMax = (myArray) => {  
    let myResult = []
    myResult.push(Math.min(...myArray) )
    myResult.push(Math.max(...myArray) )
    console.log(myResult)
}
minMax([3,5,2,1,6,8,45])
//Code ends here

/***********************************************************************************************************************/

/*
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50
*/
//Code starts here
const totalLegs = (chickens, cows, pigs) => {
    let sum = (chickens * 2) + (cows * 4) + (pigs * 4)
    console.log(sum)
    return(sum)
}
totalLegs(2,3,5)

//Code ends here

/***********************************************************************************************************************/

/*
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
*/
//Code starts here
const argument = (arg1,arg2) => {
    let makepair = []
    makepair.push(arg1)
    makepair.push(arg2)
    console.log(makepair)
}
argument('Orange','Mango')

//Code ends here

/***********************************************************************************************************************/

/*
Create a function that accepts two strings as arguments and return true if they have equal number of characters or false if they do not.

Examples
compareStrings("home", "roof") ➞ true
compareStrings("no", "yes") ➞ false
*/
//Code starts here
const twoStrings = (string1,string2) => {
    if (string1 === string2) {
    console.log('True')
        return(Boolean)
    } else {
       console.log('False')
        return(Boolean)
    }
}
twoStrings('Mango','Mango')
//Code ends here
