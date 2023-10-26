// ASSESSMENT 2: Coding Practical Questions with Jest

const { arrayTypeAnnotation } = require("@babel/types")

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe('divisiblebByThree', () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
        expect(divisiblebByThree(object1)).toEqual("15 is divisible by three")
        expect(divisiblebByThree(object2)).toEqual("0 is divisible by three")
        expect(divisiblebByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// pseudo code: Lines 38: Using the describe method we can take in arguement of both a string and a function
// line 39: it, declares what the test is going to do in real words and function
//line 40-42: calling our function in which our expected argument is to equalto/meet to pass
//should recieve a good fail in which devisibleByThree is not declared

// b) Create the function that makes the test pass.

// const divisiblebByThree = (object) => {
//         if (object.number % 3 ===0){
//             return `${object.number} is divisible by three`
//         }else{
//             return `${object.number} is not divisible by three`
//         }
//     }

    // refferencing value is dot Notification. leared this under objects


// Pseudo code:
// 53-57: Defined what our divisibleByThree is. Created a function that contains a conditional statement to determine wether or not the number contained within the object is divisible by 3. if it is then we tell the function to return the number is divisible by three. If it isn't divisible by three then return the number is not divisible by three.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]



describe('arrayOfNouns', ()=>{
    it("returns an array with all the words capitalized",() =>{
        expect(arrayOfNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayOfNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

//psuedo code: lines 78-81 we use the describe method to take in arguement of both a string and a function
//line 79 declare what our test is going to do in real words
//line 80 calling our function in which our expected argument is to equalto/meet to pass

// b) Create the function that makes the test pass.

const arrayOfNouns = (array) => {
    return array.map((string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    })
}

//psuedo code: defined what arrayOfNouns is. We created a function in which we can take in an array and maps through entire array that was taken which are strings. Then we use the .charAt method along with .toUpperCase method to return a new string at the index specified capitalized. Then we have to concantinate the New string with the rest of the letters using slice. The slice method to remmove the first letter of each string and then concat them together. 