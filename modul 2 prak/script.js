let display = document.getElementById('screen');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function sliceDisplay(){
    display.value = currentInput.slice(0, -1);
    currentInput = currentInput.slice(0, -1);
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
