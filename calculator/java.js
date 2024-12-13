let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
    if (currentInput === '0' && value === '0') return; // Prevent multiple leading zeros
    currentInput += value;
    updateDisplay(currentInput);
}

function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('0');
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;

    let result;
    const current = parseFloat(currentInput);
    const previous = parseFloat(previousInput);

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : previous / current;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}
