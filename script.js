var display = document.getElementById("inputbox");

function calc(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = ""
}
function Delchar() {
    display.value = display.value.slice(0,-1);
}

function calculate() {
    display.value = eval(display.value)
}
