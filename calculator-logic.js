// Selecting elements - keeping it clean
const screen = document.getElementById('main-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";

// Using a single loop for performance (Expert tip)
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-val');
        const op = btn.getAttribute('data-op');

        // Logic for scientific operations
        if (op) {
            handleScientific(op);
        } 
        // Logic for standard numbers/operators
        else if (val) {
            handleInput(val);
        }
    });
});

// Equals button specific listener
document.getElementById('calculate').addEventListener('click', () => {
    try {
        if (!currentInput) return;
        // Solving the string expression
        let result = eval(currentInput);
        currentInput = result.toString();
        screen.value = currentInput;
    } catch (err) {
        screen.value = "Error";
        setTimeout(() => { clearAll(); }, 1000);
    }
});

function handleInput(v) {
    if (currentInput === "0") currentInput = v;
    else currentInput += v;
    screen.value = currentInput;
}

function handleScientific(command) {
    if (command === "clear") {
        clearAll();
    } 
    else if (command === "pi") {
        currentInput += Math.PI.toFixed(4);
    } 
    else if (command === "sqrt") {
        currentInput = Math.sqrt(eval(currentInput || 0)).toString();
    } 
    else if (command === "pow") {
        currentInput = Math.pow(eval(currentInput || 0), 2).toString();
    }
    screen.value = currentInput || "0";
}

function clearAll() {
    currentInput = "";
    screen.value = "0";
}