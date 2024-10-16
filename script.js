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

    if (operator === "+") {
        add(value1, value2);
    }
    else if (operator === "-") {
        substract(value1, value2);
    }
    else if (operator === "*") {
        multiply(value1, value2);
    }
    else if (operator === "/") {
        divide(value1, value2);
    }
}

let input = document.getElementById("input");
const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    input.value += "7";
})

