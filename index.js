const display = document.querySelector('#display');
const operatorBtn = document.querySelector('.operator-btn')

let firstValue = null;
let secondValue = null;
let operator = '';

function handleOperatorClick(op) {
    firstValue = display.value;
    operator = op;
    clearDisplay()

}

function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = '';
}

function calculate(operator) {

    secondValue = display.value

    switch (operator) {
        case '+':
            display.value = add()
            break;
        case '-':
            display.value = substract()
            break;
        case '*':
            display.value = multiply()
            break;
        case '/':
            display.value = divide()
            break;
        default:
            display.value = 'Error'
            break;
    }
}

function add() {
    return parseFloat(firstValue) + parseFloat(secondValue)
}

function substract() {
    return parseFloat(firstValue) - parseFloat(secondValue)
}

function multiply() {
    return parseFloat(firstValue) * parseFloat(secondValue)
}

function divide() {
    return parseFloat(firstValue) / parseFloat(secondValue)
}


