console.log("Let's do this!")
/*
1. Prompt the user for a number between 1 and 10.
2. Set variable with a number that's based on random number generator.
3. Check user input with generated random number.
4. If input is equal to generated random number, alert user that it matches.
5. If input is not equal to generated number, alert user it does not match.
*/

let guess = prompt("Give me a number between 1 and 10.");

let number = Math.floor( Math.random() * 10) + 1;

if (guess == number) {
    alert(`You guessed the right number...${number}`);
} else {
    alert(`Sorry, the right number is...${number}`);
}
