// Import the inquirer library for prompting user input
import inquirer from "inquirer";
// Define an asynchronous function to calculate the result
async function calculateResult(numberOne, numberTwo, operator) {
    switch (operator) {
        case "Addition":
            return numberOne + numberTwo;
        case "Subtraction":
            return numberOne - numberTwo;
        case "Multiplication":
            return numberOne * numberTwo;
        case "Division":
            if (numberTwo === 0) {
                console.log("Error: Division by zero!");
                return undefined;
            }
            return numberOne / numberTwo;
        default:
            console.log("Error: Invalid operator!");
            return undefined;
    }
}
// Define the main asynchronous function
async function main() {
    // Prompt the user for input using inquirer
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "numberOne",
            message: "Enter your First Number:"
        },
        {
            type: "number",
            name: "numberTwo",
            message: "Enter your Second Number:"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            message: "Select Operator:"
        }
    ]);
    // Destructure the user's input
    const { numberOne, numberTwo, operator } = answers;
    // Calculate the result based on user input
    const result = await calculateResult(numberOne, numberTwo, operator);
    // Display the result or an error message
    if (result !== undefined) {
        console.log("Result is:", result);
    }
    else {
        console.log("Please enter valid input!");
    }
}
// Call the main function to start the program
main();
