// This array stores all calculations history
const calculationHistory = [];
/**
 this is a re usable history function, 
 it adds figures in the operation functions into the empty array creating a consistent history of calculations
 */
function addToHistory(num1, num2, operator, result) {
    const calculation = {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result
    };

    calculationHistory.push(calculation);
}
// addition function
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
}
//substraction
function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}
//multiplication
function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}
//Division
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }

    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}

//Displays all stored calculations. 
 
function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No calculations have been performed yet.");
        return;
    }

    console.log("=== Calculation History ===");

    calculationHistory.forEach((item) => {
        console.log(
            `${item.num1} ${item.operator} ${item.num2} = ${item.result}`
        );
    });
}
// testing the stuff

console.log(add(5, 3));
console.log(subtract(4,2));
console.log(multiply(7,3));

// Display history
displayHistory();
