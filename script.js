let operator = '';
let previousValue = '';
let currentValue = '';

function add(value1, value2) {
    return value1 + value2;
}

function substract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    return value1 / value2;
}

function operate(operator, value1, value2) {
    switch (operator) {
        case '+':
            add(value1, value2);
            break;
        case '-':
            substract(value1, value2);
            break;
        case '*':
            multiply(value1, value2);
            break;
        case '/':
            divide(value1, value2);
            break;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let clear = document.querySelector('#clear');
    let decimal = document.querySelector('.decimal');
    let equals = document.querySelector('.equals');

    let number = document.querySelectorAll('.number');
    let operatorButtons = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    number.forEach((number) => number.addEventListener('click', function (e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operatorButtons.forEach((op) => op.addEventListener('click', function (e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener('click', function () {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equals.addEventListener('click', function () {
        if (currentValue != '' && previousValue != '') {
            calculate();
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue;
            if (previousValue.length <= 5) {
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0, 5) + "...";
            }
        }
    })

    decimal.addEventListener('click', function () {
        addDecimal();
    })
});

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "*") {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
}