window.addEventListener('load', ()=> {
    const calculatorDisplay = document.querySelector(".display");
    const calculatorButtons = document.getElementsByClassName('btn');

    const calculatorButtonsArray = Array.from(calculatorButtons);

    calculatorButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            
            if (button.id === "delete") {
                if (calculatorDisplay.textContent.length === 1 || calculatorDisplay.textContent === '---- Error ----') {
                    calculatorDisplay.textContent = "0";
                } else {
                    calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
                }
                return;
            }

            calculadora(button, calculatorDisplay);
        })
    })
});

function calculadora (button, calculatorDisplay) {
    switch (button.textContent){
        case 'C':
            deleteAll(calculatorDisplay);
            break;

        case '=':
            calculate(calculatorDisplay);
            break;
        
        default:
            update(calculatorDisplay, button);
            break;
    }
};

function calculate(calculatorDisplay) {
    try {
        calculatorDisplay.textContent = eval(calculatorDisplay.textContent);
    } catch {
        calculatorDisplay.textContent = '---- Error ----';
    }
    return;
};

function update(calculatorDisplay, button) {
    if (calculatorDisplay.textContent == 0 || calculatorDisplay.textContent === '---- Error ----') {
        calculatorDisplay.textContent = '';
    }
    calculatorDisplay.textContent = calculatorDisplay.textContent + button.textContent;
};

function deleteAll(calculatorDisplay) {
    calculatorDisplay.textContent = 0;
};