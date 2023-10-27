// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(inputString) {
    // Define an array of vowels to check for
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the input string to lowercase for case-insensitive comparison
    inputString = inputString.toLowerCase();

    // Iterate through the characters in the string
    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            // Log the index of the first vowel and return it
            console.log(`The first vowel '${inputString[i]}' is at index ${i}.`);
            return i;
        }
    }

    // If no vowel is found, log that there are no vowels in the string
    console.log("No vowels found in the string.");
    return -1;
}

// Example usage:
let inputString = "Hello, World!";
findFirstVowelIndex(inputString);


// Critique the code output. 
// I was not surprised that the output was both correct and super detailed because CHATGPT is known to be a super advanced AI system.  However, since the prompt was only asking for the index value of the first vowel I would have used a different console.log output. I would have used console.log(i) since it was just asking for the index value. 

//Things I Liked: Code is easy to read. They set up a new variable in which they turned the string into all lower case so their vowels array didn't have to include captial vowels. 

//Things I did not like: They didn't use a else statement for lines 26-27

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 