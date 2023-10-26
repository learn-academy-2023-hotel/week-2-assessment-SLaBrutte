// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: ['Hotel', '2023']
// b) Verify and explain: Split turns your string into an array. However, since there is a space between the parenthesis it is seperating each element in the string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The function requires a return in line 20 before the statement.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Filter is used for if/else statements. Filters through the original array and takes each number and see if that number gives you a remainder. If it does then its odd and puts the odd numbers into a new array.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: .dot notation is used for objects to access the referencing key. So it runs myCodingSkills -> accesses the language object -> pulls the item index[0] = JavaScript

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: You're creating variable to hold the data of the new class constructor of "George" and outputting every field.
//  Actual answer = Learn { student: 'George', cohort: 'Hotel', year: 2023 }


