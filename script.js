var btnpress = document.querySelectorAll(".cell input");
var output = document.querySelector(".output");

var memoryValue = 0;
var isSecondFunction = false;
var storedRoot = null;

btnpress.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.value;
        var currentDisplay = output.value;

        if (currentDisplay === "Error" || currentDisplay === "Infinity" || currentDisplay === "NaN") {
            output.value = "";
        }

        if (value === "AC") {
            output.value = "";
            storedRoot = null;
        }

        else if (value === "X") {
            output.value = currentDisplay.slice(0, -1);
        }
        else if (value === "mc") {
            memoryValue = 0;
        }
        else if (value === "m+") {
            memoryValue += parseFloat(currentDisplay);
        }
        else if (value === "m-") {
            memoryValue -= parseFloat(currentDisplay);
        }
        else if (value === "mr") {
            output.value = memoryValue;
        }
        else if (value === "√x") {
            output.value = Math.sqrt(parseFloat(currentDisplay));
        }
        else if (value === "∛x") {
            output.value = Math.cbrt(parseFloat(currentDisplay));
        }
        else if (value === "ʸ√x") {
            storedRoot = parseFloat(currentDisplay);
            output.value += "√";
        }
        else if (value === "1/x") {
            output.value = 1 / parseFloat(currentDisplay);
        }
        else if (value === "x²") {
            output.value = Math.pow(parseFloat(currentDisplay), 2);
        }
        else if (value === "x³") {
            output.value = Math.pow(parseFloat(currentDisplay), 3);
        }
        else if (value === "xʸ") {
            output.value += "^";
        }
        else if (value === "eˣ") {
            output.value = Math.exp(parseFloat(currentDisplay));
        }
        else if (value === "10ˣ") {
            output.value = Math.pow(10, parseFloat(currentDisplay));
        }
        else if (value === "x!") {
            output.value = factorial(parseInt(currentDisplay));
        }
        else if (value === "log") {
            output.value = Math.log10(parseFloat(currentDisplay));
        }
        else if (value === "Ln") {
            output.value = Math.log(parseFloat(currentDisplay));
        }
        else if (value === "sin") {
            output.value = Math.sin(parseFloat(currentDisplay));
        }
        else if (value === "cos") {
            output.value = Math.cos(parseFloat(currentDisplay));
        }
        else if (value === "tan") {
            output.value = Math.tan(parseFloat(currentDisplay));
        }
        else if (value === "sinh") {
            output.value = Math.sinh(parseFloat(currentDisplay));
        }
        else if (value === "cosh") {
            output.value = Math.cosh(parseFloat(currentDisplay));
        }
        else if (value === "tanh") {
            output.value = Math.tanh(parseFloat(currentDisplay));
        }
        else if (value === "e") {
            output.value += Math.E;
        }
        else if (value === "π") {
            output.value += Math.PI;
        }
        else if (value === "Rand") {
            output.value = Math.random();
        }
        else if (value === "Rad") {
            output.value = toDegrees(parseFloat(currentDisplay));
        }
        else if (value === "EE") {
            output.value += "e";
        }
        else if (value === "2nd") {
            isSecondFunction = !isSecondFunction;
        }
        else if (value === "%") {
            output.value = parseFloat(eval(currentDisplay)) / 100;
        }
        else if (value === "=") {
            try {
                if (storedRoot !== null) {
                    output.value = ytRoot(currentDisplay, storedRoot);
                    storedRoot = null;
                } else {
                    output.value = eval(currentDisplay.replace('^', '**'))
                }
            } catch (e) {
                output.value = "Error";
            }
        }
        else {
            output.value += value;
        }
    });
});

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function ytRoot(display, root) {
    var index = display.indexOf('√');
    var number = parseFloat(display.slice(index + 1));
    if (isNaN(number) || isNaN(root) || root === 0) {
        return "Error";
    }
    return Math.pow(number, 1 / root).toFixed(10);
}


const darkModeToggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    darkModeToggle.innerHTML = '☀️';
    document.querySelector('body').style.backgroundColor = '#000000';
    document.querySelector('.cell').style.backgroundColor = '#000000';
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    darkModeToggle.innerHTML = '🌙';
    document.querySelector('body').style.backgroundColor = '#ffffff';
    document.querySelector('.cell').style.backgroundColor = '#ffffff';
    localStorage.setItem('darkMode', 'disabled');
}
