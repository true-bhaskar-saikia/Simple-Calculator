
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value); // Note: Be cautious with eval in production
    } catch (error) {
        alert('Invalid calculation');
    }
}
