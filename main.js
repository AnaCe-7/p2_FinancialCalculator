window.addEventListener('load', ()=> {
    const display = document.querySelector(".calculator-display");
    const calculatorButtons = document.getElementsByClassName('btn');

    const calculatorButtonsArray = Array.from(calculatorButtons);

    calculatorButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);            
        })
    })
});

function calculadora (button, display) {
    switch (button.innerHTML){
        case 'C':
            erase(display);
            break;

        case '=':
            calculate(display);
            break;
        
        default:
            update(display, button);
            break;
    }
}

function calculate(display) {
    display.innerHTML = eval(display.innerHTML);
}

function update(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML = display.innerHTML + button.innerHTML;
    
    if (button.id === "delete") {
        if (display.textContent.length === 1 || display.textContent === "Error") {
            display.textContent = "0";
        } else {
            display.textContent = display.textContent.slice(0, -1);
        }
        return;
    }
}

function erase(display) {
    display.innerHTML = 0;
}